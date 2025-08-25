document.addEventListener('DOMContentLoaded', () => {
    const recipeName = sessionStorage.getItem('selectedRecipeName');
    const recipeImage = sessionStorage.getItem('selectedRecipeImage');
    const recipeDetailsContainer = document.getElementById('recipeDetailsContainer');

    const recipeDetails = {
    
        'Bean & Cheese Taquitos':{

        instructions:[

            'Preheat the oven Set your oven to 400°F (200°C) Line a baking sheet with parchment paper or lightly grease it Alternatively you can use an air fryer',
            'Prepare the filling In a bowl mix the refried beans shredded cheese cumin and smoked paprika (if using) until well combined',
            'Warm the tortillas Heat the tortillas in a dry skillet or microwave for a few seconds to make them pliable and easier to roll',
            'Assemble the taquitos',
            'Spread 2-3 tablespoons of the bean and cheese mixture onto one side of each tortilla',
            'Roll the tortilla tightly into a taquito shape starting from the side with the filling',
            'Secure and bake',
            'Place the rolled taquitos seam-side down on the prepared baking sheet',
            'Lightly brush or spray the tops with oil to help them crisp up',
            'Bake Bake in the oven for 15-20 minutes or until golden and crispy If using an air fryer cook at 375°F (190°C) for 10-12 minutes turning halfway through',
            'Serve Serve hot with your favorite sides like salsa guacamole sour cream or a fresh salad',
            'Enjoy your delicious bean and cheese taquitos'

        ],
        ingredients:[
            '1 cup refried beans (homemade or canned)',
            '1 cup shredded cheese (cheddar, Monterey Jack, or a Mexican blend)',
            '10 small corn tortillas',
            '1/4 teaspoon cumin (optional, for added flavor)',
            '1/4 teaspoon smoked paprika or chili powder (optional)',
            'Cooking oil (vegetable or avocado oil works best)'
        ]
    },
    'Corn Pakoda':{

ingredients:[

'Sweet corn kernels – 1 cup (fresh or frozen)',
'Gram flour (besan) – 1/2 cup',
'Rice flour – 2 tbsp (optional, for crispiness)',
'Chili powder – 1/2 tsp',
'Cumin powder – 1/2 tsp',
'Ajwain (carom seeds) – 1/2 tsp',
'Ginger (grated) – 1 tsp',
'Green chilies (finely chopped) – 1-2 (optional)',
'Fresh coriander leaves – 2 tbsp (finely chopped)',
'Baking soda – 1/4 tsp (optional, for extra fluff)',
'Salt – to taste',
'Water – as needed to form the batter',
'Oil – for deep frying',
],

instructions:[

'Prepare the corn: If using fresh corn, boil the kernels until tender. If using frozen corn, thaw them before using.',
'Make the batter: In a mixing bowl, combine the corn kernels, gram flour, rice flour, chili powder, cumin powder, ajwain, grated ginger, chopped green chilies, and coriander leaves. Add salt to taste.',
'Add water: Gradually add a little water to form a thick batter. The batter should not be too runny; it should be able to hold the corn kernels together.',
'Heat oil: Heat oil in a deep frying pan on medium heat. To test if the oil is hot enough, drop a small amount of batter into the oil—if it sizzles immediately, the oil is ready.',
'Fry the pakodas: Take small portions of the batter and carefully drop them into the hot oil. Fry in batches, turning occasionally, until the pakodas are golden brown and crisp.',
'Drain excess oil: Once done, remove the pakodas and place them on a paper towel to drain excess oil.',
'Serve: Serve hot with chutney or ketchup.',

'Enjoy your crispy Corn Pakodas!',
]
},

    'Bang Bang Cauliflower':{
        ingredients: [
            'For the Cauliflower:',
            '1 medium cauliflower head, cut into bite-sized florets',
            '1/2 cup all-purpose flour',
            '1/2 cup cornstarch',
            '1 teaspoon garlic powder',
            '1 teaspoon smoked paprika',
            '1/2 teaspoon salt',
            '1/4 teaspoon black pepper',
            '3/4 cup water (or plant-based milk for a vegan option)',
            '1 cup panko breadcrumbs',

            'For the Bang Bang Sauce:',

            '1/3 cup mayonnaise (or vegan mayo)',
            '2 tablespoons sweet chili sauce',
            '1 tablespoon sriracha (or less if you prefer mild heat)',
            '1 tablespoon honey or maple syrup'
        ],

        instructions:[

            'Preheat Oven: Heat to 425°F (220°C) and line a baking sheet.', 
            'Prepare Batter: Mix flour, cornstarch, spices, and water into a smooth batter.',
            'Coat Cauliflower: Dip florets in batter, coat with panko, and place on the baking sheet.',  
            'Bake: Bake for 20 minutes, flipping halfway, until golden and crispy.',  
            'Make Sauce: Whisk mayo, sweet chili sauce, sriracha, and honey.',
            'Combine: Toss or drizzle sauce over cauliflower.',
            'Serve: Garnish and enjoy immediately!'
        ]
    },
    'Kala Chana Chaat Recipe':{  
        ingredients: [  
            '1 cup black chickpeas (soaked overnight) ', 
            'Water and salt (for boiling)  ',
            '1 onion, 1 tomato (chopped) ',
            ' 1 boiled potato (optional)',
            ' 1 green chili (optional, or substitute)', 
            ' 2 tbsp coriander leaves (or substitute)',
            ' 1 tsp roasted cumin powder, 1 tsp chaat masala',  
            ' ½ tsp red chili powder (optional)',
            ' Juice of 1 lemon',
            ' Tamarind chutney, sev (optional for garnish)'
        ],

        instructions:[  
            ' Boil chickpeas until soft; drain.', 
            ' Mix chickpeas with onion, tomato, potato, and spices.',  
            ' Add lemon juice, tamarind chutney (optional), and garnish with sev.',  
            ' Serve fresh and enjoy!'

        ]
    },


    'Bibimbap':{

        ingredients:[
            'For the Bowl:',

            '2 cups cooked white rice (warm, preferably short-grain or medium-grain)',
            '1 cup spinach (blanched and seasoned with sesame oil and salt)',
            '1 cup bean sprouts (blanched and seasoned with sesame oil and salt)',
            '1 medium carrot (julienned and sautéed lightly in oil)',
            '1 zucchini (julienned and sautéed lightly in oil)',
            '4-5 shiitake mushrooms (sliced and sautéed with soy sauce and sesame oil)',
            '1/2 cup kimchi (optional)',
            '1 cup cooked bulgogi beef or tofu (optional)',
            '2 fried eggs (sunny side up)',

            'For the Sauce:',
            '3 tbsp gochujang (Korean red chili paste)',
            '1 tbsp sesame oil',
            '1 tbsp rice vinegar',
            '1 tsp sugar',
            '1 garlic clove (minced)',
            '1 tsp sesame seeds',
            '1-2 tsp water (to adjust consistency)'

        ],

        instructions:[

            'Prepare the Rice:Cook the rice and keep it warm.',
            'Prepare the Vegetables and Protein:',
            'Blanch the spinach and bean sprouts separately. Season with sesame oil and salt',
            'Julienne the carrots and zucchini, then lightly sauté them in oil until tender.',
            'Sauté shiitake mushrooms with a splash of soy sauce and sesame oil.',
            'If using bulgogi or tofu, cook it according to your preference.',
            'Make the Sauce:',
            'Mix gochujang, sesame oil, rice vinegar, sugar, garlic, sesame seeds, and water in a bowl until smooth.',
            'Assemble: Layer rice in a bowl, arrange toppings, and place fried egg on top.',
            'Serve: Drizzle sauce, mix, and enjoy!'
        ]
    },


    'Black Bean & Corn Salad':{

        ingredients:[
            '1 can black beans (rinsed)',
            '1 ½ cups corn',
            '1 red bell pepper (diced)',
            '1 cup cherry tomatoes (halved)',
            '1 avocado (diced)',
            '1 small red onion (chopped)',
            '¼ cup parsley (or cilantro substitute)',
            '3 tbsp olive oil',
            'Juice of 1 lime',
            '1 tsp honey',
            '½ tsp cumin, salt, and pepper',
        ],

        instructions:[
            'Prepare the Salad:In a large bowl, combine black beans, corn, red bell pepper, cherry tomatoes, red onion, and parsley. Gently toss to mix.',
            'Make the Dressing:In a small bowl or jar, whisk together olive oil, lime juice, honey, salt, and pepper. Adjust lime juice for your desired tanginess.',
            'Assemble the Salad:Pour the dressing over the salad mixture and toss gently until everything is evenly coated.',
            'Add the Avocado:Just before serving, gently fold in the diced avocado to avoid it getting mashed.',
            'Serve:Serve immediately, or refrigerate for about 30 minutes to allow flavors to meld.',

        ]
    },
    'Grilled Chicken Street Tacos': {
    ingredients: [
        '1 lb (about 500g) chicken thighs (boneless, skinless)',
        '2 tbsp olive oil',
        '2 tbsp lime juice',
        '2 cloves garlic (minced)',
        '1 tsp chili powder',
        '1 tsp paprika',
        '1 tsp cumin',
        '1 tsp oregano',
        'Salt (to taste)',
        'Black pepper (to taste)',
        '8-10 small corn tortillas',
        '1 small onion (diced)',
        '1/4 cup fresh cilantro (chopped)',
        'Lime wedges (for serving)',
        'Optional toppings: salsa, sour cream, avocado, or cheese',
    ],
    instructions: [
        'Marinate the Chicken: Mix olive oil, lime juice, garlic, and spices in a bowl. Coat the chicken in the marinade and refrigerate for 30 minutes to 2 hours.',
        'Grill the Chicken: Preheat the grill or grill pan to medium-high heat. Cook the chicken for 5-6 minutes per side until cooked through (165°F/74°C internal temperature). Rest for 5 minutes, then chop into bite-sized pieces.',
        'Warm the Tortillas: Heat tortillas on a dry skillet or grill until soft and slightly charred.',
        'Assemble the Tacos: Fill each tortilla with grilled chicken, onion, and cilantro. Add optional toppings as desired.',
        'Serve: Serve warm with lime wedges on the side.',
    ]
},
'Guacamole': {
    ingredients: [
        '2 large ripe avocados',
        '1 tbsp lime juice',
        '1/2 tsp salt (adjust to taste)',
        '1 small tomato (finely chopped)',
        '1 small red onion (finely chopped)',
        '2 tbsp cilantro (chopped)',
        '1 jalapeño or green chili (finely chopped, optional)',
        '1 small clove garlic (minced, optional)',
    ],
    instructions: [
        'Prepare the Avocados: Cut the avocados in half, remove the pit, and scoop the flesh into a bowl. Mash with a fork to your preferred consistency (chunky or smooth).',
        'Add Flavorings: Stir in lime juice, salt, onion, tomato, cilantro, jalapeño, and garlic (if using).',
        'Adjust Seasoning: Mix gently and taste. Add more lime juice, salt, or spice as needed.',
        'Serve: Serve fresh with tortilla chips, tacos, or as a dip for veggies.',
    ]
},
'Gulab Jamun': {
    ingredients: [
        'Dough',
            '1 cup milk powder',
            '1/4 cup all-purpose flour (maida)',
            '1/4 tsp baking soda',
            '2 tbsp ghee',
            '2-3 tbsp milk (adjust for soft dough)',
        'syrup:',
            '2 cups sugar',
            '1 1/2 cups water',
            '4-5 cardamom pods (slightly crushed)',
            '1 tsp rose water (optional)',
            'A pinch of saffron strands (optional)',
    
        'frying',
            'Ghee or oil (for deep frying)',
        ],
    instructions: [
        'Make Syrup: Heat sugar and water until sticky. Add cardamom, rose water, and saffron. Keep warm.',
        'Prepare Dough: Mix milk powder, all-purpose flour, baking soda, and ghee. Add milk to form a soft dough.',
        'Shape Balls: Roll dough into smooth, crack-free balls.',
        'Fry: Deep fry in ghee or oil on low heat until golden brown.',
        'Soak: Add fried balls to warm syrup and soak for 2 hours.',
        'Serve: Garnish with nuts and enjoy!',
    ]
},
'Gyoza': {
    ingredients: [
        'filling',
            '1 cup ground pork (or chicken if preferred)',
            '1 cup finely chopped cabbage (Napa cabbage works well)',
            '2 tbsp finely chopped green onions (scallions)',
            '1 tbsp minced garlic',
            '1 tbsp grated fresh ginger',
            '1 tbsp soy sauce',
            '1 tsp sesame oil',
            '1 tsp sugar',
            '1/2 tsp salt',
            '1/4 tsp ground white or black pepper',
        
        'wrappers' ,
            '30-40 store-bought gyoza wrappers (round)',

        'cooking:',
            '2 tbsp vegetable oil (for frying)',
            '1/4 cup water (for steaming)',
       
        'dipping_sauce:',
            '2 tbsp soy sauce',
            '2 tbsp rice vinegar',
            '1 tsp sesame oil',
            'Optional: A pinch of chili flakes or drops of chili oil for heat',
        ],
    instructions: [
        'Prepare the Filling: In a large mixing bowl, combine ground pork, cabbage, green onions, garlic, ginger, soy sauce, sesame oil, sugar, salt, and pepper. Mix everything thoroughly using your hands or a spoon until well combined. Set aside.',
        'Assemble the Gyoza: Take one gyoza wrapper and place it on a clean surface. Add about 1 teaspoon of filling to the center of the wrapper. Dip your finger in water and run it along the edge of the wrapper to moisten. Fold the wrapper in half to form a semicircle, pinching the edges together to seal. Create pleats along the edge for a traditional look, if desired. Repeat until all the filling is used.',
        'Cook the Gyoza: Heat a nonstick skillet over medium heat and add 1 tablespoon of vegetable oil. Arrange the gyoza in the skillet, flat-side down, without overcrowding. Cook for 2-3 minutes until the bottoms are golden brown. Add 1/4 cup of water to the skillet and immediately cover with a lid. Steam the gyoza for 4-5 minutes until the water evaporates and the filling is cooked through. Remove the lid and let the gyoza cook for another minute to crisp up the bottoms. Repeat the process with the remaining gyoza.',
        'Prepare the Dipping Sauce: In a small bowl, mix soy sauce, rice vinegar, and sesame oil. Add chili flakes or oil if desired.',
        'Serve: Arrange the gyoza on a plate, crispy side up, and serve hot with the dipping sauce on the side.',
    ]
},
'Indian Tomato Soup': {
    ingredients: [
        '5 medium ripe tomatoes, chopped',
        '1 small onion, finely chopped',
        '2 garlic cloves, minced',
        '1-inch piece of ginger, grated',
        '1 tbsp butter or ghee',
        '1/2 tsp cumin seeds',
        '1/2 tsp turmeric powder',
        '1/2 tsp red chili powder (adjust to taste)',
        '1/2 tsp garam masala',
        '2 cups water or vegetable stock',
        '1 tbsp sugar (optional, to balance acidity)',
        'Salt to taste',
        'Fresh cream (for garnish, optional)',
        'Fresh coriander leaves, chopped (for garnish)',
    ],
    instructions: [
        'Cook Base Ingredients: Heat butter in a pot. Add cumin seeds and let them splutter. Sauté onion, garlic, and ginger until softened.',
        'Add Tomatoes & Spices: Add chopped tomatoes, turmeric, chili powder, and salt. Cook until tomatoes are soft and mushy (about 10 minutes).',
        'Simmer & Blend: Add water or stock and simmer for 10 minutes. Let cool slightly, then blend to a smooth puree using a blender or immersion blender.',
        'Strain & Season: Strain the soup through a sieve for a smooth texture. Return to the pot, add garam masala and sugar (if using), and adjust seasoning. Heat gently.',
        'Serve: Pour into bowls, garnish with cream and coriander leaves, and serve hot with croutons or toasted bread.',
    ]
},


    'Bread Roll Recipe':{

        ingredients:[

            '3 cups all-purpose flour',
            '1 packet (2 1/4 tsp) dry yeast',
            '1/4 cup sugar',
            '1 cup warm milk',
            '1/4 cup melted butter',
            '1 tsp salt',
            '1 egg (optional, for brushing)',
        ],

        instructions:[

            'Mix warm milk, sugar, and yeast. Let it froth for 10 minutes.',
            'Combine flour and salt, then add yeast mixture and melted butter. Knead into smooth dough.',
            'Let dough rise for 1-1.5 hours until doubled in size.',
            'Shape dough into 12 rolls and place in a greased dish. Let rise for 30-45 minutes.',
            'Bake at 375°F (190°C) for 20-25 minutes until golden brown. Optionally, brush with egg before baking.',
            'Serve and enjoy!',
        ]

    },

    'Bruschetta':{

        ingredients:[

            '1 baguette or Italian bread, sliced into 1-inch thick slices',
            '4-5 ripe tomatoes, diced',
            '1/4 cup fresh basil leaves, chopped',
            '2-3 cloves garlic, minced',
            '2 tablespoons extra virgin olive oil (plus extra for drizzling)',
            '1 tablespoon balsamic vinegar (optional)',
            'Salt and pepper, to taste',
            'Optional: Fresh mozzarella or parmesan (grated)',
        ],

        instructions:[
            'Prepare the bread:',
            'Preheat your oven to 400°F (200°C). Arrange the bread slices on a baking sheet and brush each slice lightly with olive oil.',
            'Toast the bread in the oven for 5-7 minutes, or until golden and crispy. Remove and set aside.',
            'Make the topping:',
            'In a bowl, combine the diced tomatoes, minced garlic, and chopped basil.',
            'Add the olive oil, balsamic vinegar (if using), and season with salt and pepper to taste. Stir to combine and let it sit for 10-15 minutes to allow the flavors to meld.',
            'Assemble the bruschetta:',
            'Spoon the tomato mixture generously onto each toasted bread slice.',
            'Optionally, sprinkle with grated parmesan or top with small mozzarella pieces for added flavor.',
            'Serve:',
            'Drizzle with a little extra olive oil if desired, and serve immediately as a delicious appetizer or snack.',
            'Enjoy your fresh, flavorful bruschetta!',
        ]

    },



    'Butter Chicken':{

        ingredients:[

            'Chicken Marinade:',
            ' 500g chicken',
            ' 1/2 cup yogurt',
            ' 1 tbsp lemon juice',
            ' 1 tbsp ginger-garlic paste',
            ' 1 tsp red chili powder',
            ' 1 tsp turmeric',
            ' 1 tsp garam masala, salt.',

            'For the sauce:',
            ' 2 tbsp butter',
            ' 1 tbsp oil',
            ' 1 onion (chopped)',
            ' 1 tbsp ginger-garlic paste',
            ' 2 tomatoes (pureed)',
            ' 1 tsp cumin',
            ' 1 tsp coriander',
            ' 1 tsp red chili powder',
            ' 1/2 cup cream, salt',
        ],

        instructions:[
            'Marinate chicken: Mix yogurt, lemon juice, ginger-garlic paste, spices, and salt. Marinate chicken for at least 1 hour.',
            'Cook chicken: Brown the marinated chicken in oil for 8-10 minutes.',
            'Make sauce: Sauté onions in butter, add ginger-garlic paste, pureed tomatoes, and spices. Cook until oil separates.',
            'Combine: Add cooked chicken, cream, and simmer for 5-7 minutes.',
            'Serve: Garnish with cilantro and serve with rice or naan.',
            'Enjoy your delicious Butter Chicken!',

        ]
    },



    'Caprese Salad':{

        ingredients:[
            '3 tomatoes',
            '8 oz fresh mozzarella',
            'Fresh basil leaves',
            '2 tbsp olive oil',
            '1 tbsp balsamic vinegar (optional)',
            'Salt and pepper',
        ],

        instructions:[
            'Prepare the ingredients: Slice the tomatoes and mozzarella into about 1/4-inch thick slices.',
            'Assemble the salad: On a large plate, alternate slices of tomato, mozzarella, and basil leaves. You can arrange them in a circle or simply layer them in rows.',
            'Season: Drizzle the olive oil over the assembled ingredients. If you like, drizzle a small amount of balsamic vinegar for a sweet touch. Season with salt and freshly ground black pepper to taste.',
            'Serve: Serve immediately as a refreshing appetizer or side dish.',
            'Enjoy your Caprese Salad!',
        ]

    },

    'Chalupas':{

        ingredients:[

            'For the Chalupa Shells:',
            '2 cups masa harina (corn flour for tortillas)',
            '1/2 teaspoon salt',
            '1 cup warm water (or as needed)',

            'For the Toppings:',
            '1 lb cooked shredded chicken, beef, or pork (optional)',
            '1/2 cup refried beans (optional)',
            '1 cup lettuce, shredded',
            '1 medium tomato, diced',
            '1/2 cup shredded cheese (cheddar or Mexican blend)',
            '1/4 cup sour cream or Mexican crema',
            '1/4 cup salsa or hot sauce',
            '1/4 cup chopped onions (optional)',
            'Jalapeños or other hot peppers (optional)',

        ],

        instructions:[

            'Make the Chalupa Shells:',

            'In a large bowl, combine the masa harina and salt. Gradually add the warm water, stirring until the dough comes together. Knead the dough for about 2 minutes until smooth and pliable.',
            'Divide the dough into small balls (about 8-10). Flatten each ball into a small, thick disc (about 1/4-inch thick).',
            'Heat a skillet or griddle over medium heat. Cook the discs on each side for about 2-3 minutes until lightly golden but not fully crisp.',
            'Once cooked, carefully fry the discs in hot oil until crispy, forming a slightly bowl-like shape. Drain on paper towels.',

            'Assemble the Chalupas:',
 
            'Spread a layer of refried beans (if using) on the fried shell.',
            'Add your choice of shredded meat, followed by lettuce, tomato, cheese, sour cream, and salsa.',
            'Garnish with onions, jalapeños, or any additional toppings you like.',

            'Serve:Serve immediately while the chalupas are crispy, and enjoy!',
        ]

    },


    'Chicken Enchilada Dip':{

        ingredients:[

            '2 cups cooked, shredded chicken',
            '1 (10 oz) can red enchilada sauce',
            '1 (8 oz) cream cheese, softened',
            '1 cup sour cream',
            '1 cup shredded cheddar cheese',
            '1 cup shredded Monterey Jack cheese',
            '1/2 cup diced onion (optional)',
            '1/2 cup chopped green chilies (optional)',
            '1 tsp garlic powder',
            '1 tsp ground cumin',
            '1/2 tsp chili powder',
            'Salt and pepper to taste',
            'Tortilla chips or sliced vegetables for dipping',
        ],

        instructions:[
            'Preheat the oven to 350°F (175°C).',
            'In a medium-sized bowl, mix together the shredded chicken, enchilada sauce, garlic powder, cumin, chili powder, salt, and pepper.',
            'In another bowl, combine the softened cream cheese, sour cream, and half of the shredded cheddar and Monterey Jack cheeses. Stir until smooth.',
            'Add the chicken mixture to the cream cheese mixture and stir to combine.',
            'Pour the dip mixture into a baking dish (about 8x8 or similar) and spread it out evenly.',
            'Sprinkle the remaining shredded cheeses on top.',
            'Bake in the preheated oven for 20-25 minutes, or until the dip is bubbly and the cheese is melted and golden.',
            'Optional: Garnish with chopped green onions, cilantro (or cilantro substitute), or extra diced chilies if desired.',
            'Serve warm with tortilla chips or vegetables for dipping.',
            'Enjoy your cheesy, flavorful chicken enchilada dip!',
        ]

    },


    'Chicken Tacos':{

        ingredients:[
            '500g chicken breast (or thighs)',
            '1 tbsp olive oil',
            '1 tsp ground cumin',
            '1 tsp chili powder',
            '1 tsp paprika',
            '1/2 tsp garlic powder',
            '1/2 tsp onion powder',
            'Salt and pepper to taste',
            '1 tbsp lime juice',
            '8 small corn or flour tortillas',
            '1/2 cup shredded lettuce',
            '1/2 cup diced tomatoes',
            '1/4 cup diced onions (optional)',
            '1/4 cup shredded cheese (cheddar, mozzarella, or a blend)',
            'Salsa or your preferred taco sauce',
            'Fresh cilantro or another herb for garnish (optional)',
        ],

         instructions:[

            'Prepare the Chicken:',
            'Season the chicken breasts with cumin, chili powder, paprika, garlic powder, onion powder, salt, and pepper.',
            'Heat olive oil in a large pan over medium heat. Add the chicken and cook for about 6-8 minutes on each side, or until fully cooked (internal temperature should be 165°F or 75°C).',
            'Once cooked, remove the chicken from the pan and let it rest for a few minutes. Then shred it with a fork.',

            'Warm the Tortillas:',
            'Heat the tortillas in a dry skillet over medium heat for about 20-30 seconds on each side, or until warm and slightly crispy.',

            'Assemble the Tacos:',
            'Place some of the shredded chicken on each tortilla.',
            'Top with lettuce, tomatoes, onions (if using), and cheese.',
            'Drizzle with lime juice and salsa.',
 
            'Serve:Garnish with fresh cilantro (or another herb of your choice) and serve immediately.',

            'Enjoy your chicken tacos!',

        ]
    },


    'Churros':{

        ingredients:[

            '1 cup water',
            '2 tbsp sugar',
            '1/2 tsp salt',
            '2 tbsp vegetable oil',
            '1 cup all-purpose flour',
            '2 large eggs',
            '1 tsp vanilla extract',
            'Vegetable oil, for frying',
            '1/2 cup sugar (for coating)',
            '1 tsp cinnamon (optional, for coating)',
        ],

        instructions:[

            'Prepare the dough:',
            'In a medium saucepan, combine water, sugar, salt, and vegetable oil. Bring it to a boil over medium heat.',
            'Once the mixture boils, remove it from the heat and stir in the flour until fully combined and a dough forms.',
            'Allow the dough to cool for a few minutes.',
            'Add the eggs one at a time, mixing well after each addition, followed by the vanilla extract. The dough should be smooth and slightly sticky.',

            'Heat about 2 inches of vegetable oil in a large pot over medium-high heat. The oil should reach 350°F (175°C).',

            'Fry the churros:',
            'Transfer the dough to a piping bag fitted with a star-shaped nozzle.',
            'Pipe 4-6 inch long strips of dough directly into the hot oil, cutting them with scissors or your hands as you go.',
            'Fry the churros in batches, turning them occasionally, until golden brown and crisp (about 2-3 minutes per batch).',
            'Remove the churros from the oil and drain them on paper towels.',

            'Coat the churros:',
            'In a shallow dish, mix together the sugar and cinnamon (if using).',
            'Roll the warm churros in the sugar mixture to coat evenly.',

            'Serve the churros immediately, ideally with a cup of hot chocolate or your favorite dipping sauce.',

            'Enjoy your delicious churros!',
        ]

    },


    'Corn Pakoda Recipe':{

        ingredients:[

            'Sweet corn kernels – 1 cup (fresh or frozen)',
            'Gram flour (besan) – 1/2 cup',
            'Rice flour – 2 tbsp (optional, for crispiness)',
            'Chili powder – 1/2 tsp',
            'Cumin powder – 1/2 tsp',
            'Ajwain (carom seeds) – 1/2 tsp',
            'Ginger (grated) – 1 tsp',
            'Green chilies (finely chopped) – 1-2 (optional)',
            'Fresh coriander leaves – 2 tbsp (finely chopped)',
            'Baking soda – 1/4 tsp (optional, for extra fluff)',
            'Salt – to taste',
            'Water – as needed to form the batter',
            'Oil – for deep frying',
        ],

        instructions:[
 
            'Prepare the corn: If using fresh corn, boil the kernels until tender. If using frozen corn, thaw them before using.',
            'Make the batter: In a mixing bowl, combine the corn kernels, gram flour, rice flour, chili powder, cumin powder, ajwain, grated ginger, chopped green chilies, and coriander leaves. Add salt to taste.',
            'Add water: Gradually add a little water to form a thick batter. The batter should not be too runny; it should be able to hold the corn kernels together.',
            'Heat oil: Heat oil in a deep frying pan on medium heat. To test if the oil is hot enough, drop a small amount of batter into the oil—if it sizzles immediately, the oil is ready.',
            'Fry the pakodas: Take small portions of the batter and carefully drop them into the hot oil. Fry in batches, turning occasionally, until the pakodas are golden brown and crisp.',
            'Drain excess oil: Once done, remove the pakodas and place them on a paper towel to drain excess oil.',
            'Serve: Serve hot with chutney or ketchup.',

            'Enjoy your crispy Corn Pakodas!',
        ]
    },


    'Dill Leaves Pakoda':{

        ingredients:[

            'Dill leaves (fresh, chopped) – 1 cup',
            'Chickpea flour (besan) – 1 cup',
            'Rice flour – 2 tbsp',
            'Baking soda – 1/4 tsp (optional, for crispiness)',
            'Green chilies (finely chopped) – 1-2',
            'Ginger (grated) – 1 tsp',
            'Ajwain (carom seeds) – 1/2 tsp',
            'Cumin seeds – 1/2 tsp',
            'Red chili powder – 1/2 tsp',
            'Turmeric powder – 1/4 tsp',
            'Salt – to taste',
            'Water – as needed',
            'Oil – for deep frying',
        ],

        instructions:[

            'Prepare the Dill: Wash the dill leaves thoroughly and chop them finely.',
            'Make the Batter: In a mixing bowl, combine the chopped dill leaves, chickpea flour, rice flour, ajwain, cumin seeds, green chilies, ginger, red chili powder, turmeric, and salt.',
            'Add Water: Gradually add water and mix until you get a thick batter that coats the leaves and ingredients. Be careful not to make it too runny.',
            'Heat the Oil: In a pan or deep frying vessel, heat enough oil for deep frying on medium heat.',
            'Fry the Pakodas: Once the oil is hot, take small portions of the batter and drop them into the oil. Fry the pakodas in batches, making sure they are golden brown and crispy. Stir occasionally to ensure even frying.',
            'Drain: Remove the pakodas using a slotted spoon and place them on a paper towel to drain excess oil.',
            'Serve: Serve the hot dill leaves pakodas with green chutney or tamarind sauce.',

            'Enjoy your crispy and flavorful dill leaves pakodas!',

        ]

    },
    'Donburi':{

        ingredients:[

            'For the rice:',
            '2 cups Japanese short-grain rice (sushi rice)',
            '2 1/2 cups water',

            'For the topping (Chicken Donburi as an example):',

            '1 boneless chicken thigh (or 2 breasts), cut into bite-sized pieces',
            '1 onion, thinly sliced',
            '1/2 cup dashi stock (or substitute with chicken or vegetable broth)',
            '1/4 cup soy sauce',
            '1/4 cup mirin (sweet rice wine)',
            '1 tbsp sugar',
            '2 eggs, beaten',
            '1-2 tbsp vegetable oil (for frying)',
            '2-3 green onions (chopped, for garnish)',
            'Optional: shichimi togarashi (Japanese chili pepper) for garnish',
        ],

        instructions:[

            'Cook the Rice:',
            'Rinse the rice under cold water until the water runs clear.',
            'In a rice cooker or pot, add the rinsed rice and water. Cook according to the rice cookers instructions or bring it to a boil, reduce heat, cover, and simmer for about 15-20 minutes. Let it sit covered for 10 minutes after cooking.',

            'Prepare the Topping:',
            'Heat oil in a large pan or skillet over medium heat. Add the sliced onion and sauté until soft and slightly caramelized (about 5 minutes).',
            'Add the chicken pieces and cook until they are browned and nearly cooked through.',
            'Pour in the dashi stock, soy sauce, mirin, and sugar. Bring to a simmer and cook for another 5 minutes, allowing the flavors to combine and the sauce to reduce slightly.',

            'Add the Eggs:',
            'Pour the beaten eggs over the chicken and onion mixture. Cover the pan and cook for about 2-3 minutes, until the eggs are just set but still tender and slightly runny. You can adjust this time based on your preference for how cooked the eggs are.',

            'Assemble the Donburi:',
            'Scoop a generous portion of rice into each bowl. Carefully spoon the chicken and egg mixture on top of the rice, ensuring some sauce drizzles over the rice.',

            'Garnish and Serve:',
            'Sprinkle with chopped green onions and optional shichimi togarashi (for a bit of spice).',
            'Serve immediately while warm.',

            'Enjoy your Donburi!',
        ]

    },

    'Easy Bruschetta':{

        ingredients:[

            '1 baguette (or any rustic bread)',
            '3 medium tomatoes, diced',
            '1/4 cup fresh basil, chopped',
            '2 cloves garlic, minced',
            '1/4 cup extra virgin olive oil',
            '1 tbsp balsamic vinegar (optional)',
            'Salt and pepper to taste',
        ],

        instructions:[

            'Prepare the Bread: Preheat your oven to 375°F (190°C). Slice the baguette into 1/2-inch thick slices. Arrange the slices on a baking sheet and brush each side lightly with olive oil. Toast in the oven for 5-7 minutes, or until golden brown and crispy.',

            'Make the Topping: While the bread is toasting, combine the diced tomatoes, chopped basil, and minced garlic in a bowl. Add the olive oil and balsamic vinegar (if using), and stir to combine. Season with salt and pepper to taste.',

            'Assemble the Bruschetta: Once the bread is toasted, spoon the tomato mixture generously onto each slice.',

            'Serve: Serve immediately, and enjoy!',
 
        ]
    },


    'Easy Mussels Marinara':{

        ingredients:[
            '2 lbs fresh mussels, cleaned and debearded',
            '2 tbsp olive oil',
            '4 cloves garlic, minced',
            '1 can (14.5 oz) crushed tomatoes',
            '1/4 cup dry white wine (optional)',
            '1 tsp dried oregano',
            '1/2 tsp red pepper flakes (optional)',
            'Salt and pepper to taste',
            'Fresh parsley, chopped (for garnish)',
            'Crusty bread (for serving)',

        ],

        instructions:[

            'Prepare Mussels: Scrub the mussels under cold water and remove the beards. Discard any open mussels that don’t close when tapped.',

            'Cook Garlic: In a large pot or deep skillet, heat olive oil over medium heat. Add the minced garlic and cook for about 1 minute until fragrant (be careful not to burn it).',

            'Add Tomatoes: Stir in the crushed tomatoes, white wine (if using), oregano, and red pepper flakes. Season with salt and pepper. Bring the sauce to a simmer and cook for 10 minutes to let the flavors meld.',

            'Add Mussels: Add the cleaned mussels to the pot, cover, and cook for 5-7 minutes, shaking the pot occasionally. The mussels should open up. Discard any that don’t open.',

            'Serve: Garnish with fresh parsley and serve with crusty bread to soak up the marinara sauce.',

            'Enjoy!',

        ]
    },
    'Easy Stuffed Shells':{

        ingredients:[

            '20-25 jumbo pasta shells',
            '1 lb (450 g) ricotta cheese',
            '2 cups shredded mozzarella cheese',
            '1/2 cup grated Parmesan cheese',
            '1 large egg',
            '2 cups marinara sauce (store-bought or homemade)',
            '2 tbsp fresh parsley or basil, chopped',
            '1 tsp garlic powder',
            '1/2 tsp salt',
            '1/4 tsp black pepper',
            'Olive oil (for greasing)',

        ],

        instructions:[

            'Preheat the oven to 375°F (190°C). Grease a 9x13-inch baking dish with a little olive oil.',

            'Cook the shells: In a large pot of salted boiling water, cook the jumbo shells according to the package instructions, usually 8-10 minutes. Drain and set aside to cool.',

            'Prepare the filling: In a large mixing bowl, combine the ricotta cheese, 1 cup of mozzarella, Parmesan cheese, egg, garlic powder, salt, pepper, and half of the chopped parsley or basil. Mix until well combined.',

            'Stuff the shells: Once the shells are cool enough to handle, carefully stuff each shell with the cheese mixture. Place the stuffed shells in the prepared baking dish.',

            'Assemble: Pour the marinara sauce over the stuffed shells, spreading it evenly. Sprinkle the remaining mozzarella cheese over the top.',

            'Bake: Cover the baking dish with aluminum foil and bake for 25 minutes. Then, remove the foil and bake for an additional 10-15 minutes until the cheese is bubbly and slightly golden.',

            'Serve: Garnish with the remaining parsley or basil. Serve warm!',

            'This recipe is simple, creamy, and flavorful! Enjoy!',
        ]
    },

    'Eggplant Caponata':{


        ingredients:[

            '2 medium eggplants, peeled and diced into 1-inch cubes',
            '1 onion, finely chopped',
            '2 celery stalks, chopped',
            '1 bell pepper (red or green), chopped',
            '3 tablespoons olive oil',
            '2 cloves garlic, minced',
            '1 can (14 oz) diced tomatoes',
            '1/4 cup green olives, pitted and sliced',
            '2 tablespoons capers, drained',
            '1/4 cup red wine vinegar',
            '1 tablespoon sugar',
            '1/4 cup pine nuts (optional)',
            'Fresh basil for garnish (optional)',
            'Salt and pepper to taste',
        ],

        instructions:[

            'Prepare the eggplant: Salt the diced eggplant and let it sit in a colander for about 30 minutes to draw out excess moisture. Rinse and pat dry with paper towels.',

            'Cook the vegetables: Heat the olive oil in a large skillet or sauté pan over medium heat. Add the eggplant and cook, stirring occasionally, until golden brown and tender (about 8-10 minutes). Remove the eggplant from the pan and set it aside.',

            'Pan-fry the aromatics: In the same pan, add the onion, celery, and bell pepper. Pan-fry until softened, about 5-7 minutes. Add the garlic and cook for another minute, being careful not to burn it.',

            'Add the tomatoes and seasonings: Stir in the diced tomatoes, green olives, capers, vinegar, and sugar. Cook for about 10 minutes, allowing the flavors to combine and the sauce to thicken slightly.',

            'Combine and simmer: Return the eggplant to the pan and stir everything together. Simmer for an additional 5-10 minutes, adjusting seasoning with salt and pepper to taste. If using, add the pine nuts and stir them in.',

            'Cool and serve: Let the caponata cool to room temperature. Garnish with fresh basil if desired. Caponata can be served on its own as a side dish, or with crusty bread, pasta, or as a topping for meats.',

            'Enjoy!',
        ]

    },


    'Esquites Fritters':{

        ingredients:[

            'For the Esquites (corn mixture):',
            '2 cups of corn kernels (fresh, frozen, or canned)',
            '1 tablespoon butter',
            '1 small onion, finely chopped',
            '1 clove garlic, minced',
            '1/2 cup mayonnaise',
            '1 tablespoon lime juice',
            '1/4 cup cotija cheese (or feta cheese)',
            '1-2 tablespoons chili powder or Tajín (adjust to taste)',
            'Salt and pepper to taste',
            '1 tablespoon fresh cilantro (optional, or substitute with parsley)',

            'For the Fritters:',
            '1 cup all-purpose flour',
            '1/4 cup cornstarch',
            '1 teaspoon baking powder',
            '1/4 teaspoon paprika',
            '1/2 teaspoon cumin',
            '1/2 teaspoon garlic powder',
            'Salt and pepper to taste',
            '1/2 cup cold water (more if needed)',
            '1 egg',
            '1/2 cup of esquites (corn mixture from above)',
            'Oil for frying (vegetable or canola)',

        ],

        instructions:[

            'Make the Esquites:',
            'Heat the butter in a skillet over medium heat. Add the chopped onion and garlic, and sauté until softened (about 3-4 minutes).',
            'Add the corn kernels and cook for another 5-7 minutes until they’re heated through and lightly golden.',
            'Remove from heat and stir in the mayonnaise, lime juice, cotija cheese, chili powder (or Tajín), and salt and pepper to taste. Set aside to cool.',

            'Prepare the Fritter Batter:',
            'In a large bowl, combine the flour, cornstarch, baking powder, paprika, cumin, garlic powder, salt, and pepper.',
            'In a separate bowl, whisk together the egg and cold water until smooth. Add the wet ingredients to the dry ingredients and mix until combined into a thick batter. Adjust with more water if necessary to reach the consistency of pancake batter.',
            'Gently fold in the cooled esquites mixture into the batter, being careful not to break up the corn too much.',

            'Fry the Fritters:',
            'Heat about 1 inch of oil in a large skillet over medium-high heat. To check if the oil is ready, drop a small amount of batter in. If it sizzles, the oil is hot enough.',
            'Scoop spoonfuls of the batter and carefully drop them into the hot oil, flattening them slightly with the back of a spoon. Fry in batches, turning them once, until golden brown and crispy (about 3-4 minutes per side).',
            'Remove the fritters and place them on a paper towel-lined plate to drain excess oil.',

            'Serve:Serve the fritters hot with extra lime wedges, a sprinkle of chili powder or Tajín, and additional cotija cheese if desired.',

            'These crispy and flavorful esquites fritters make a great appetizer or snack. Enjoy!',

        ]
    },

    'Flatbread Pizza':{

        ingredients:[

            'For the flatbread:',

            '1 cup all-purpose flour (or whole wheat flour for a healthier option)',
            '1/4 tsp salt',
            '1/4 tsp sugar',
            '1/2 tsp baking powder',
            '2 tbsp olive oil',
            '1/3 cup warm water',

            'For the topping:',

            '1/2 cup pizza sauce (store-bought or homemade)',
            '1 cup shredded mozzarella cheese (or any cheese you prefer)',
            '1/4 cup sliced red onion',
            '1/4 cup bell pepper, thinly sliced',
            '1/4 cup sliced mushrooms',
            'Fresh basil or other herbs for garnish',
            'Olive oil for brushing',
            'Optional: olives, pepperoni, chicken, or any other toppings of your choice',
        ],

        instructions:[

            'Prepare the flatbread dough:',
            'In a large bowl, mix the flour, salt, sugar, and baking powder.',
            'Add the olive oil and warm water, and stir until the dough comes together.',
            'Knead the dough for about 3-4 minutes until smooth. If the dough is too sticky, add a little more flour.',
            'Cover the dough with a towel and let it rest for 10-15 minutes.',

            'Preheat the oven:Preheat your oven to 450°F (230°C). Place a baking sheet or pizza stone inside the oven to heat.',

            'Roll out the dough:',
            'After resting, divide the dough into 2 portions (for two pizzas).',
            'On a lightly floured surface, roll each portion into a thin, round flatbread shape. You can make it as thick or thin as you like.',

            'Assemble the pizza:',
            'Carefully transfer the rolled-out flatbread onto a parchment paper or a floured baking sheet.',
            'Brush the surface of the flatbread with a little olive oil.',
            'Spread the pizza sauce evenly over the dough.',
            'Sprinkle the shredded mozzarella cheese over the sauce, and add your choice of toppings like onions, peppers, mushrooms, and any other toppings.',

            'Bake the flatbread pizza:',
            'Transfer the prepared pizza to the preheated oven (on the baking sheet or pizza stone).',
            'Bake for 10-12 minutes or until the crust is golden and the cheese is melted and bubbly.',

            'Serve:',
            'Remove the pizza from the oven and let it cool slightly.',
            'Garnish with fresh basil or any other herbs, slice, and serve immediately.',

            'Enjoy your delicious homemade flatbread pizza!',
        ]
    },



    'Sweet Potato Tikki':{

        ingredients:[

            '2 medium-sized sweet potatoes (boiled and mashed)',
            '1/2 cup boiled and mashed peas (optional)',
            '1/4 cup grated carrot (optional)',
            '2 tablespoons cornflour or rice flour (to bind)',
            '1 small onion, finely chopped',
            '1-2 green chilies, finely chopped (optional, or use a milder alternative)',
            '1 teaspoon ginger-garlic paste',
            '1 teaspoon cumin powder',
            '1/2 teaspoon garam masala',
            '1/2 teaspoon red chili powder',
            'Salt to taste',
            'Fresh coriander leaves, chopped (optional, or substitute with parsley or mint)',
            '1 tablespoon lemon juice',
            'Oil for shallow frying',

        ],


        instructions:[

            'Prepare the Sweet Potatoes: Peel the boiled sweet potatoes and mash them until smooth. Set aside.',
            'Prepare the Mixture: In a large mixing bowl, combine the mashed sweet potatoes, mashed peas (if using), grated carrot, finely chopped onion, green chilies, ginger-garlic paste, cumin powder, garam masala, red chili powder, salt, and lemon juice.',
            'Bind the Mixture: Add the cornflour or rice flour to the mixture and mix well to ensure the ingredients bind together. Adjust the amount of flour if the mixture feels too wet.',
            'Shape the Tikkis: Take small portions of the mixture and shape them into round or flat tikkis (patties).',
            'Fry the Tikkis: Heat a little oil in a frying pan on medium heat. Gently place the tikkis in the pan and shallow fry them until both sides are golden and crispy, about 3-4 minutes per side.',
            'Serve: Serve hot with chutney or yogurt dip.',

            'Enjoy your delicious Sweet Potato Tikkis!',

        ]
    }, 

    'Tamagoyaki':{

        ingredients:[

            '4 large eggs',
            '1 tbsp soy sauce',
            '1 tbsp mirin (or substitute with 1 tbsp sugar mixed with a little water)',
            '1 tsp sugar',
            '1 tbsp dashi (or substitute with a small amount of salt)',
            '1 tsp vegetable oil (for the pan)',

        ],

        instructions:[
            'Prepare the egg mixture: In a bowl, whisk together the eggs, soy sauce, mirin, sugar, and dashi until well combined. The mixture should be smooth and slightly frothy.',
            'Heat the pan: Heat a rectangular or square non-stick frying pan over medium-low heat. Lightly coat the pan with vegetable oil using a paper towel.',
            'Cook the first layer: Pour a small amount of the egg mixture into the pan, tilting it to spread the mixture evenly. Cook until the edges set but the top is still slightly runny (about 1-2 minutes). Gently roll the omelette from one side to the other using chopsticks or a spatula.',
            'Add more egg mixture: Push the rolled omelette to one side of the pan, then pour another thin layer of the egg mixture into the pan, lifting the rolled omelette so the liquid can flow underneath. Cook until set, then roll the omelette over the new layer.',
            'Repeat: Continue the process, layering and rolling the omelette until all the egg mixture is used up. Adjust the heat as needed to avoid overcooking or burning.',
            'Shape the tamagoyaki: Once the omelette is fully cooked, remove it from the pan. You can gently press it into a rectangle or square shape using a bamboo mat (or just use your hands).',
            'Serve: Slice the tamagoyaki into bite-sized pieces and serve. Its often enjoyed with rice or as part of a bento box.',

            'Enjoy!',
        ]
    },


    'Tempura':{

ingredients:[

'For the Tempura Batter:',

'1 cup all-purpose flour (plus extra for dredging)',
'1/4 cup cornstarch',
'1/2 teaspoon baking powder',
'1 large egg',
'1 cup ice-cold water (adjust as needed)',
'Pinch of salt',

'For the Tempura Dipping Sauce:',

'1/2 cup soy sauce',
'1/2 cup dashi (Japanese stock)',
'1 tablespoon mirin (sweet rice wine)',
'1 teaspoon sugar',
'Optional: grated daikon radish or a little bit of wasabi for extra flavor',

'For the Tempura (vegetables and/or seafood):',

'1 medium sweet potato, peeled and sliced into 1/4-inch rounds',
'1 zucchini, sliced into rounds or strips',
'8-10 shrimp, peeled and deveined',
'1/2 onion, sliced into rings',
'1/2 cup mushrooms (shiitake or white button), sliced',
'Vegetable oil, for frying (e.g., canola or sunflower oil)',


],

instructions:[

'Prepare the tempura dipping sauce:',
'In a saucepan, combine the soy sauce, dashi, mirin, and sugar. Bring to a simmer over medium heat until the sugar dissolves. Set aside to cool.',

'Make the tempura batter:',
'In a large bowl, whisk together the flour, cornstarch, baking powder, and salt.',
'In a separate bowl, lightly beat the egg and add the cold water.',
'Pour the egg-water mixture into the dry ingredients and stir lightly with chopsticks or a fork. Its important to keep the batter lumpy to ensure a light, crispy texture.',

'Prepare the ingredients for frying:',
'Slice the vegetables and prepare the shrimp. Pat everything dry with paper towels (this will help the batter adhere better).',
'Lightly coat the vegetables and seafood in a little flour before dipping them into the batter.',

'Fry the tempura:',
'Heat the oil in a deep pot or wok to 350°F (175°C). The oil should be deep enough to submerge the ingredients.',
'Dip the flour-coated vegetables and seafood into the batter, letting the excess drip off, then carefully lower them into the hot oil. Do not overcrowd the pan.',
'Fry for 2-3 minutes or until golden and crispy, turning occasionally for even frying.',
'Remove with a slotted spoon and drain on paper towels.',
'Serve:Arrange the tempura on a plate with the dipping sauce on the side.',

'Enjoy your crispy, delicious tempura!',
]
},


'Tiramisu':{

ingredients:[

'For the filling:',

'4 large egg yolks',
'3/4 cup (150 g) granulated sugar',
'1 cup (240 ml) mascarpone cheese',
'1 1/2 cups (360 ml) heavy whipping cream',

'For the base:',

'2 cups (480 ml) strong brewed espresso or coffee, cooled',
'3 tbsp coffee liqueur (optional, e.g., Kahlúa or Marsala wine)',
'1 tsp vanilla extract',
'1 package (7-8 oz / 200-250 g) ladyfingers (savoiardi)',

'For topping:',

'Unsweetened cocoa powder',
'Dark chocolate shavings (optional)',

],

instructions:[

'Prepare the coffee mixture:',
'Brew espresso or strong coffee and let it cool.',
'Mix in the coffee liqueur (if using) and vanilla extract. Set aside.',

'Make the mascarpone filling:',
'In a heatproof bowl whisk the egg yolks and sugar until smooth.',
'Place the bowl over a pot of simmering water (double boiler setup).',
'Whisk continuously for 5 to 7 minutes until the mixture thickens and the sugar dissolves. Let it cool slightly.',
'Fold in the mascarpone cheese until smooth.',

'Whip the cream:',
'Beat the heavy whipping cream in a chilled bowl until stiff peaks form.',
'Gently fold the whipped cream into the mascarpone mixture in batches ensuring it stays airy.',

'Assemble the tiramisu:',
'Quickly dip each ladyfinger into the coffee mixture (dont soak them too long, or theyll get soggy).',
'Arrange a single layer of dipped ladyfingers in the bottom of a 9x9-inch dish or similar container.',
'Spread half of the mascarpone filling evenly over the ladyfingers.',
'Repeat with another layer of dipped ladyfingers and the remaining mascarpone filling.',

'Chill and set:',
'Cover the dish with plastic wrap and refrigerate for at least 4 to 6 hours (preferably overnight) to allow flavors to meld.',

'Serve:',
'Dust the top generously with cocoa powder before serving.',
'Add dark chocolate shavings for extra decadence if desired.',
]
},

'Tonkatsu':{

ingredients:[
'For the Tonkatsu:',
'2 pork loin chops (boneless, about ½ inch thick)',
'½ teaspoon salt',
'½ teaspoon black pepper',
'½ cup all-purpose flour',
'1 large egg (lightly beaten)',
'1 cup panko breadcrumbs',
'Vegetable oil (for frying)',
'For Serving:',
'Tonkatsu sauce (store-bought or homemade, like Bulldog sauce)',
'Shredded cabbage',
'Steamed rice',
'Lemon wedges (optional)',
],

instructions:[

'Prepare Pork: Trim fat, tenderize, and season with salt and pepper.',
'Coat: Dredge in flour, dip in egg, then coat with panko.',
'Fry: Heat oil to 340–350°F. Fry chops for 5–7 minutes per side until golden. Drain.',
'Serve: Slice and serve with sauce, cabbage, rice, and lemon.',
'Enjoy! 😊',
]
},

'Tortellini Soup':{

ingredients:[
'2 tablespoons olive oil',
'1 medium onion, finely chopped',
'2-3 garlic cloves, minced',
'2 medium carrots, diced',
'2 celery stalks, diced',
'1 can (14.5 oz) diced tomatoes, with juice',
'6 cups chicken or vegetable broth',
'1 teaspoon Italian seasoning',
'1/2 teaspoon crushed red pepper flakes (optional)',
'Salt and black pepper, to taste',
'9-12 oz fresh or frozen cheese tortellini',
'2 cups fresh spinach or kale, chopped',
'1/2 cup heavy cream or milk (optional, for a creamy version)',
'Grated Parmesan cheese, for serving',
],
 
instructions:[
'Sauté the Aromatics:',
'Heat the olive oil in a large pot over medium heat. Add the chopped onion, carrots, and celery. Sauté for 5-7 minutes until softened.',
'Add the minced garlic and cook for an additional 1 minute, until fragrant.',

'Build the Soup Base:',
'Stir in the diced tomatoes (with their juice), broth, Italian seasoning, and red pepper flakes (if using).',
'Season with salt and black pepper to taste.',

'Simmer:',
'Bring the mixture to a gentle boil, then reduce the heat and let it simmer for about 10 minutes, allowing the flavors to meld.',

'Cook the Tortellini:',
'Add the tortellini to the soup and cook according to the package instructions (usually 5-7 minutes for fresh tortellini or slightly longer for frozen).',

'Add Greens and Cream (Optional):',
'Stir in the chopped spinach or kale and cook for 2-3 minutes until wilted.',
'If you prefer a creamy soup, reduce the heat to low and stir in the heavy cream or milk.',

'Serve:',
'Ladle the soup into bowls and top with grated Parmesan cheese. Serve with crusty bread or a side salad for a complete meal.',

'Enjoy your warm and comforting Tortellini Soup!',
]
},


'Udon Tofu':{

ingredients:[

'Udon noodles: 400g (fresh or frozen)',
'Firm tofu: 200g, pressed and cubed',
'Vegetable oil: 2 tablespoons',
'Garlic: 2 cloves, minced',
'Ginger: 1 teaspoon, grated',
'Vegetables (optional): 1 cup sliced bell peppers, carrots, broccoli, or bok choy',
'Soy sauce: 3 tablespoons',
'Sesame oil: 1 teaspoon',
'Oyster sauce or hoisin sauce: 1 tablespoon (optional for added flavor)',
'Brown sugar: 1 teaspoon',
'Rice vinegar: 1 tablespoon',
'Green onions: 2, chopped',
'Sesame seeds: 1 tablespoon (for garnish)',
'Red chili flakes (optional): for spice',
'Alternative to cilantro: fresh parsley or Thai basil for garnish (optional, as per your preference).',
],

instructions:[

'Cook tofu: Sauté tofu in 1 tbsp oil until golden. Set aside.',
'Prepare noodles: Cook udon as per package, rinse, and drain.',
'Sauté veggies: In 1 tbsp oil, fry garlic, ginger, and vegetables.',
'Make sauce: Mix soy sauce, sesame oil, sugar, and vinegar. Add to veggies.',
'Combine: Toss noodles, tofu, and sauce together. Heat for 1-2 minutes.',
'Serve: Garnish with green onions, sesame seeds, and parsley or basil.',
'Enjoy!',

]
},
'Veg Manchow Soup':{

ingredients:[

'Vegetables (finely chopped):',
'¼ cup cabbage',
'¼ cup carrots',
'¼ cup bell peppers (capsicum)',
'2-3 tbsp green beans',
'2 tbsp spring onion greens',
'2 tbsp spring onion whites',
'Garlic: 1 tbsp (finely chopped)',
'Ginger: 1 tsp (finely chopped)',
'Green chilies: 1-2 (finely chopped) (substitute with mild chili like Anaheim if needed)',
'Soy sauce: 1 tbsp',
'Vinegar: 1 tbsp',
'Red chili sauce: 1 tsp (adjust to taste)',
'Black pepper powder: ½ tsp',
'Cornflour (cornstarch): 1 tbsp (mixed with 2 tbsp water to form a slurry)',
'Vegetable stock or water: 4 cups',
'Salt: to taste',
'Oil: 1 tbsp',
'For Crispy Noodles (Optional):',
'Boiled noodles: ½ cup',
'Cornflour (cornstarch): 1 tbsp',
'Oil: for frying',
], 

instructions:[
'Prepare the Crispy Noodles (Optional):',
'Coat boiled noodles with cornflour.',
'Heat oil in a pan and deep fry the noodles until crispy. Set aside.',

'Prepare the Soup:',
'Heat oil: In a large pan or wok, heat 1 tbsp of oil on medium flame.',
'Sauté aromatics: Add chopped garlic, ginger, and green chilies. Sauté for 30 seconds until fragrant.',
'Add vegetables: Add the finely chopped vegetables (except spring onion greens). Stir-fry on high heat for 2-3 minutes to maintain a slight crunch.',
'Add liquid: Pour in the vegetable stock or water. Bring it to a boil.',
'Season and flavor: Add soy sauce, vinegar, red chili sauce, black pepper powder, and salt. Mix well.',
'Thicken the soup: Slowly stir in the cornflour slurry. Cook for 2-3 minutes, stirring continuously, until the soup thickens.',
'Finish: Stir in spring onion greens just before turning off the heat.',

'Serve:Serve hot in bowls, topped with crispy noodles for added texture.',
]
},


'Veg Manchurian Dry':{

ingredients:[

'For the Manchurian Balls:',
'1 cup grated cabbage',
'1 cup grated carrot',
'1/4 cup finely chopped capsicum (bell pepper)',
'1/4 cup finely chopped spring onion greens',
'2 tablespoons finely chopped beans (optional)',
'2–3 tablespoons all-purpose flour (maida)',
'2 tablespoons cornflour (cornstarch)',
'1/2 teaspoon ginger-garlic paste',
'Salt to taste',
'1/2 teaspoon black pepper powder',
'Oil for frying',
'For the Sauce:',
'1 tablespoon oil',
'1 tablespoon finely chopped garlic',
'1/2 tablespoon finely chopped ginger',
'1–2 green chilies, finely chopped (use less spicy chili as a jalapeño alternative if needed)',
'1/4 cup finely chopped spring onion whites',
'1/4 cup finely chopped capsicum (bell pepper)',
'1 tablespoon soy sauce',
'1 tablespoon red chili sauce (adjust to taste)',
'1 tablespoon tomato ketchup',
'1 teaspoon vinegar',
'1/2 teaspoon sugar (optional)',
'Salt and black pepper to taste',
],

instructions:[
'Prepare the Manchurian Balls:',
'In a large bowl, mix grated cabbage, carrot, capsicum, spring onion greens, and beans.',
'Add all-purpose flour, cornflour, ginger-garlic paste, black pepper powder, and salt. Mix well to form a thick mixture.',
'Shape the mixture into small balls (add more flour if it doesnt hold together).',
'Heat oil in a deep frying pan. Fry the balls in medium-hot oil until golden brown and crisp. Drain and set aside on a paper towel.',

'Prepare the Sauce:',
'Heat 1 tablespoon of oil in a wok or deep pan over high heat.',
'Add chopped garlic, ginger, and green chilies. Sauté for a few seconds until fragrant.',
'Add spring onion whites and capsicum. Stir-fry on high heat for 2–3 minutes.',
'Add soy sauce, red chili sauce, tomato ketchup, vinegar, sugar, salt, and pepper. Mix well.',
'Toss the fried Manchurian balls in the sauce. Stir gently to coat them evenly.',

'Garnish and Serve:',
'Garnish with chopped spring onion greens.',
'Serve hot as a starter or side dish with fried rice or noodles.',
'Enjoy your delicious Veg Manchurian Dry! 🌟',
]

},


'Yakitori':{

ingredients:[
'For the Yakitori Skewers:',

'1 lb (450g) chicken thighs or chicken breast, cut into bite-sized pieces',
'8-10 green onions (negi), cut into 1-inch pieces',
'Bamboo skewers (soaked in water for 30 minutes to prevent burning)',
'For the Tare Sauce:',

'1/4 cup soy sauce',
'1/4 cup mirin (sweet rice wine)',
'2 tbsp sake',
'2 tbsp sugar',
'1 garlic clove, minced (optional)',
'1 small piece of ginger, sliced (optional)',
],  

instructions:[

'Prepare the Skewers:',

'Thread the chicken pieces and green onion alternately onto the soaked bamboo skewers, leaving a little space between each piece for even cooking.',

'Make the Tare Sauce:',

'In a small saucepan, combine soy sauce, mirin, sake, and sugar.',
'Add garlic and ginger if using for additional flavor.',
'Simmer over low heat for about 5-7 minutes, stirring occasionally, until slightly thickened. Remove from heat and let cool.',

'Grill the Skewers:',
'Preheat your grill or grill pan to medium-high heat.',
'Brush the chicken skewers lightly with the tare sauce.',
'Grill for 2-3 minutes per side, brushing with more sauce as they cook, until the chicken is cooked through and slightly charred.',

'Serve:',
'Brush the skewers with a final layer of tare sauce and serve immediately.',
'Garnish with a sprinkle of sesame seeds or chopped scallions, if desired.',
]
},

'Kimchi Jjigae':{
    ingredients:[
    'Kimchi (fermented, with juice) - 2 cups',
    'Pork belly or pork shoulder - 150g (thinly sliced, optional)',
    'Tofu - 200g (firm, sliced)',
    'Onion - 1 small (sliced)',
    'Green onion - 2 stalks (chopped)',
    'Gochugaru (Korean chili flakes) - 1 tbsp (adjust to taste)',
    'Gochujang (Korean chili paste) - 1 tbsp',
    'Garlic - 3 cloves (minced)',
    'Soy sauce - 1 tbsp',
    'Sesame oil - 1 tsp',
    'Water or anchovy stock - 3 cups',
    'Salt - to taste',
    ],
    instructions:[
    'Prepare the Base:',
    'Heat sesame oil in a pot. Sauté garlic and pork slices until lightly browned.',
    
    'Add Kimchi:',
    'Add kimchi and gochugaru. Stir-fry for 3-4 minutes to enhance the flavors.',
    
    'Simmer:',
    'Add water or anchovy stock and bring to a boil. Stir in gochujang and soy sauce.',
    
    'Cook:',
    'Reduce heat to medium and simmer for 15-20 minutes until the flavors meld.',
    
    'Add Tofu and Onions:',
    'Add tofu slices and onion. Simmer for another 5 minutes.',
    
    'Finish:',
    'Add green onions and adjust seasoning with salt as needed.',
    
    'Serve:',
    'Serve hot with steamed rice and side dishes (banchan).',
    'Enjoy this comforting, spicy stew! 🍲',
    ]
    },
    
'Lauki Soup':{
ingredients:[
'Bottle gourd (lauki) - 2 cups (peeled and chopped)',
'Onion - 1 small (chopped)',
'Garlic - 2 cloves (minced)',
'Ginger - 1 tsp (grated)',
'Cumin seeds - 1/2 tsp',
'Olive oil - 1 tbsp',
'Vegetable stock or water - 3 cups',
'Salt - to taste',
'Black pepper - to taste',
'Cilantro - for garnish',
],
instructions:[
'Prepare the Base:',
'Heat olive oil in a pot. Add cumin seeds and let them splutter.',
'Sauté onion, garlic, and ginger until softened.',

'Cook Lauki:',
'Add chopped lauki and sauté for 2-3 minutes.',

'Simmer:',
'Add vegetable stock or water. Cover and cook for 15-20 minutes until the lauki is soft.',

'Blend:',
'Let the mixture cool slightly. Blend it into a smooth puree using a blender or immersion blender.',

'Season:',
'Return the soup to the pot. Add salt and pepper to taste. Simmer for 2-3 minutes.',

'Serve:',
'Garnish with cilantro and serve hot with bread or as a light starter.',
'Enjoy this healthy and comforting soup! 🥣',
]
},
'Margherita Pizza':{
ingredients:[

'For the Dough:',
'All-purpose flour - 2 1/2 cups',
'Warm water - 3/4 cup',
'Active dry yeast - 1 tsp',
'Olive oil - 2 tbsp',
'Sugar - 1 tsp',
'Salt - 1/2 tsp',

'For the Topping:',
'Tomato sauce - 1/2 cup (preferably fresh or passata)',
'Fresh mozzarella - 200g (sliced)',
'Fresh basil leaves - 8-10',
'Olive oil - 1 tbsp',
'Salt - to taste',
],
instructions:[
'Prepare the Dough:',
'Dissolve yeast and sugar in warm water. Let it sit for 5-10 minutes until frothy.',
'In a bowl, mix flour and salt. Add the yeast mixture and olive oil. Knead into a soft, smooth dough.',
'Cover and let it rise for 1-2 hours until doubled in size.',

'Preheat Oven:',
'Preheat the oven to 475°F (245°C). Place a pizza stone or baking sheet inside to heat.',

'Roll Out the Dough:',
'Punch down the dough and roll it into a thin circle on a floured surface.',

'Assemble the Pizza:',
'Spread tomato sauce evenly over the dough.',
'Arrange mozzarella slices on top. Add a sprinkle of salt and drizzle with olive oil.',

'Bake:',
'Transfer the pizza to the preheated stone or baking sheet. Bake for 8-12 minutes until the crust is golden and the cheese is bubbly.',

'Add Basil and Serve:',
'Top with fresh basil leaves. Slice and enjoy your homemade Margherita pizza! 🍕',
]
},

'Marinated Mushrooms':{
    ingredients:[
    'Button mushrooms - 500g (cleaned and trimmed)',
    'Olive oil - 1/4 cup',
    'Garlic - 3 cloves (minced)',
    'Balsamic vinegar - 2 tbsp',
    'Soy sauce - 1 tbsp',
    'Lemon juice - 1 tbsp',
    'Dried oregano - 1 tsp',
    'Dried thyme - 1/2 tsp',
    'Salt - to taste',
    'Black pepper - to taste',
    'Fresh parsley - 2 tbsp (chopped, for garnish)',
    ],
    instructions:[
    'Cook Mushrooms:',
    'Bring a pot of water to boil, blanch the mushrooms for 2-3 minutes, then drain and set aside.',
    
    'Prepare the Marinade:',
    'In a bowl, mix olive oil, balsamic vinegar, soy sauce, lemon juice, garlic, oregano, thyme, salt, and pepper.',
    
    'Marinate Mushrooms:',
    'Add the mushrooms to the marinade. Toss well to coat.',
    'Cover and refrigerate for at least 2 hours, preferably overnight, to let the flavors meld.',
    
    'Serve:',
    'Garnish with fresh parsley and serve as an appetizer or side dish.',
    'Enjoy these flavorful marinated mushrooms! 🍄',
    ]
    },
    'Marinated Olives':{
ingredients:[
'Mixed olives - 2 cups (pitted or whole, depending on preference)',
'Olive oil - 1/4 cup',
'Garlic - 3 cloves (smashed)',
'Lemon zest - 1 tsp',
'Lemon juice - 1 tbsp',
'Dried oregano - 1 tsp',
'Fresh thyme - 1 tsp (or 1/2 tsp dried thyme)',
'Red pepper flakes - 1/2 tsp (optional)',
'Bay leaves - 1-2',
'Black peppercorns - 1 tsp',
],
instructions:[
'Prepare the Marinade:',
'In a bowl, combine olive oil, garlic, lemon zest, lemon juice, oregano, thyme, red pepper flakes, bay leaves, and peppercorns.',

'Marinate the Olives:',
'Add the olives to the bowl and toss to coat them in the marinade.',

'Refrigerate:',
'Cover the bowl and refrigerate for at least 2 hours, ideally overnight, for the flavors to infuse.',

'Serve:',
'Serve the marinated olives as a snack, appetizer, or alongside cheese and bread.',
'Enjoy these flavorful marinated olives! 🫒',
]
},

'Masala Dosa':{
ingredients:[

'For the Dosa Batter:',
'Rice - 2 cups',
'Urad dal (black gram) - 1/2 cup',
'Fenugreek seeds - 1 tsp',
'Water - as needed',
'Salt - to taste',

'For the Masala Filling:',

'Potatoes - 3 large (boiled and mashed)',
'Onion - 1 large (sliced)',
'Green chilies - 2 (sliced)',
'Ginger - 1 tsp (grated)',
'Mustard seeds - 1 tsp',
'Curry leaves - 8-10',
'Turmeric powder - 1/2 tsp',
'Oil - 2 tbsp',
'Salt - to taste',
'Fresh coriander - 2 tbsp (chopped, for garnish)',

'For Cooking:',
'Ghee or oil - as needed',
],

instructions:[
'1. Prepare the Dosa Batter:',
'Soak rice, urad dal, and fenugreek seeds in water for 6-8 hours.',
'Grind into a smooth batter, adding water as needed.',
'Ferment overnight until it doubles in volume. Add salt and mix.',

'2. Make the Masala Filling:',
'Heat oil in a pan. Add mustard seeds and let them splutter.',
'Add curry leaves, green chilies, and ginger. Sauté briefly.',
'Add onions and sauté until soft.',
'Stir in turmeric powder, mashed potatoes, and salt. Mix well.',
'Garnish with coriander and set aside.',

'3. Cook the Dosa:',
'Heat a flat non-stick pan or griddle. Grease lightly with oil.',
'Pour a ladleful of batter and spread it thinly in a circular motion.',
'Drizzle oil or ghee around the edges. Cook until crisp and golden.',

'4. Assemble:',
'Place a portion of the potato masala in the center of the dosa.',
'Fold or roll the dosa and serve hot.',

'5. Serve:',
'Pair with coconut chutney, sambar, or tomato chutney for a delicious meal.',
'Enjoy your crispy and flavorful Masala Dosa! 🥞',
]
},

'Mexican Street Corn Flatbread':{
ingredients:[
'For the Flatbread Base:',
'Flatbread or naan - 2 pieces',
'Olive oil - 1 tbsp',

'For the Topping:',
'Corn kernels - 1 cup (grilled or roasted)',
'Mayonnaise - 2 tbsp',
'Sour cream - 2 tbsp',
'Lime juice - 1 tbsp',
'Garlic - 1 clove (minced)',
'Chili powder - 1 tsp',
'Cotija cheese (or feta) - 1/4 cup (crumbled)',
'Fresh cilantro - 2 tbsp (chopped)',
'Jalapeño - 1 small (thinly sliced, optional)',
'Salt - to taste',
],

instructions:[
'Prepare the Base:',
'Preheat the oven to 400°F (200°C). Brush the flatbread with olive oil and toast in the oven for 3-4 minutes until slightly crispy.',

'Make the Topping Mixture:',
'In a bowl, mix mayonnaise, sour cream, lime juice, garlic, chili powder, and salt.',

'Assemble the Flatbread:',
'Spread the mayo-sour cream mixture over the toasted flatbread.',
'Top with grilled corn, Cotija cheese, cilantro, and jalapeño slices.',

'Bake:',
'Return the assembled flatbread to the oven and bake for 5-7 minutes until warm and slightly bubbly.',

'Serve:',
'Slice and serve immediately with an extra squeeze of lime juice.',
'Enjoy this delicious twist on Mexican street corn! 🌽🍕',
]
},
'Mexican Street Corn':{
ingredients:[
'Fresh corn on the cob - 4 ears',
'Mayonnaise - 1/4 cup',
'Sour cream - 1/4 cup',
'Lime juice - 1 tbsp',
'Cotija cheese - 1/2 cup (crumbled; substitute with feta if unavailable)',
'Chili powder - 1 tsp (adjust to taste)',
'Cilantro - 2 tbsp (chopped, for garnish)',
'Butter - 2 tbsp (melted)',
'Salt - to taste',
],
instruction:[
'Grill the Corn:',
'Preheat a grill or stovetop grill pan.',
'Brush the corn with melted butter and grill over medium-high heat, turning occasionally, until the kernels are charred and tender (about 8-10 minutes).',

'Prepare the Topping:',
'In a bowl, mix mayonnaise, sour cream, lime juice, and a pinch of salt.',

'Assemble the Corn:',
'Spread the mayo mixture evenly over each ear of grilled corn.',
'Sprinkle with crumbled Cotija cheese and chili powder.',

'Garnish and Serve:',
'Garnish with chopped cilantro and serve hot with lime wedges on the side.',
'Enjoy the vibrant flavors of this classic Mexican street snack! 🌽✨',
]
},





'Minestrone Soup':{
ingredients:[

'Base Vegetables:',
'Olive oil - 2 tbsp',
'Onion - 1 medium (chopped)',
'Garlic - 3 cloves (minced)',
'Carrot - 2 (chopped)',
'Celery - 2 stalks (chopped)',

'Main Ingredients:',
'Zucchini - 1 small (chopped)',
'Green beans - 1 cup (chopped)',
'Canned diced tomatoes - 1 can (14 oz)',
'Tomato paste - 1 tbsp',
'Vegetable broth - 4 cups',
'Cooked beans (kidney, cannellini, or chickpeas) - 1 cup',
'Pasta (small shapes like macaroni) - 1/2 cup',
'Spinach or kale - 1 cup (chopped)',

'Seasonings:',
'Dried oregano - 1 tsp',
'Dried basil - 1 tsp',
'Bay leaf - 1',
'Salt and black pepper - to taste',
'Parmesan cheese - for garnish (optional)',
],
instructions:[
'Sauté Base Vegetables:',
'Heat olive oil in a large pot over medium heat.',
'Sauté onion, garlic, carrot, and celery until softened (5-7 minutes).',

'Add Vegetables and Broth:',
'Add zucchini, green beans, canned tomatoes, tomato paste, and vegetable broth.',
'Stir in oregano, basil, bay leaf, salt, and pepper.',

'Simmer:',
'Bring to a boil, then reduce heat and let simmer for 15 minutes.',

'Cook Pasta:',
'Add pasta and beans to the pot. Simmer for another 10 minutes until the pasta is tender.',

'Add Greens:',
'Stir in spinach or kale and cook for 2-3 minutes until wilted.',

'Serve:',
'Remove the bay leaf. Ladle the soup into bowls, garnish with Parmesan cheese if desired, and serve with crusty bread.',
'Enjoy this hearty and nutritious Italian classic! 🍲🇮🇹',
]
},
'Mixed Vegetable Soup Recipe':{
ingredients:[
'Vegetables:',
'Carrot - 1 (chopped)',
'Beans - 1/2 cup (chopped)',
'Peas - 1/2 cup',
'Corn kernels - 1/2 cup',
'Potato - 1 small (chopped)',
'Onion - 1 small (chopped)',
'Tomato - 1 (chopped)',

'Base and Seasoning:',
'Olive oil or butter - 1 tbsp',
'Garlic - 2 cloves (minced)',
'Vegetable stock or water - 4 cups',
'Black pepper - 1/2 tsp',
'Salt - to taste',
'Dried oregano or thyme - 1/2 tsp',
'Cornstarch - 1 tbsp (optional, for thickening)',
'Fresh parsley or coriander - for garnish',
],
instructions:[
'Prepare the Vegetables:',
'Wash and chop all vegetables into bite-sized pieces.',

'Sauté Aromatics:',
'Heat olive oil or butter in a large pot.',
'Sauté garlic and onion until fragrant and translucent.',

'Cook the Vegetables:',
'Add carrot, beans, potato, and other vegetables to the pot.',
'Stir and cook for 3-4 minutes.',

'Add Stock and Simmer:',
'Pour in vegetable stock or water. Add salt, pepper, and dried herbs.',
'Bring to a boil, then reduce heat and simmer for 15-20 minutes until the vegetables are tender.',

'Optional Thickening:',
'If a thicker consistency is desired, mix cornstarch with 2 tbsp of water, then stir into the soup. Cook for another 2-3 minutes.',

'Serve:',
'Garnish with fresh parsley or coriander and serve hot with crusty bread or crackers.',
'Enjoy this comforting and nutritious soup! 🥣',
]
},

'Mochi':{
ingredients:[
'Sweet rice flour (Mochiko) - 1 cup',
'Sugar - 1/4 cup',
'Water - 3/4 cup',
'Cornstarch or potato starch - for dusting',

'Optional Fillings and Flavors:',
'Sweet red bean paste (Anko) - as needed',
'Matcha powder, cocoa powder, or food coloring - for variations',
],

instructions:[
'Mix the Ingredients:',
'In a microwave-safe bowl, combine sweet rice flour, sugar, and water. Mix until smooth.',

'Cook the Mochi:',
'Microwave the mixture for 1 minute on high. Stir well.',
'Repeat microwaving in 30-second intervals, stirring in between, until the mixture is thick, sticky, and translucent (about 2-3 minutes total).',

'Dust the Surface:',
'Generously dust a clean surface or parchment paper with cornstarch to prevent sticking.',

'Shape the Mochi:',
'Transfer the cooked mochi onto the dusted surface. Allow it to cool slightly but remain pliable.',
'Dust your hands with cornstarch, then divide the mochi into small portions. Flatten each portion into a circle.',

'Fill (Optional):',
'Place a small amount of red bean paste (or desired filling) in the center of each mochi circle. Fold and pinch the edges to seal, shaping into a smooth ball.',

'Serve:',
'Serve immediately or store in an airtight container at room temperature for up to a day.',
'Enjoy the soft, chewy goodness of homemade mochi! 🍡',
]
},
 
'Nachos Supreme':{
ingredients:[

'For the Nachos:',

'Tortilla chips - 4 cups',
'Ground beef or chicken - 1 cup (cooked and seasoned)',
'Refried beans - 1 cup',
'Shredded cheddar or Monterey Jack cheese - 1 cup',

'Toppings:',

'Fresh tomato - 1 (diced)',
'Onion - 1 small (chopped)',
'Jalapeños - 2 (sliced, optional)',
'Black olives - 1/4 cup (sliced, optional)',
'Fresh cilantro - 2 tbsp (chopped)',
'Sour cream - 1/4 cup',
'Guacamole - 1/4 cup',
'Salsa - 1/4 cup',
],
instructions:[
'Prepare the Meat:',
'If using ground beef or chicken, season with taco spices (chili powder, cumin, paprika, garlic powder, and salt) and cook in a skillet until browned.',

'Layer the Nachos:',
'Preheat the oven to 375°F (190°C).',
'Spread a layer of tortilla chips on a baking sheet or oven-safe platter.',
'Top with refried beans, cooked meat, and shredded cheese.',

'Bake:',
'Bake in the preheated oven for 8-10 minutes or until the cheese is melted and bubbly.',

'Add Fresh Toppings:',
'Remove from the oven and sprinkle with diced tomatoes, onions, jalapeños, black olives, and cilantro.',

'Serve:',
'Drizzle with sour cream, guacamole, and salsa. Serve immediately and enjoy!',
'Dig into this cheesy, flavorful, and satisfying Nachos Supreme! 🧀🌮',
]
},

'Natto':{
ingredients:[
'Soybeans - 2 cups (dried)',
'Natto starter culture (Bacillus subtilis) - 1 packet (available in specialty stores or online)',
],
instructions:[
'Prepare the Soybeans:',
'Wash the soybeans thoroughly and soak them in water for 12-16 hours, ensuring they expand to about twice their size.',

'Cook the Soybeans:',
'Steam or boil the soaked soybeans for 6-8 hours until they are very soft and can be easily mashed between your fingers.',

'Inoculate with Natto Culture:',
'Drain the cooked soybeans and place them in a sterilized container.',
'Dissolve the natto starter culture in a small amount of water and mix it evenly into the soybeans while they are still hot.',

'Ferment the Soybeans:',
'Spread the soybeans in a thin layer in the container. Cover it with a breathable lid or plastic wrap with holes to allow air circulation.',
'Keep the container in a warm environment (100°F/37°C) for 24-48 hours. Use a fermentation box, oven with a light on, or a yogurt maker to maintain the temperature.',

'Chill and Store:',
'Once fermentation is complete, the soybeans should have a sticky, stringy texture and a strong aroma.',
'Transfer to the refrigerator and chill for at least 12 hours before consuming. This enhances the flavor.',

'Serve:',
'Stir natto thoroughly to activate its sticky texture. Serve over steamed rice with soy sauce, mustard, chopped green onions, or raw egg yolk.',
'Enjoy this traditional Japanese superfood rich in probiotics and nutrients! 🍚🍂',
]
},




'Oden':{
ingredients:[

'Main Ingredients:',
'Daikon radish - 1/2 (peeled and cut into large rounds)',
'Konjac (Konnyaku) - 1 block (sliced or in the form of noodles)',
'Boiled eggs - 4 (peeled)',
'Fish cakes (Chikuwa, Kamaboko, etc.) - 6-8 slices or sticks',
'Tofu - 1 block (firm, cut into cubes)',
'Shirataki noodles - 1 cup (optional)',

'For the Broth:',
'Dashi stock - 4 cups (can be made from bonito flakes or kombu)',
'Soy sauce - 3 tbsp',
'Mirin - 2 tbsp',
'Sake - 2 tbsp',
'Sugar - 1 tbsp',
'Salt - to taste',
],

instructions:[
'Prepare the Broth:',
'In a large pot, combine dashi stock, soy sauce, mirin, sake, sugar, and a pinch of salt.',
'Bring to a boil, then reduce to a simmer for 5-10 minutes to blend the flavors.',

'Prepare the Ingredients:',
'While the broth is simmering, prepare your vegetables, fish cakes, eggs, tofu, and konjac. If using shirataki noodles, rinse them thoroughly.',

'Cook the Oden:',
'Add the prepared ingredients (daikon, tofu, eggs, fish cakes, and konjac) to the simmering broth.',
'Simmer on low heat for 30-60 minutes. The longer you simmer, the more flavorful the ingredients will become.',

'Serve:',
'Once the ingredients are tender and flavorful, ladle the oden into bowls.',
'Serve with mustard on the side for a spicy kick if desired.',
'Enjoy the warm, comforting flavors of Oden, a classic Japanese winter dish! 🍲',
]
},





'Paneer Pakora':{
ingredients:[
'For the Paneer Pakora:',
'Paneer (Indian cottage cheese) - 200g (cut into cubes or rectangles)',
'Chickpea flour (besan) - 1 cup',
'Rice flour - 2 tbsp (for extra crispiness)',
'Red chili powder - 1 tsp',
'Turmeric powder - 1/2 tsp',
'Garam masala - 1 tsp',
'Cumin powder - 1/2 tsp',
'Ajwain (carom seeds) - 1/2 tsp (optional)',
'Baking soda - 1/4 tsp (optional, for fluffiness)',
'Salt - to taste',
'Water - as needed (to make a batter)',
'Fresh coriander leaves - 1 tbsp (chopped, optional)',

'For Frying:',
'Oil - for deep frying',
],
instructions:[
'Prepare the Batter:',
'In a mixing bowl, combine chickpea flour, rice flour, red chili powder, turmeric, garam masala, cumin powder, ajwain, baking soda, and salt.',
'Gradually add water to make a thick, smooth batter that can coat the paneer. Add coriander leaves for extra flavor if desired.',

'Coat the Paneer:',
'Heat oil in a deep frying pan over medium heat.',
'Dip the paneer cubes into the batter, ensuring they are fully coated.',

'Fry the Pakoras:',
'Once the oil is hot (test by dropping a small batter bit into the oil; it should sizzle), carefully add the battered paneer cubes.',
'Fry in batches, turning occasionally, until golden brown and crispy. This should take 3-4 minutes per batch.',

'Drain and Serve:',
'Remove the pakoras with a slotted spoon and drain excess oil on a paper towel.',
'Serve hot with green chutney, tamarind chutney, or ketchup.',
'Enjoy these crispy and flavorful Paneer Pakoras! 🧀',
]
},





'Paneer Tikka':{
ingredients:[
'For the Marinade:',
'Paneer (cubed) - 250g',
'Thick yogurt - 1/2 cup',
'Ginger-garlic paste - 1 tbsp',
'Red chili powder - 1 tsp',
'Turmeric powder - 1/2 tsp',
'Garam masala - 1 tsp',
'Cumin powder - 1/2 tsp',
'Kasuri methi (dried fenugreek leaves) - 1 tsp',
'Lemon juice - 1 tbsp',
'Salt - to taste',
'Oil - 1 tbsp',
'Chaat masala (for garnish) - 1/2 tsp',
'Coriander leaves - for garnish',

'Optional for Serving:',
'Onion rings',
'Lemon wedges',
],
instructions:[
'Prepare the Marinade:',
'In a bowl, whisk together yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, cumin powder, kasuri methi, lemon juice, oil, and salt.',
'Add the paneer cubes to the marinade and mix gently. Ensure each piece is coated well.',
'Cover and refrigerate for at least 1-2 hours (or overnight for best results).',

'Grill the Paneer Tikka:',
'Preheat the grill or oven to 400°F (200°C). If using skewers, thread the marinated paneer cubes onto them.',
'Place the paneer on a baking tray lined with parchment paper or directly on the grill rack.',
'Grill for 12-15 minutes, or until the paneer is slightly charred and cooked through. If using an oven, you can also broil for 2-3 minutes for extra crispiness.',

'Serve:',
'Garnish the Paneer Tikka with chaat masala and fresh coriander leaves. Serve with onion rings and lemon wedges on the side.',
'Enjoy this delicious, smoky, and flavorful Paneer Tikka as an appetizer or snack! 🍢',
]
},



'Parmesan Crusted Potatoes':{
ingredients:[
'Baby potatoes - 10-12 (or regular potatoes, cut into wedges)',
'Olive oil - 2 tbsp',
'Grated Parmesan cheese - 1/2 cup',
'Breadcrumbs (preferably panko) - 1/2 cup',
'Garlic powder - 1/2 tsp',
'Dried thyme - 1 tsp',
'Salt - to taste',
'Black pepper - to taste',
'Fresh parsley - 2 tbsp (chopped, for garnish)',
],
instructions:[
'Preheat the Oven:',
'Preheat your oven to 400°F (200°C).',

'Prepare the Potatoes:',
'If using baby potatoes, cut them in half. For regular potatoes, cut into wedges.',
'Place the potatoes in a bowl and toss them with olive oil, salt, and pepper.',

'Make the Crust:',
'In a separate bowl, mix grated Parmesan, breadcrumbs, garlic powder, and dried thyme.',

'Coat the Potatoes:',
'Roll the oiled potatoes in the Parmesan-breadcrumb mixture, pressing gently to coat them evenly.',

'Bake the Potatoes:',
'Place the coated potatoes in a single layer on a baking sheet lined with parchment paper.',
'Bake for 25-30 minutes, or until golden and crispy, flipping halfway through for even browning.',

'Garnish and Serve:',
'Once done, garnish with fresh parsley and serve hot.',
'Enjoy these crispy, cheesy Parmesan Crusted Potatoes as a side dish or snack! 🥔🧀',
]
},

'Pasta Puttanesca':{
ingredients:[
'Pasta (spaghetti, linguine, or penne) - 200g',
'Olive oil - 2 tbsp',
'Garlic - 4 cloves (minced)',
'Anchovy fillets - 4-5 (optional, or use anchovy paste)',
'Red pepper flakes - 1/2 tsp (optional, for heat)',
'Canned tomatoes - 1 can (14 oz, crushed or whole, crushed)',
'Black olives - 1/4 cup (pitted and sliced)',
'Capers - 2 tbsp',
'Red onion - 1 small (chopped)',
'Fresh parsley - 2 tbsp (chopped, for garnish)',
'Salt and black pepper - to taste',
],
instruction:[
'Cook the Pasta:',
'Bring a large pot of salted water to a boil. Cook pasta according to package directions until al dente. Reserve 1/2 cup of pasta cooking water, then drain the pasta.',

'Prepare the Sauce:',
'In a large pan, heat olive oil over medium heat.',
'Add garlic and red onion. Sauté for 2-3 minutes until fragrant and softened.',
'Stir in anchovy fillets (if using) and red pepper flakes, cooking for another 1-2 minutes. The anchovies should break down into the oil.',

'Simmer the Sauce:',
'Add the canned tomatoes, olives, and capers to the pan. Stir to combine and let the sauce simmer for 10-15 minutes, allowing the flavors to meld. Season with salt and pepper to taste.',

'Combine the Pasta and Sauce:',
'Add the drained pasta to the sauce, tossing to coat. If the sauce is too thick, add a bit of the reserved pasta water to thin it out.',

'Serve:',
'Garnish with fresh parsley and serve immediately.',
'Enjoy this bold and flavorful Pasta Puttanesca! 🍝',
]
},



'Perfect Fish Tacos':{
ingredients:[
'For the Fish:',
'White fish fillets (such as tilapia, cod, or mahi-mahi) - 4 pieces (about 1 lb)',
'Olive oil - 1 tbsp',
'Lime juice - 2 tbsp',
'Garlic powder - 1/2 tsp',
'Paprika - 1 tsp',
'Cumin - 1/2 tsp',
'Chili powder - 1/2 tsp',
'Salt - to taste',
'Black pepper - to taste',

'For the Tacos:',
'Small flour or corn tortillas - 8',
'Cabbage - 1 cup (shredded)',
'Fresh cilantro - 1/4 cup (chopped)',
'Red onion - 1/4 cup (thinly sliced)',
'Avocado - 1 (sliced)',
'Lime wedges - for serving',
'Hot sauce (optional)',

'For the Creamy Sauce:',
'Sour cream or Greek yogurt - 1/2 cup',
'Mayo - 2 tbsp',
'Lime juice - 1 tbsp',
'Chili powder - 1/2 tsp',
'Salt - to taste',
],
instructions:[
'Prepare the Fish:',
'In a bowl, mix olive oil, lime juice, garlic powder, paprika, cumin, chili powder, salt, and pepper.',
'Coat the fish fillets with this marinade and let them sit for 15-20 minutes.',

'Cook the Fish:',
'Heat a skillet or grill pan over medium-high heat.',
'Cook the fish fillets for 3-4 minutes per side, or until golden and cooked through (the fish should flake easily with a fork).',
'Once cooked, break the fish into large chunks using a fork.',

'Prepare the Creamy Sauce:',
'In a small bowl, mix sour cream (or Greek yogurt), mayo, lime juice, chili powder, and salt. Adjust the seasoning to taste.',

'Assemble the Tacos:',
'Warm the tortillas in a dry pan or microwave.',
'Spread a little of the creamy sauce on each tortilla.',
'Add a portion of the cooked fish on top, followed by shredded cabbage, red onion, cilantro, and avocado slices.',
'Squeeze fresh lime juice over the top and drizzle with extra hot sauce if desired.',

'Serve:',
'Serve the fish tacos immediately with lime wedges and enjoy!',
'These fish tacos are fresh, flavorful, and perfect for a light and delicious meal! 🌮🐟',
]
},



'Pomodoro Sauce':{
ingredients:[
'Olive oil - 2 tbsp',
'Garlic - 3 cloves (minced)',
'Canned tomatoes (whole or crushed) - 2 cups (preferably San Marzano)',
'Tomato paste - 1 tbsp',
'Dried oregano - 1 tsp',
'Fresh basil - 1/4 cup (chopped)',
'Sugar - 1/2 tsp (optional, to balance acidity)',
'Salt - to taste',
'Black pepper - to taste',
],
instructions:[
'Heat the Olive Oil:',
'In a large saucepan, heat olive oil over medium heat.',

'Sauté Garlic:',
'Add minced garlic to the pan and sauté for 1-2 minutes, being careful not to burn it.',

'Add Tomatoes:',
'Add canned tomatoes and tomato paste to the pan. If using whole tomatoes, crush them with a spoon or potato masher.',
'Stir to combine, and bring the mixture to a simmer.',

'Season the Sauce:',
'Add oregano, basil, sugar (if using), salt, and pepper. Stir well.',
'Reduce heat and simmer for 15-20 minutes, allowing the flavors to meld and the sauce to thicken.',

'Blend (Optional):',
'For a smoother sauce, use an immersion blender or transfer the sauce to a blender and blend until smooth.',

'Serve:',
'Serve the pomodoro sauce over your favorite pasta, garnished with fresh basil and grated Parmesan if desired.',
'Enjoy this simple, fresh, and delicious Pomodoro Sauce! 🍝',
]
},



'Ramen':{
ingredients:[
'For the Broth:',

'Chicken or vegetable stock - 4 cups',
'Miso paste - 2 tbsp (for a rich umami flavor)',
'Soy sauce - 2 tbsp',
'Sesame oil - 1 tbsp',
'Garlic - 2 cloves (minced)',
'Ginger - 1-inch piece (sliced)',
'Green onions - 2 (chopped, for garnish)',
'Sugar - 1 tsp (optional, for sweetness)',

'For the Noodles:',
'Ramen noodles - 2 servings (fresh or dried)',

'Toppings (optional):',
'Soft-boiled eggs - 2 (with runny yolk)',
'Sliced pork belly or chicken breast - 1/2 cup',
'Corn kernels - 2 tbsp',
'Bamboo shoots - 1/4 cup',
'Spinach or bok choy - 1/2 cup',
'Nori (seaweed) - 2 sheets',
'Chili oil - a drizzle (optional for spice)',
],
instructions:[
'Prepare the Broth:',
'In a large pot, heat sesame oil over medium heat. Add minced garlic and ginger, sauté for 2-3 minutes until fragrant.',
'Add the chicken or vegetable stock, miso paste, soy sauce, and sugar (if using). Stir until the miso dissolves completely.',
'Bring to a simmer and cook for 15-20 minutes, allowing the flavors to meld. Taste and adjust seasoning as needed.',

'Cook the Noodles:',
'In a separate pot, bring water to a boil and cook the ramen noodles according to the package instructions (typically 3-5 minutes for fresh noodles). Drain and set aside.',

'Prepare the Toppings:',
'Soft-boil the eggs by boiling them for 6-7 minutes, then placing them in cold water to stop cooking. Peel and slice in half.',
'Cook the protein of your choice (pork or chicken) and slice thinly.',

'Assemble the Ramen:',
'Divide the cooked noodles between two bowls.',
'Pour the hot broth over the noodles, ensuring they are fully covered.',
'Top with your desired toppings: soft-boiled egg, sliced meat, corn, bamboo shoots, spinach, nori, and a drizzle of chili oil for spice.',

'Serve:',
'Garnish with chopped green onions and serve hot!',
'Enjoy your homemade, flavorful ramen! 🍜',
]
},



'Sabudana Tikki':{
ingredients:[
'Sabudana (sago pearls) - 1 cup',
'Boiled potatoes - 2 medium-sized',
'Green chili - 1 (finely chopped)',
'Ginger - 1-inch piece (grated)',
'Cumin seeds - 1/2 tsp',
'Coriander leaves - 2 tbsp (chopped)',
'Rock salt (sendha namak) - to taste',
'Black pepper - 1/4 tsp',
'Lemon juice - 1 tbsp',
'Rice flour or cornflour - 2 tbsp (for binding)',
'Oil - for shallow frying',
],
instructions:[
'Prepare the Sabudana:',
'Wash the sabudana under cold water to remove excess starch.',
'Soak the sabudana in water for 3-4 hours or overnight, ensuring the water level is just enough to cover the sabudana. The pearls should absorb the water and become soft.',

'Prepare the Tikki Mixture:',
'In a bowl, mash the boiled potatoes.',
'Add the soaked and drained sabudana, green chili, grated ginger, cumin seeds, coriander leaves, rock salt, black pepper, and lemon juice.',
'Mix everything well. Add rice flour or cornflour to bind the mixture together. If the mixture feels too soft, add a little more flour to help shape the tikkis.',

'Shape the Tikkis:',
'Take small portions of the mixture and shape them into round or oval tikkis (patties).',

'Fry the Tikkis:',
'Heat oil in a shallow frying pan over medium heat.',
'Once the oil is hot, place the tikkis gently into the pan and fry them until golden brown on both sides. This should take about 3-4 minutes per side.',
'Remove from the pan and drain on paper towels to remove excess oil.',

'Serve:',
'Serve the Sabudana Tikkis hot with chutney or yogurt.',
'Enjoy these crispy, delicious tikkis! 🌟',
]
},



'Samosa':{
ingredients:[
'For the Filling:',
'Boiled potatoes - 3 medium-sized (peeled and mashed)',
'Green peas - 1/2 cup (boiled)',
'Onion - 1 medium-sized (finely chopped)',
'Ginger - 1-inch piece (grated)',
'Green chilies - 1-2 (finely chopped)',
'Cumin seeds - 1 tsp',
'Coriander powder - 1 tsp',
'Cumin powder - 1 tsp',
'Garam masala - 1/2 tsp',
'Red chili powder - 1/2 tsp',
'Turmeric powder - 1/4 tsp',
'Amchur powder (dry mango powder) - 1 tsp',
'Salt - to taste',
'Fresh coriander leaves - 2 tbsp (chopped)',
'Lemon juice - 1 tbsp',
'Oil - for frying',

'For the Samosa Pastry:',

'All-purpose flour (maida) - 1 cup',
'Semolina (rava) - 2 tbsp (optional, for crispness)',
'Carom seeds (ajwain) - 1/4 tsp',
'Salt - to taste',
'Oil - 2 tbsp (for the dough)',
'Water - as needed to form a dough',
],
instructions:[
'Prepare the Filling:',
'Heat 1 tbsp of oil in a pan and add cumin seeds. Once they splutter, add chopped onions, ginger, and green chilies. Sauté until onions turn golden.',
'Add all the dry spices: coriander powder, cumin powder, garam masala, red chili powder, turmeric, and amchur powder. Stir well for a minute.',
'Add the boiled potatoes, peas, and salt. Mash and mix everything together, then cook for 2-3 minutes.',
'Remove from heat, add lemon juice and fresh coriander leaves. Let the filling cool down.',

'Prepare the Dough:',
'In a mixing bowl, combine all-purpose flour, semolina, carom seeds, and salt.',
'Add 2 tbsp of oil and rub it into the flour mixture until it resembles breadcrumbs.',
'Gradually add water and knead into a smooth, firm dough. Cover with a damp cloth and let it rest for 20-30 minutes.',

'Shape the Samosas:',
'Divide the dough into small equal portions and roll each portion into a ball.',
'Roll each ball into a thin oval or round shape (about 6 inches in diameter).',
'Cut the circle in half to form two semi-circles.',
'Create a cone shape by folding each semi-circle, sealing the edge with a little water.',
'Fill the cone with the prepared filling and seal the open edge, pinching the sides to form a triangular shape.',

'Fry the Samosas:',
'Heat oil in a deep frying pan over medium heat.',
'Once the oil is hot, gently drop the samosas into the oil, a few at a time. Fry until golden and crispy, turning occasionally for even cooking (about 5-7 minutes).',
'Remove the samosas and drain on paper towels.',

'Serve:',
'Serve hot with tamarind chutney or mint chutney.',
'Enjoy your crispy, savory samosas! 🌶️',
]
},




'Sashimi':{
ingredients:[
'Fresh sashimi-grade fish (e.g., tuna, salmon, yellowtail, or snapper) - 200g',
'Soy sauce - for dipping',
'Wasabi - a small amount',
'Pickled ginger (gari) - for cleansing the palate',
'Daikon radish - finely shredded (optional, for garnish)',
'Shiso leaves or nori (seaweed) - for serving (optional)',
'Lemon slices - optional',
],
instructions:[
'Select the Fish:',
'Choose sashimi-grade fish from a trusted source to ensure it is fresh and safe to eat raw.',

'Prepare the Fish:',
'Use a very sharp knife to slice the fish into thin, even pieces. Cut across the grain for a tender texture.',
'The thickness can vary, but 1/4 inch (0.5 cm) is standard for sashimi.',

'Arrange the Sashimi:',
'Place the sliced fish on a serving plate. You can use shredded daikon radish, shiso leaves, or lemon slices as a base or garnish to enhance presentation.',

'Serve with Condiments:',
'Serve the sashimi with soy sauce for dipping, a small amount of wasabi, and pickled ginger on the side.',

'Enjoy:',
'Dip the sashimi lightly in soy sauce and pair it with a touch of wasabi if desired. Use the pickled ginger between bites to cleanse your palate.',
'This simple and elegant dish celebrates the freshness of the fish. Enjoy your sashimi! 🍣',
]
},


'Sev Puri':{
ingredients:[
'For Assembly:',
'Puri (crispy flat puris) - 12-15',
'Boiled potatoes - 2 medium-sized (peeled and diced)',
'Onion - 1 (finely chopped)',
'Tomato - 1 (finely chopped)',
'Green chili - 1 (finely chopped, optional)',
'Fresh coriander leaves - 2 tbsp (chopped)',
'Nylon sev - 1/2 cup',
'Chaat masala - 1 tsp',
'Lemon juice - 1 tbsp',

'For the Chutneys:',
'Tamarind chutney - 1/4 cup',
'Green chutney (made with coriander, mint, green chilies, and lime) - 1/4 cup',
],
instructions:[
'Prepare the Toppings:',
'Dice the boiled potatoes and mix them with a pinch of chaat masala and lemon juice. Set aside.',
'Keep all other toppings like chopped onion, tomato, green chili, and coriander ready.',

'Assemble the Sev Puri:',
'Arrange the puris on a large plate or platter.',
'Place a small portion of the spiced potato mixture on each puri.',
'Add a little chopped onion and tomato on top of the potatoes.',

'Add Chutneys:',
'Drizzle tamarind chutney and green chutney over each puri. Adjust the quantity based on your taste for sweetness and spiciness.',

'Garnish:',
'Sprinkle a generous amount of nylon sev over the puris.',
'Add a pinch of chaat masala and chopped coriander leaves for extra flavor.',

'Serve:',
'Serve immediately to enjoy the crunchy and tangy goodness!',
'Sev Puri is a delightful snack bursting with flavors and textures. Enjoy this iconic street food! 😋',
]
},



'Shrimp Tostada Bites':{
ingredients:[
'For the Shrimp:',
'Shrimp (peeled and deveined) - 1 lb',
'Olive oil - 1 tbsp',
'Garlic - 2 cloves (minced)',
'Chili powder - 1 tsp',
'Paprika - 1/2 tsp',
'Lime juice - 1 tbsp',
'Salt and Black pepper - to taste',

'For the Tostada Bites:',
'Mini tostada shells - 12-15',
'Guacamole - 1/2 cup (store-bought or homemade)',
'Pico de gallo - 1/2 cup (chopped tomatoes, onions, cilantro, and lime juice)',
'Cilantro - 1/4 cup (chopped, for garnish)',
'Lime wedges - for serving',
],
instructions:[
'Cook the Shrimp:',
'Heat olive oil in a skillet over medium heat. Add minced garlic and cook for 30 seconds until fragrant.',
'Add the shrimp, chili powder, paprika, lime juice, salt, and pepper. Cook the shrimp for 2-3 minutes per side, or until pink and opaque.',
'Remove from heat and set aside to cool slightly.',

'Prepare the Tostada Bites:',
'Arrange the mini tostada shells on a serving platter.',
'Spoon a small amount of guacamole onto each tostada shell.',

'Assemble the Tostada Bites:',
'Place one shrimp on top of the guacamole on each tostada bite.',
'Add a spoonful of pico de gallo on top of the shrimp for freshness and flavor.',

'Garnish and Serve:',
'Garnish with chopped cilantro and a squeeze of lime juice.',
'Serve immediately and enjoy these crunchy, flavorful shrimp tostada bites!',
'These shrimp tostada bites are perfect for appetizers or a fun party snack! 🌮🍤',
]
},


'Soba':{
ingredients:[
'Soba noodles (buckwheat noodles) - 200g',
'Water - 4-5 cups (for boiling noodles)',

'For the Dipping Sauce (if making cold soba):',
'Soy sauce - 2 tbsp',
'Mirin - 1 tbsp',
'Dashi (or water with a pinch of bonito flakes) - 1 cup',
'Sugar - 1/2 tsp',
'Sake (optional) - 1 tsp',

'Optional Toppings:',
'Chopped green onions - 2 tbsp',
'Sesame seeds - 1 tbsp',
'Wasabi - a small amount',
'Nori (seaweed) - sliced thin',
'Boiled eggs - sliced (optional)',
'Vegetables (such as cucumber, mushrooms, or spinach) - thinly sliced',
],
'instructions':[
'Cook the Soba Noodles:',
'Bring a large pot of water to a boil.',
'Add the soba noodles and cook according to package instructions (usually 5-7 minutes). Stir occasionally to prevent sticking.',
'Once cooked, drain the noodles and rinse under cold running water to remove excess starch, especially if you’re serving them cold.',

'Prepare the Dipping Sauce (for cold soba):',
'In a small saucepan, combine soy sauce, mirin, dashi, sugar, and sake (if using).',
'Bring the mixture to a simmer over medium heat and cook for 2-3 minutes until the sugar dissolves.',
'Let the sauce cool to room temperature before serving.',

'Serve Cold Soba (if preferred):',
'Once the noodles are cooled, arrange them on a serving plate or bowl. Serve with the dipping sauce in a small bowl on the side, along with optional toppings like green onions, sesame seeds, and nori.',

'Serve Hot Soba (if preferred):',
'Instead of dipping sauce, soba can also be served hot in a broth made from dashi, soy sauce, and mirin. Simply heat the broth and serve the cooked soba noodles in the bowl with hot broth and your favorite toppings.',
'Enjoy the healthy, versatile soba noodles, perfect for any season! 🍜',
]
},

'Sopes':{
ingredients:[
'For the Sopes:',
'Corn masa harina - 2 cups',
'Warm water - 1 1/4 cups',
'Salt - 1/2 tsp',
'Vegetable oil - for frying',

'For the Toppings:',
'Refried beans - 1/2 cup (can be black or pinto beans)',
'Shredded lettuce or cabbage - 1 cup',
'Mexican crema - 1/4 cup',
'Salsa - 2-3 tbsp (store-bought or homemade)',
'Queso fresco - 1/4 cup (crumbled)',
'Cilantro - 2 tbsp (chopped, for garnish)',
'Sour cream - optional',
'Lime wedges - for serving',
],
instructions:[
'Prepare the Masa:',
'In a large mixing bowl, combine masa harina, salt, and warm water.',
'Mix well to form a smooth dough. If the dough feels too dry, add a bit more water until it is soft but not sticky.',

'Shape the Sopes:',
'Divide the masa into small portions (about 8-10).',
'Roll each portion into a ball and flatten it into a thick disc (about 1/4 inch thick).',
'Pinch the edges of each disc to form a slight border or rim, which will hold the toppings.',

'Cook the Sopes:',
'Heat a griddle or large skillet over medium heat.',
'Cook each sope on the griddle for about 2-3 minutes per side until lightly golden and cooked through.',
'Once cooked, remove them from the heat and set aside to cool slightly.',

'Fry the Sopes (optional for extra crispness):',
'Heat a small amount of vegetable oil in a pan over medium heat.',
'Fry each sope for about 1-2 minutes on each side, or until they become crispy and golden. Remove from the oil and drain on paper towels.',

'Assemble the Sopes:',
'Spread a layer of refried beans over each sope.',
'Top with shredded lettuce or cabbage, a spoonful of salsa, and a drizzle of Mexican crema.',
'Garnish with crumbled queso fresco, cilantro, and sour cream if desired.',

'Serve:',
'Serve the sopes warm with lime wedges on the side.',
'Enjoy your homemade, crispy, and flavorful sopes! 🌽',
]
},





'Spicy Chicken Taquitos':{
ingredients:[
'For the Filling:',

'Shredded cooked chicken - 2 cups',
'Cream cheese - 1/4 cup (softened)',
'Cheddar cheese - 1/2 cup (shredded)',
'Hot sauce - 2 tbsp (adjust to taste)',
'Chili powder - 1 tsp',
'Cumin powder - 1/2 tsp',
'Garlic powder - 1/2 tsp',
'Salt - to taste',
'Green chilies - 2 tbsp (chopped, optional)',

'For the Taquitos:',
'Corn tortillas - 12-15',
'Vegetable oil - for frying or baking',

'Optional Toppings and Dips:',
'Sour cream',
'Guacamole',
'Salsa',
'Chopped cilantro',
],
instructions:[
'Prepare the Filling:',
'In a mixing bowl, combine shredded chicken, cream cheese, cheddar cheese, hot sauce, chili powder, cumin powder, garlic powder, salt, and green chilies.',
'Mix until all the ingredients are evenly distributed.',

'Prepare the Tortillas:',
'Warm the tortillas in a microwave or skillet for a few seconds to make them pliable and prevent cracking.',

'Assemble the Taquitos:',
'Place a small amount of the chicken filling (about 2 tbsp) on one end of a tortilla.',
'Tightly roll the tortilla around the filling and secure it with a toothpick if needed.',

'Cook the Taquitos:',
'*For Frying:',

'Heat about 1 inch of vegetable oil in a skillet over medium heat.',
'Fry the taquitos in batches until golden brown and crispy (about 2-3 minutes per side). Drain on paper towels.',

'*For Baking:',
'Preheat the oven to 400°F (200°C).',
'Place the rolled taquitos seam-side down on a baking sheet lined with parchment paper.',
'Brush with a little oil and bake for 15-20 minutes, flipping halfway, until crispy.',

'Serve:',
'Serve the spicy chicken taquitos hot with sour cream, guacamole, salsa, and a sprinkle of cilantro.',
'Enjoy these crunchy, spicy delights! 🌶️',
]
},

'Spring Rolls':{
ingredients:[
'For the Filling:',
'Cabbage - 2 cups (shredded)',
'Carrots - 1 cup (julienned)',
'Bell pepper - 1 (thinly sliced)',
'Bean sprouts - 1 cup',
'Green onions - 2 (chopped)',
'Garlic - 2 cloves (minced)',
'Soy sauce - 2 tbsp',
'Sesame oil - 1 tsp',
'Salt and pepper - to taste',
'Oil - 1 tbsp (for stir-frying)',

'For Wrapping:',
'Spring roll wrappers - 10-12 sheets',
'Cornstarch slurry - 2 tbsp cornstarch mixed with 2 tbsp water (for sealing)',

'For Frying:',
'Vegetable oil - for deep frying',
],
instructions:[
'Prepare the Filling:',
'Heat 1 tbsp oil in a wok or skillet over medium-high heat.',
'Add minced garlic and sauté for a few seconds.',
'Add cabbage, carrots, bell pepper, and bean sprouts. Stir-fry for 2-3 minutes.',
'Stir in soy sauce, sesame oil, salt, and pepper. Cook for another minute.',
'Remove from heat, let the filling cool completely.',

'Wrap the Spring Rolls:',
'Lay a spring roll wrapper on a flat surface in a diamond shape.',
'Place a spoonful of the filling near the bottom corner of the wrapper.',
'Fold the bottom corner over the filling, then fold the sides inward.',
'Roll tightly toward the top, sealing the edge with cornstarch slurry. Repeat with remaining wrappers.',

'Fry the Spring Rolls:',
'Heat vegetable oil in a deep pan or wok to 350°F (175°C).',
'Fry the spring rolls in batches until golden brown and crispy, about 2-3 minutes per roll.',
'Remove and drain on paper towels.',

'Serve:',
'Serve hot with dipping sauces like sweet chili sauce, soy sauce, or hoisin sauce.',
'Enjoy your crispy and flavorful spring rolls! 🥢',
]
},


'Sukiyaki':{
ingredients:[
'For the Sauce (Warishita):',

'Soy sauce - 1/2 cup',
'Sugar - 1/4 cup',
'Mirin - 1/4 cup',
'Sake - 1/4 cup',
'Water or dashi broth - 1/2 cup',

'For the Sukiyaki:',
'Thinly sliced beef (ribeye or sirloin) - 300g',
'Shirataki noodles - 1 cup (rinsed and drained)',
'Tofu - 1/2 block (firm, cut into cubes)',
'Napa cabbage - 2 cups (chopped)',
'Green onions - 2 stalks (cut into 2-inch pieces)',
'Enoki mushrooms or shiitake mushrooms - 1 cup',
'Carrot - 1 (sliced into rounds or flowers for decoration, optional)',
'Eggs - 2-4 (optional, for dipping)',
],
instructions:[
'Prepare the Warishita Sauce:',
'In a small saucepan, combine soy sauce, sugar, mirin, sake, and water or dashi broth.',
'Heat over medium heat until the sugar dissolves. Set aside.',

'Prepare the Ingredients:',
'Rinse, drain, and cut all vegetables, tofu, and shirataki noodles into bite-sized pieces. Arrange them on a platter alongside the sliced beef.',

'Cook the Sukiyaki:',
'Heat a sukiyaki pot or deep skillet over medium heat. Add a small amount of oil or beef fat to grease the pan.',
'Sear a few slices of beef lightly, then pour in a portion of the warishita sauce.',
'Gradually add vegetables, tofu, mushrooms, and noodles into the pan, arranging them neatly.',

'Simmer and Serve:',
'Simmer the ingredients in the sauce, adding more warishita as needed.',
'Cook until vegetables are tender, and all ingredients are flavored with the sauce.',

'Optional Egg Dipping:',
'If using, beat raw eggs in individual bowls. Dip hot ingredients into the egg for a silky texture before eating.',
'Enjoy this comforting and communal Japanese hot pot dish! 🍲',
]
},


'Sushi Rolls':{
ingredients:[
'For the Sushi Rice:',
'Sushi rice - 2 cups (short-grain rice)',
'Water - 2 1/2 cups',
'Rice vinegar - 1/4 cup',
'Sugar - 2 tbsp',
'Salt - 1 tsp',

'For the Rolls:',
'Nori sheets - 6-8 (seaweed sheets)',
'Fish or protein - 200g (salmon, tuna, shrimp, or imitation crab)',
'Vegetables - thinly sliced cucumber, avocado, or carrots',
'Soy sauce - for dipping',
'Wasabi - optional',
'Pickled ginger - for serving',

'Optional Garnishes:',
'Sesame seeds',
'Green onions',
],
instructions:[
'Cook the Sushi Rice:',
'Rinse the sushi rice in cold water until the water runs clear.',
'Combine rice and water in a rice cooker or pot and cook until tender.',
'While the rice cooks, mix rice vinegar, sugar, and salt in a small bowl until dissolved.',
'Once the rice is done, transfer it to a large bowl and gently fold in the vinegar mixture. Let it cool to room temperature.',

'Prepare the Rolling Station:',
'Place a bamboo sushi mat (wrapped in plastic wrap for easy cleaning) on a flat surface.',
'Lay a sheet of nori, shiny side down, on the mat.',

'Assemble the Rolls:',
'Spread a thin, even layer of sushi rice over the nori, leaving about 1 inch of space at the top edge. Wet your fingers to prevent sticking.',
'Arrange your choice of fish or protein and vegetables in a line across the middle of the rice.',

'Roll the Sushi:',
'Lift the edge of the bamboo mat closest to you and begin rolling tightly, keeping the filling in place.',
'Press gently as you roll to seal the sushi roll.',

'Slice the Rolls:',
'Use a sharp knife dipped in water to slice the roll into bite-sized pieces (6-8 pieces per roll).',

'Serve:',
'Arrange the sushi rolls on a platter. Serve with soy sauce, wasabi, and pickled ginger on the side.',
'Enjoy making and eating your fresh and delicious sushi rolls! 🍣',

]
},



'Sushi':{
'ingredients':[
'For the Sushi Rice:',

'Sushi rice - 2 cups (short-grain rice)',
'Water - 2 1/2 cups',
'Rice vinegar - 1/4 cup',
'Sugar - 2 tbsp',
'Salt - 1 tsp',

'For Nigiri:',
'Fish - 200g (salmon, tuna, shrimp, or other sushi-grade fish)',
'Wasabi - a small amount (optional)',

'For Maki Rolls:',
'Nori sheets - 6-8 (seaweed sheets)',
'Fillings - thinly sliced cucumber, avocado, imitation crab, or other vegetables/proteins',
'Soy sauce - for dipping',
'Pickled ginger - for serving',

'Optional Garnishes:',
'Sesame seeds',
'Chopped green onions',
],
instructions:[
'1. Prepare Sushi Rice:',
'Rinse sushi rice under cold water until the water runs clear.',
'Cook the rice with water in a rice cooker or pot until tender.',
'In a small saucepan, mix rice vinegar, sugar, and salt over low heat until dissolved.',
'Gently fold the mixture into the cooked rice. Let it cool to room temperature.',

'2. Make Nigiri (Hand-Pressed Sushi):',
'Slice sushi-grade fish into thin, rectangular pieces.',
'Wet your hands and shape small amounts of rice into oblong mounds.',
'Optionally, spread a dab of wasabi on the underside of the fish slices.',
'Press the fish onto the rice mounds.',

'3. Make Maki (Rolls):',
'Place a sheet of nori, shiny side down, on a bamboo sushi mat.',
'Spread a thin layer of rice over the nori, leaving a 1-inch strip at the top edge.',
'Arrange fillings in a line across the middle of the rice.',
'Roll the mat tightly from the bottom, sealing the edge with a little water.',
'Slice into bite-sized pieces using a sharp knife dipped in water.',

'4. Serve:',
'Arrange nigiri and maki on a plate. Garnish with sesame seeds or green onions if desired.',
'Serve with soy sauce, wasabi, and pickled ginger on the side.',
'Enjoy the art and flavor of homemade sushi! 🍣',
]
},

};



if (recipeName && recipeDetails[recipeName]) {
    const recipe = recipeDetails[recipeName];
    
    // Enhanced visibility with more detailed rendering
    recipeDetailsContainer.innerHTML = `
        <div class="recipe-details-header">
            <img src="${recipeImage}" alt="${recipeName}" class="recipe-details-image">
            <h1>${recipeName}</h1>
            <p class="recipe-description">${recipe.description || 'No description available.'}</p>
        </div>
        <div class="recipe-details-content">
            <div class="recipe-ingredients">
                <h2>Ingredients</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-instructions">
                <h2>Instructions</h2>
                <ol>
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;

    // Add additional debugging
    recipeDetailsContainer.style.opacity = '1';
    recipeDetailsContainer.style.visibility = 'visible';
} else {
    recipeDetailsContainer.innerHTML = `
        <div class="recipe-not-found">
            <h2>Recipe Not Found</h2>
            <p>Sorry, the recipe "${recipeName}" could not be found.</p>
        </div>
    `;
    console.error(`No recipe details found for ${recipeName}`);
}
});