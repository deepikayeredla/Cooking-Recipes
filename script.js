// Recipe Data

document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    setupAuthModals();
    setupCuisineTags();
});

function initializeEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const closeButtons = document.querySelectorAll('.close-button');

    // Search Functionality
    searchInput.addEventListener('input', filterRecipes);

    // Recipe Card Click Events
    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            const recipeName = card.querySelector('h3').textContent;
            const recipeImage = card.querySelector('img').src;
            
            // Store recipe details in sessionStorage
            sessionStorage.setItem('selectedRecipeName', recipeName);
            sessionStorage.setItem('selectedRecipeImage', recipeImage);
            
            // Navigate to recipe details page
            window.location.href = 'recipe-details.html';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Modal Close Events
    const closeModalButtons = document.querySelectorAll('.close-button');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

function setupCuisineTags() {
    const cuisineTags = document.querySelectorAll('.cuisine-tag');

    cuisineTags.forEach(tag => {
        tag.addEventListener('click', () => {
            // Remove active class from all tags
            cuisineTags.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tag
            tag.classList.add('active');

            // Get the category and filter
            const category = tag.dataset.category;
            filterRecipesByCategory(category);
        });
    });
}

function filterRecipesByCategory(category) {
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeCuisine = document.querySelector('.cuisine-tag.active').dataset.category;
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = title.includes(searchTerm);
        const matchesCuisine = activeCuisine === 'all' || category === activeCuisine;

        if (matchesSearch && matchesCuisine) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Modified setupAuthModals function with signup validation
function setupAuthModals() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');

    const switchToLoginLinks = document.querySelectorAll('#switchToLogin');
    const switchToSignupLinks = document.querySelectorAll('#switchToSignup');

    // Open Login Modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Open Signup Modal
    signupBtn.addEventListener('click', () => {
        signupModal.style.display = 'block';
    });

    // Switch between Login and Signup
    switchToLoginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            signupModal.style.display = 'none';
            loginModal.style.display = 'block';
        });
    });

    switchToSignupLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'none';
            signupModal.style.display = 'block';
        });
    });

    // Form Submission Handlers
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Signup Form Validation
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = signupForm.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = signupForm.querySelector('input[placeholder="Email"]').value.trim();
        const password = signupForm.querySelector('input[type="password"]').value;
        const confirmPassword = signupForm.querySelectorAll('input[type="password"]')[1].value;

        // Validation checks
        if (fullName.length < 2) {
            alert('Please enter a valid full name');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Create user object
        const user = {
            fullName,
            email,
            password: hashPassword(password)  // Basic password hashing
        };

        // Store user in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if email already exists
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
            alert('An account with this email already exists');
            return;
        }

        // Add new user
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // Show success message and close modal
        alert('Account created successfully!');
        signupModal.style.display = 'none';
    });

    // Login Form Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value;

        // Retrieve users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        // Find user and verify password
        const user = users.find(u => u.email === email && u.password === hashPassword(password));

        if (user) {
            alert('Login successful!');
            loginModal.style.display = 'none';
        } else {
            alert('Invalid email or password');
        }
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simple password hashing function (for demonstration, use a proper hashing method in production)
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
}