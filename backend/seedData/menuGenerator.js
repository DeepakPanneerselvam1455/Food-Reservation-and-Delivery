// Comprehensive Menu Data Generator
// This script generates detailed food items for each category with realistic names, descriptions, and prices

const categories = {
  "Salad": {
    items: [
      // Fresh & Green Salads
      { name: "Mediterranean Greek Salad", description: "Fresh cucumbers, tomatoes, olives, feta cheese, and red onions with olive oil dressing", price: 12.99, image: "greek_salad.jpg" },
      { name: "Caesar Supreme Salad", description: "Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing", price: 11.99, image: "caesar_salad.jpg" },
      { name: "Mixed Garden Fresh Salad", description: "Seasonal mixed greens, cherry tomatoes, cucumber, carrots with balsamic vinaigrette", price: 9.99, image: "garden_salad.jpg" },
      { name: "Quinoa Power Bowl", description: "Nutrient-rich quinoa, roasted vegetables, chickpeas, and tahini dressing", price: 14.99, image: "quinoa_bowl.jpg" },
      { name: "Spinach Strawberry Salad", description: "Baby spinach, fresh strawberries, candied pecans, goat cheese, poppy seed dressing", price: 13.99, image: "spinach_strawberry.jpg" },
      
      // Protein-Rich Salads
      { name: "Grilled Chicken Avocado Salad", description: "Tender grilled chicken, ripe avocado, mixed greens, corn, black beans", price: 16.99, image: "chicken_avocado.jpg" },
      { name: "Salmon Nicoise Salad", description: "Grilled salmon, hard-boiled eggs, green beans, olives, potatoes, anchovies", price: 19.99, image: "salmon_nicoise.jpg" },
      { name: "Tuna Poke Bowl", description: "Fresh tuna, edamame, cucumber, avocado, seaweed, sesame seeds, spicy mayo", price: 18.99, image: "tuna_poke.jpg" },
      { name: "Shrimp and Arugula Salad", description: "Grilled shrimp, peppery arugula, cherry tomatoes, lemon vinaigrette", price: 17.99, image: "shrimp_arugula.jpg" },
      { name: "Steak Tips Salad", description: "Marinated steak tips, mixed greens, blue cheese, tomatoes, red onion", price: 20.99, image: "steak_salad.jpg" },
      
      // International Inspired
      { name: "Asian Sesame Chicken Salad", description: "Crispy chicken, cabbage, mandarin oranges, almonds, sesame ginger dressing", price: 15.99, image: "asian_chicken.jpg" },
      { name: "Mexican Fiesta Bowl", description: "Lettuce, black beans, corn, tomatoes, cheese, avocado, cilantro lime dressing", price: 13.99, image: "mexican_bowl.jpg" },
      { name: "Italian Caprese Salad", description: "Fresh mozzarella, tomatoes, basil leaves, balsamic reduction, olive oil", price: 14.99, image: "caprese.jpg" },
      { name: "Thai Beef Salad", description: "Sliced beef, mixed greens, herbs, peanuts, spicy lime dressing", price: 18.99, image: "thai_beef.jpg" },
      { name: "Middle Eastern Fattoush", description: "Mixed greens, tomatoes, cucumber, radish, sumac, pita chips, lemon dressing", price: 12.99, image: "fattoush.jpg" },
      
      // Seasonal & Gourmet
      { name: "Autumn Harvest Salad", description: "Mixed greens, roasted butternut squash, dried cranberries, pumpkin seeds", price: 14.99, image: "autumn_harvest.jpg" },
      { name: "Spring Mix with Goat Cheese", description: "Spring greens, goat cheese, candied walnuts, pear, honey vinaigrette", price: 13.99, image: "spring_goat_cheese.jpg" },
      { name: "Summer Berry Spinach", description: "Baby spinach, mixed berries, feta, almonds, raspberry vinaigrette", price: 14.99, image: "summer_berry.jpg" },
      { name: "Winter Kale Caesar", description: "Massaged kale, parmesan, croutons, Caesar dressing with lemon zest", price: 12.99, image: "winter_kale.jpg" },
      { name: "Tropical Paradise Salad", description: "Mixed greens, mango, pineapple, coconut, macadamia nuts, passion fruit dressing", price: 15.99, image: "tropical_paradise.jpg" },
      
      // Grain & Seed Based
      { name: "Ancient Grains Bowl", description: "Farro, quinoa, bulgur, roasted vegetables, herbs, lemon tahini dressing", price: 16.99, image: "ancient_grains.jpg" },
      { name: "Chia Seed Power Salad", description: "Mixed greens, chia seeds, avocado, cucumber, sprouts, green goddess dressing", price: 13.99, image: "chia_power.jpg" },
      { name: "Hemp Heart Crunch", description: "Spinach, hemp hearts, sunflower seeds, beets, carrots, apple cider vinaigrette", price: 14.99, image: "hemp_crunch.jpg" },
      { name: "Buckwheat Tabbouleh", description: "Buckwheat, parsley, tomatoes, cucumber, mint, lemon olive oil dressing", price: 11.99, image: "buckwheat_tabbouleh.jpg" },
      { name: "Wild Rice Medley", description: "Wild rice, cranberries, pecans, celery, herbs, maple vinaigrette", price: 13.99, image: "wild_rice_medley.jpg" },
      
      // Vegetarian & Vegan Options
      { name: "Vegan Buddha Bowl", description: "Quinoa, roasted chickpeas, sweet potato, kale, tahini dressing", price: 14.99, image: "vegan_buddha.jpg" },
      { name: "Raw Veggie Power Plate", description: "Raw vegetables, sprouts, seeds, nuts, raw cashew dressing", price: 13.99, image: "raw_veggie.jpg" },
      { name: "Lentil Protein Salad", description: "Green lentils, roasted vegetables, herbs, balsamic vinaigrette", price: 12.99, image: "lentil_protein.jpg" },
      { name: "Hummus Garden Bowl", description: "Mixed greens, various hummus, vegetables, olives, pita chips", price: 13.99, image: "hummus_garden.jpg" },
      { name: "Roasted Beet & Walnut", description: "Roasted beets, candied walnuts, goat cheese, arugula, balsamic glaze", price: 14.99, image: "beet_walnut.jpg" },
      
      // Specialty Salads
      { name: "Cobb Supreme Salad", description: "Mixed greens, bacon, chicken, blue cheese, eggs, tomatoes, avocado", price: 17.99, image: "cobb_supreme.jpg" },
      { name: "Waldorf Chicken Salad", description: "Chicken, apples, grapes, celery, walnuts, mixed greens, creamy dressing", price: 15.99, image: "waldorf_chicken.jpg" },
      { name: "Chef's Special Salad", description: "Ham, turkey, cheese, eggs, tomatoes, cucumber, mixed greens, ranch", price: 16.99, image: "chef_special.jpg" },
      { name: "Antipasto Italian Salad", description: "Salami, pepperoni, mozzarella, olives, peppers, tomatoes, Italian dressing", price: 17.99, image: "antipasto.jpg" },
      { name: "Warm Goat Cheese Salad", description: "Warm goat cheese, mixed greens, caramelized onions, balsamic reduction", price: 15.99, image: "warm_goat_cheese.jpg" },
      
      // Light & Fresh Options
      { name: "Cucumber Mint Refresher", description: "Cucumber, mint, yogurt, dill, lemon, served chilled", price: 9.99, image: "cucumber_mint.jpg" },
      { name: "Watermelon Feta Salad", description: "Fresh watermelon, feta cheese, mint, lime, mixed greens", price: 11.99, image: "watermelon_feta.jpg" },
      { name: "Citrus Avocado Salad", description: "Mixed citrus fruits, avocado, red onion, cilantro, lime dressing", price: 12.99, image: "citrus_avocado.jpg" },
      { name: "Green Goddess Salad", description: "Mixed greens, herbs, green goddess dressing, avocado, cucumber", price: 11.99, image: "green_goddess.jpg" },
      { name: "Light & Crispy Garden", description: "Lettuce, radish, cucumber, sprouts, light vinaigrette", price: 8.99, image: "light_crispy.jpg" },
      
      // Hearty & Filling
      { name: "Loaded Potato Salad Bowl", description: "Roasted potatoes, bacon, cheese, green onions, sour cream, over greens", price: 14.99, image: "loaded_potato.jpg" },
      { name: "Three Bean Power Salad", description: "Kidney, black, and garbanzo beans, vegetables, herbs, vinaigrette", price: 12.99, image: "three_bean.jpg" },
      { name: "Hearty Harvest Bowl", description: "Roasted root vegetables, grains, seeds, nuts, maple tahini dressing", price: 15.99, image: "hearty_harvest.jpg" },
      { name: "Protein Power Plate", description: "Chicken, eggs, chickpeas, cheese, mixed greens, protein dressing", price: 18.99, image: "protein_power.jpg" },
      { name: "Farmers Market Special", description: "Seasonal vegetables, local cheese, herbs, farm fresh dressing", price: 16.99, image: "farmers_market.jpg" },
      
      // Exotic & Unique
      { name: "Dragon Fruit Paradise", description: "Dragon fruit, mixed greens, coconut, lime, tropical dressing", price: 16.99, image: "dragon_fruit.jpg" },
      { name: "Pomegranate Power Bowl", description: "Pomegranate seeds, quinoa, spinach, feta, pistachios, pomegranate vinaigrette", price: 15.99, image: "pomegranate_power.jpg" },
      { name: "Acai Berry Superfood", description: "Acai, mixed berries, granola, coconut, honey, over mixed greens", price: 17.99, image: "acai_superfood.jpg" },
      { name: "Jackfruit Tropical Bowl", description: "Young jackfruit, tropical fruits, coconut, lime, cilantro", price: 15.99, image: "jackfruit_tropical.jpg" },
      { name: "Kimchi Asian Fusion", description: "Fermented kimchi, mixed greens, sesame, seaweed, spicy gochujang dressing", price: 14.99, image: "kimchi_fusion.jpg" },
      
      // Additional Premium Options
      { name: "Truffle Arugula Salad", description: "Arugula, truffle oil, parmesan shavings, pine nuts, lemon", price: 22.99, image: "truffle_arugula.jpg" },
      { name: "Lobster Bisque Salad", description: "Lobster meat, mixed greens, avocado, citrus segments, bisque dressing", price: 26.99, image: "lobster_bisque.jpg" },
      { name: "Caviar Garden Deluxe", description: "Mixed greens, caviar, crème fraîche, chives, lemon zest", price: 29.99, image: "caviar_garden.jpg" },
      { name: "Wagyu Beef Carpaccio", description: "Thin wagyu slices, arugula, capers, parmesan, truffle oil", price: 24.99, image: "wagyu_carpaccio.jpg" },
      { name: "Saffron Quinoa Royal", description: "Saffron-infused quinoa, dried fruits, nuts, herbs, golden dressing", price: 19.99, image: "saffron_quinoa.jpg" }
    ]
  },

  "Rolls": {
    items: [
      // Classic Sushi Rolls
      { name: "California Roll Special", description: "Crab, avocado, cucumber, sesame seeds, wasabi, ginger", price: 8.99, image: "california_roll.jpg" },
      { name: "Spicy Tuna Roll", description: "Fresh tuna, spicy mayo, cucumber, scallions, sesame seeds", price: 10.99, image: "spicy_tuna_roll.jpg" },
      { name: "Salmon Avocado Roll", description: "Fresh salmon, creamy avocado, cucumber, nori seaweed", price: 11.99, image: "salmon_avocado_roll.jpg" },
      { name: "Philadelphia Roll", description: "Salmon, cream cheese, cucumber, sesame seeds", price: 9.99, image: "philadelphia_roll.jpg" },
      { name: "Rainbow Roll", description: "California roll topped with assorted sashimi and avocado", price: 16.99, image: "rainbow_roll.jpg" },
      
      // Specialty Sushi Rolls
      { name: "Dragon Roll Supreme", description: "Shrimp tempura, cucumber, topped with eel and avocado", price: 18.99, image: "dragon_roll.jpg" },
      { name: "Spider Roll Deluxe", description: "Soft shell crab tempura, cucumber, avocado, spicy mayo", price: 15.99, image: "spider_roll.jpg" },
      { name: "Volcano Roll", description: "Cooked shrimp, avocado, topped with spicy baked scallops", price: 17.99, image: "volcano_roll.jpg" },
      { name: "Tiger Roll", description: "Shrimp tempura, cucumber, topped with cooked shrimp", price: 14.99, image: "tiger_roll.jpg" },
      { name: "Caterpillar Roll", description: "Eel, cucumber, topped with avocado slices", price: 16.99, image: "caterpillar_roll.jpg" },
      
      // Spring Rolls & Vietnamese
      { name: "Fresh Vietnamese Spring Rolls", description: "Rice paper, shrimp, lettuce, herbs, rice noodles, peanut sauce", price: 7.99, image: "vietnamese_spring.jpg" },
      { name: "Crispy Vegetable Spring Rolls", description: "Deep-fried rolls with cabbage, carrots, mushrooms, sweet chili sauce", price: 6.99, image: "crispy_veg_spring.jpg" },
      { name: "Pork and Shrimp Fresh Rolls", description: "Rice paper, pork, shrimp, lettuce, herbs, hoisin peanut sauce", price: 8.99, image: "pork_shrimp_fresh.jpg" },
      { name: "Mango Summer Rolls", description: "Fresh mango, cucumber, lettuce, mint, wrapped in rice paper", price: 7.99, image: "mango_summer.jpg" },
      { name: "Grilled Beef Summer Rolls", description: "Marinated grilled beef, herbs, lettuce, rice noodles", price: 9.99, image: "grilled_beef_summer.jpg" },
      
      // Sandwich Rolls & Subs
      { name: "Italian Sub Roll", description: "Salami, ham, pepperoni, provolone, lettuce, tomato, Italian dressing", price: 12.99, image: "italian_sub.jpg" },
      { name: "Philly Cheesesteak Roll", description: "Sliced beef, peppers, onions, melted cheese, hoagie roll", price: 13.99, image: "philly_cheesesteak.jpg" },
      { name: "Meatball Marinara Roll", description: "Italian meatballs, marinara sauce, melted mozzarella", price: 11.99, image: "meatball_marinara.jpg" },
      { name: "Chicken Parmesan Roll", description: "Breaded chicken, marinara, parmesan, mozzarella", price: 12.99, image: "chicken_parm_roll.jpg" },
      { name: "Pastrami Reuben Roll", description: "Pastrami, sauerkraut, Swiss cheese, Russian dressing, rye", price: 13.99, image: "pastrami_reuben.jpg" },
      
      // Wrap & Roll Fusion
      { name: "Buffalo Chicken Wrap Roll", description: "Buffalo chicken, lettuce, tomato, blue cheese, celery", price: 10.99, image: "buffalo_chicken_wrap.jpg" },
      { name: "Caesar Chicken Wrap", description: "Grilled chicken, romaine, parmesan, Caesar dressing", price: 10.99, image: "caesar_chicken_wrap.jpg" },
      { name: "Mediterranean Wrap Roll", description: "Hummus, olives, cucumber, tomato, feta, spinach", price: 9.99, image: "mediterranean_wrap.jpg" },
      { name: "Thai Chicken Lettuce Wrap", description: "Spicy chicken, peanut sauce, lettuce cups, herbs", price: 11.99, image: "thai_chicken_lettuce.jpg" },
      { name: "Veggie Hummus Wrap", description: "Hummus, vegetables, sprouts, avocado, spinach tortilla", price: 8.99, image: "veggie_hummus_wrap.jpg" },
      
      // Egg Rolls & Asian Style
      { name: "Traditional Pork Egg Rolls", description: "Ground pork, cabbage, carrots, mushrooms, crispy fried", price: 7.99, image: "pork_egg_rolls.jpg" },
      { name: "Shrimp and Chive Rolls", description: "Fresh shrimp, Chinese chives, water chestnuts, steamed", price: 9.99, image: "shrimp_chive_rolls.jpg" },
      { name: "Vegetarian Egg Rolls", description: "Mixed vegetables, tofu, mushrooms, ginger, soy sauce", price: 6.99, image: "vegetarian_egg_rolls.jpg" },
      { name: "Chicken and Cabbage Rolls", description: "Minced chicken, napa cabbage, ginger, sesame oil", price: 8.99, image: "chicken_cabbage_rolls.jpg" },
      { name: "BBQ Pork Bao Rolls", description: "Steamed buns filled with sweet BBQ pork", price: 10.99, image: "bbq_pork_bao.jpg" },
      
      // Dessert Rolls
      { name: "Chocolate Hazelnut Roll", description: "Chocolate sponge cake, hazelnut cream, chocolate glaze", price: 6.99, image: "chocolate_hazelnut_roll.jpg" },
      { name: "Strawberry Cream Roll", description: "Vanilla sponge, fresh strawberries, whipped cream", price: 6.99, image: "strawberry_cream_roll.jpg" },
      { name: "Tiramisu Roll Cake", description: "Coffee-soaked sponge, mascarpone cream, cocoa dust", price: 7.99, image: "tiramisu_roll.jpg" },
      { name: "Matcha Green Tea Roll", description: "Matcha sponge cake, sweet red bean paste, green tea cream", price: 7.99, image: "matcha_roll.jpg" },
      { name: "Banana Caramel Roll", description: "Banana cake, caramel filling, caramel drizzle", price: 6.99, image: "banana_caramel_roll.jpg" },
      
      // Specialty International Rolls
      { name: "Turkish Doner Roll", description: "Marinated lamb, vegetables, yogurt sauce, pita bread", price: 14.99, image: "turkish_doner.jpg" },
      { name: "Mexican Taquito Rolls", description: "Crispy rolled tacos with chicken, cheese, salsa, sour cream", price: 9.99, image: "mexican_taquitos.jpg" },
      { name: "Greek Dolmades", description: "Grape leaves stuffed with rice, herbs, pine nuts", price: 8.99, image: "greek_dolmades.jpg" },
      { name: "Indian Kati Roll", description: "Spiced chicken, onions, chutney, wrapped in paratha", price: 10.99, image: "indian_kati.jpg" },
      { name: "Lebanese Shawarma Roll", description: "Marinated beef, vegetables, tahini, wrapped in lavash", price: 12.99, image: "lebanese_shawarma.jpg" },
      
      // Breakfast Rolls
      { name: "Breakfast Burrito Roll", description: "Scrambled eggs, bacon, cheese, potatoes, salsa", price: 8.99, image: "breakfast_burrito.jpg" },
      { name: "Sausage Egg Roll", description: "Breakfast sausage, scrambled eggs, cheese, peppers", price: 7.99, image: "sausage_egg_roll.jpg" },
      { name: "Avocado Toast Roll", description: "Avocado, eggs, tomato, everything bagel seasoning", price: 9.99, image: "avocado_toast_roll.jpg" },
      { name: "Ham and Cheese Croissant", description: "Flaky croissant, ham, Swiss cheese, Dijon mustard", price: 8.99, image: "ham_cheese_croissant.jpg" },
      { name: "Blueberry Danish Roll", description: "Sweet pastry dough, blueberry filling, icing glaze", price: 5.99, image: "blueberry_danish.jpg" },
      
      // Healthy & Light Rolls
      { name: "Quinoa Veggie Roll", description: "Quinoa, roasted vegetables, hummus, spinach wrap", price: 9.99, image: "quinoa_veggie_roll.jpg" },
      { name: "Turkey Avocado Roll", description: "Lean turkey, avocado, sprouts, whole wheat tortilla", price: 10.99, image: "turkey_avocado_roll.jpg" },
      { name: "Salmon Cucumber Roll", description: "Smoked salmon, cucumber, cream cheese, dill, capers", price: 12.99, image: "salmon_cucumber_roll.jpg" },
      { name: "Protein Power Roll", description: "Grilled chicken, quinoa, vegetables, Greek yogurt sauce", price: 11.99, image: "protein_power_roll.jpg" },
      { name: "Green Goddess Roll", description: "Spinach, cucumber, avocado, herbs, green goddess dressing", price: 8.99, image: "green_goddess_roll.jpg" },
      
      // Premium & Gourmet
      { name: "Lobster Roll Deluxe", description: "Fresh lobster meat, mayo, celery, chives, brioche roll", price: 24.99, image: "lobster_roll_deluxe.jpg" },
      { name: "Wagyu Beef Roll", description: "Wagyu beef, truffle aioli, arugula, tomato, ciabatta", price: 22.99, image: "wagyu_beef_roll.jpg" },
      { name: "Caviar and Cream Roll", description: "Smoked salmon, caviar, crème fraîche, chives", price: 19.99, image: "caviar_cream_roll.jpg" },
      { name: "Duck Confit Roll", description: "Duck confit, cherry compote, arugula, brie cheese", price: 18.99, image: "duck_confit_roll.jpg" },
      { name: "Truffle Mushroom Roll", description: "Wild mushrooms, truffle oil, fontina cheese, herbs", price: 16.99, image: "truffle_mushroom_roll.jpg" }
    ]
  },

  "Deserts": {
    items: [
      // Classic Cakes
      { name: "Classic Chocolate Fudge Cake", description: "Rich chocolate cake with dark chocolate fudge frosting and chocolate shavings", price: 6.99, image: "chocolate_fudge_cake.jpg" },
      { name: "New York Cheesecake", description: "Creamy traditional cheesecake with graham cracker crust and berry compote", price: 7.99, image: "ny_cheesecake.jpg" },
      { name: "Red Velvet Layer Cake", description: "Moist red velvet cake with cream cheese frosting and white chocolate curls", price: 6.99, image: "red_velvet_cake.jpg" },
      { name: "Tiramisu Classic", description: "Coffee-soaked ladyfingers layered with mascarpone cream and cocoa powder", price: 8.99, image: "tiramisu_classic.jpg" },
      { name: "Black Forest Cake", description: "Chocolate sponge with cherries, whipped cream, and dark chocolate shavings", price: 7.99, image: "black_forest_cake.jpg" },
      
      // Gourmet Desserts
      { name: "Crème Brûlée Trio", description: "Three flavors: vanilla, lavender, and espresso with caramelized sugar tops", price: 9.99, image: "creme_brulee_trio.jpg" },
      { name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, vanilla ice cream, berry sauce", price: 8.99, image: "chocolate_lava.jpg" },
      { name: "Lemon Tart Supreme", description: "Buttery pastry shell filled with tangy lemon curd and meringue peaks", price: 6.99, image: "lemon_tart.jpg" },
      { name: "Profiterole Tower", description: "Choux pastry filled with vanilla cream, drizzled with chocolate sauce", price: 10.99, image: "profiterole_tower.jpg" },
      { name: "Bananas Foster Flambé", description: "Caramelized bananas in rum sauce, served with vanilla ice cream", price: 11.99, image: "bananas_foster.jpg" },
      
      // Ice Cream & Frozen Treats
      { name: "Artisan Gelato Trio", description: "Three scoops: pistachio, stracciatella, and blood orange gelato", price: 8.99, image: "gelato_trio.jpg" },
      { name: "Premium Ice Cream Sundae", description: "Vanilla ice cream, hot fudge, caramel, whipped cream, cherry, nuts", price: 7.99, image: "ice_cream_sundae.jpg" },
      { name: "Affogato al Caffè", description: "Vanilla gelato 'drowned' in hot espresso with amaretti cookies", price: 6.99, image: "affogato.jpg" },
      { name: "Frozen Yogurt Parfait", description: "Layers of frozen yogurt, granola, fresh berries, and honey drizzle", price: 6.99, image: "frozen_yogurt_parfait.jpg" },
      { name: "Sorbet Medley", description: "Three refreshing sorbets: mango, raspberry, and lemon basil", price: 7.99, image: "sorbet_medley.jpg" },
      
      // Chocolate Specialties
      { name: "Dark Chocolate Mousse", description: "Rich dark chocolate mousse topped with whipped cream and chocolate curls", price: 7.99, image: "chocolate_mousse.jpg" },
      { name: "White Chocolate Raspberry Tart", description: "White chocolate ganache tart with fresh raspberries and gold leaf", price: 8.99, image: "white_choc_raspberry.jpg" },
      { name: "Chocolate Truffle Collection", description: "Assorted handmade chocolate truffles: dark, milk, and white varieties", price: 12.99, image: "truffle_collection.jpg" },
      { name: "Hot Chocolate Soufflé", description: "Light chocolate soufflé served warm with vanilla crème anglaise", price: 9.99, image: "chocolate_souffle.jpg" },
      { name: "Chocolate Fondant", description: "Individual chocolate cake with warm chocolate center and berry compote", price: 8.99, image: "chocolate_fondant.jpg" },
      
      // Fruit-Based Desserts
      { name: "Fresh Berry Tart", description: "Vanilla pastry cream tart topped with seasonal fresh berries", price: 7.99, image: "fresh_berry_tart.jpg" },
      { name: "Peach Cobbler à la Mode", description: "Warm peach cobbler with cinnamon crumble and vanilla ice cream", price: 8.99, image: "peach_cobbler.jpg" },
      { name: "Apple Tarte Tatin", description: "Upside-down apple tart with caramelized apples and puff pastry", price: 7.99, image: "apple_tarte_tatin.jpg" },
      { name: "Strawberry Shortcake", description: "Fresh strawberries and whipped cream on vanilla sponge cake", price: 6.99, image: "strawberry_shortcake.jpg" },
      { name: "Pineapple Upside-Down Cake", description: "Caramelized pineapple cake served warm with coconut ice cream", price: 7.99, image: "pineapple_upside_down.jpg" },
      
      // International Desserts
      { name: "French Macarons Assortment", description: "Six delicate macarons in various flavors: vanilla, chocolate, pistachio", price: 9.99, image: "french_macarons.jpg" },
      { name: "Italian Cannoli Duo", description: "Two crispy shells filled with sweet ricotta, chocolate chips, pistachios", price: 7.99, image: "italian_cannoli.jpg" },
      { name: "Baklava Traditional", description: "Layers of phyllo pastry with honey, nuts, and aromatic spices", price: 6.99, image: "baklava.jpg" },
      { name: "Japanese Mochi Ice Cream", description: "Sweet rice dough wrapped around premium ice cream, assorted flavors", price: 8.99, image: "mochi_ice_cream.jpg" },
      { name: "German Black Forest Trifle", description: "Layers of chocolate cake, cherries, and whipped cream in glass", price: 7.99, image: "black_forest_trifle.jpg" },
      
      // Pastries & Delicate Treats
      { name: "Éclairs au Chocolat", description: "Choux pastry filled with vanilla cream and topped with chocolate glaze", price: 5.99, image: "chocolate_eclairs.jpg" },
      { name: "Napoleon Mille-feuille", description: "Layers of puff pastry with vanilla cream and fondant icing", price: 6.99, image: "napoleon_millefeuille.jpg" },
      { name: "Danish Pastry Selection", description: "Assorted Danish pastries: apple, cheese, and almond varieties", price: 7.99, image: "danish_selection.jpg" },
      { name: "Cream Puffs Deluxe", description: "Light choux pastry filled with vanilla custard and powdered sugar", price: 5.99, image: "cream_puffs.jpg" },
      { name: "Opera Cake Slice", description: "Layers of almond sponge, chocolate ganache, and coffee buttercream", price: 8.99, image: "opera_cake.jpg" },
      
      // Puddings & Custards
      { name: "Bread Pudding with Whiskey Sauce", description: "Warm bread pudding with raisins, served with whiskey caramel sauce", price: 7.99, image: "bread_pudding.jpg" },
      { name: "Panna Cotta Berry Medley", description: "Silky vanilla panna cotta topped with mixed berry coulis", price: 6.99, image: "panna_cotta.jpg" },
      { name: "Rice Pudding Cinnamon", description: "Creamy rice pudding with cinnamon, raisins, and caramel sauce", price: 5.99, image: "rice_pudding.jpg" },
      { name: "Chocolate Pot de Crème", description: "Rich chocolate custard topped with whipped cream and chocolate shavings", price: 6.99, image: "pot_de_creme.jpg" },
      { name: "Flan Caramel Traditional", description: "Classic caramel flan with rich caramel sauce and fresh berries", price: 6.99, image: "flan_caramel.jpg" },
      
      // Modern & Creative Desserts
      { name: "Deconstructed Lemon Meringue", description: "Modern presentation of lemon curd, meringue shards, and shortbread", price: 9.99, image: "deconstructed_lemon.jpg" },
      { name: "Chocolate Sphere Surprise", description: "Chocolate sphere that melts to reveal ice cream and fruit inside", price: 12.99, image: "chocolate_sphere.jpg" },
      { name: "Liquid Nitrogen Ice Cream", description: "Instantly frozen ice cream made tableside with liquid nitrogen", price: 11.99, image: "liquid_nitrogen_ice.jpg" },
      { name: "Edible Garden Dessert", description: "Chocolate 'soil', cookie 'rocks', and sugar 'plants' with ice cream", price: 13.99, image: "edible_garden.jpg" },
      { name: "Levitating Cake", description: "Gravity-defying cake presentation with hidden support structure", price: 15.99, image: "levitating_cake.jpg" },
      
      // Seasonal Specialties
      { name: "Pumpkin Spice Cheesecake", description: "Fall-spiced cheesecake with gingersnap crust and cinnamon whip", price: 7.99, image: "pumpkin_cheesecake.jpg" },
      { name: "Summer Berry Pavlova", description: "Crispy meringue base with fresh berries and vanilla cream", price: 8.99, image: "berry_pavlova.jpg" },
      { name: "Winter Spiced Cake", description: "Warm spice cake with mulled wine reduction and vanilla ice cream", price: 7.99, image: "winter_spiced_cake.jpg" },
      { name: "Spring Lemon Bars", description: "Tangy lemon bars with shortbread crust and powdered sugar", price: 6.99, image: "spring_lemon_bars.jpg" },
      
      // Healthy & Alternative Options
      { name: "Vegan Chocolate Avocado Mousse", description: "Rich chocolate mousse made with avocado and coconut cream", price: 7.99, image: "vegan_choc_mousse.jpg" },
      { name: "Sugar-Free Berry Parfait", description: "Greek yogurt, sugar-free granola, and fresh berries", price: 6.99, image: "sugar_free_parfait.jpg" },
      { name: "Raw Cashew Cheesecake", description: "Raw vegan cheesecake with cashew base and berry topping", price: 8.99, image: "raw_cashew_cheesecake.jpg" },
      { name: "Gluten-Free Flourless Torte", description: "Rich chocolate torte made without flour, topped with berries", price: 7.99, image: "gluten_free_torte.jpg" },
      { name: "Keto Chocolate Fat Bombs", description: "High-fat, low-carb chocolate treats with nuts and coconut", price: 5.99, image: "keto_fat_bombs.jpg" },
      
      // Premium & Luxury
      { name: "Gold Leaf Chocolate Cake", description: "Decadent chocolate cake decorated with edible gold leaf", price: 18.99, image: "gold_leaf_cake.jpg" },
      { name: "Champagne Truffle Tower", description: "Tower of champagne-infused chocolate truffles", price: 16.99, image: "champagne_truffle_tower.jpg" },
      { name: "Caviar and Blini Dessert", description: "Sweet blini with vanilla cream and fruit caviar pearls", price: 14.99, image: "caviar_blini_dessert.jpg" },
      { name: "Saffron Panna Cotta", description: "Luxury panna cotta infused with saffron and rose petals", price: 12.99, image: "saffron_panna_cotta.jpg" },
      { name: "Rare Chocolate Tasting Plate", description: "Selection of rare single-origin chocolate with tasting notes", price: 19.99, image: "rare_chocolate_tasting.jpg" }
    ]
  },

  "Sandwich": {
    items: [
      // Classic Sandwiches
      { name: "Club Sandwich Supreme", description: "Turkey, bacon, ham, lettuce, tomato, mayo on toasted bread", price: 12.99, image: "club_sandwich.jpg" },
      { name: "BLT Classic", description: "Crispy bacon, fresh lettuce, ripe tomatoes, mayo on sourdough toast", price: 9.99, image: "blt_classic.jpg" },
      { name: "Grilled Cheese Deluxe", description: "Three cheese blend melted between buttery grilled sourdough", price: 8.99, image: "grilled_cheese.jpg" },
      { name: "Tuna Salad Sandwich", description: "House-made tuna salad with celery, onions, lettuce on whole wheat", price: 10.99, image: "tuna_salad.jpg" },
      { name: "Egg Salad Traditional", description: "Fresh egg salad with herbs, lettuce, tomato on multigrain bread", price: 9.99, image: "egg_salad.jpg" },
      
      // Gourmet Hot Sandwiches
      { name: "Reuben Pastrami Special", description: "Pastrami, sauerkraut, Swiss cheese, Russian dressing on rye", price: 14.99, image: "pastrami_reuben.jpg" },
      { name: "Philly Cheesesteak Original", description: "Sliced ribeye, peppers, onions, provolone on hoagie roll", price: 13.99, image: "philly_cheesesteak.jpg" },
      { name: "French Dip au Jus", description: "Roast beef, Swiss cheese, French bread with au jus dipping sauce", price: 13.99, image: "french_dip.jpg" },
      { name: "Meatball Marinara Sub", description: "Italian meatballs, marinara sauce, melted mozzarella", price: 12.99, image: "meatball_sub.jpg" },
      { name: "Chicken Parmesan Hero", description: "Breaded chicken, marinara, parmesan, mozzarella on Italian roll", price: 13.99, image: "chicken_parm_hero.jpg" },
      
      // Gourmet Cold Cuts
      { name: "Italian Combo Supremo", description: "Salami, pepperoni, capicola, provolone, lettuce, tomato, Italian dressing", price: 14.99, image: "italian_combo.jpg" },
      { name: "Turkey Avocado Club", description: "Roasted turkey, avocado, bacon, lettuce, tomato, herb mayo", price: 12.99, image: "turkey_avocado_club.jpg" },
      { name: "Roast Beef Horseradish", description: "Slow-roasted beef, horseradish cream, lettuce, tomato, onion", price: 13.99, image: "roast_beef_horseradish.jpg" },
      { name: "Ham and Swiss Classic", description: "Premium ham, Swiss cheese, lettuce, tomato, Dijon mustard", price: 11.99, image: "ham_swiss.jpg" },
      { name: "Corned Beef Special", description: "House-cured corned beef, mustard, pickles on marble rye", price: 13.99, image: "corned_beef.jpg" },
      
      // International Specialties
      { name: "Banh Mi Vietnamese", description: "Pork, pâté, pickled vegetables, cilantro, mayo on French baguette", price: 11.99, image: "banh_mi.jpg" },
      { name: "Cubano Traditional", description: "Roast pork, ham, Swiss, pickles, mustard, pressed on Cuban bread", price: 12.99, image: "cubano.jpg" },
      { name: "Gyro Pita Special", description: "Seasoned lamb, tzatziki, tomato, onion, lettuce in pita bread", price: 11.99, image: "gyro_pita.jpg" },
      { name: "Croque Monsieur", description: "Ham and Gruyère with béchamel sauce, grilled golden brown", price: 13.99, image: "croque_monsieur.jpg" },
      { name: "Torta Mexicana", description: "Carnitas, black beans, avocado, lettuce, tomato, chipotle mayo", price: 12.99, image: "torta_mexicana.jpg" },
      
      // Vegetarian Options
      { name: "Caprese Mozzarella", description: "Fresh mozzarella, tomatoes, basil, balsamic glaze on ciabatta", price: 11.99, image: "caprese_sandwich.jpg" },
      { name: "Grilled Vegetable Panini", description: "Zucchini, peppers, eggplant, goat cheese, pesto, pressed", price: 11.99, image: "grilled_veggie_panini.jpg" },
      { name: "Hummus Garden Wrap", description: "Hummus, cucumber, sprouts, tomato, avocado in spinach tortilla", price: 9.99, image: "hummus_garden.jpg" },
      { name: "Avocado Toast Gourmet", description: "Smashed avocado, tomato, sprouts, everything seasoning on sourdough", price: 10.99, image: "avocado_toast.jpg" },
      { name: "Mushroom Swiss Melt", description: "Sautéed mushrooms, Swiss cheese, caramelized onions on sourdough", price: 10.99, image: "mushroom_swiss.jpg" },
      
      // Breakfast Sandwiches
      { name: "Breakfast Sandwich Classic", description: "Scrambled eggs, bacon, cheese on English muffin", price: 7.99, image: "breakfast_classic.jpg" },
      { name: "Sausage Egg McMuffin Style", description: "Sausage patty, egg, cheese on toasted English muffin", price: 7.99, image: "sausage_egg_muffin.jpg" },
      { name: "Bagel with Lox", description: "Everything bagel, smoked salmon, cream cheese, capers, onion", price: 14.99, image: "bagel_lox.jpg" },
      { name: "French Toast Sandwich", description: "Ham and cheese between French toast slices with maple syrup", price: 9.99, image: "french_toast_sandwich.jpg" },
      { name: "Croissant Breakfast", description: "Flaky croissant with scrambled eggs, ham, and Swiss cheese", price: 8.99, image: "croissant_breakfast.jpg" },
      
      // Paninis & Pressed
      { name: "Chicken Pesto Panini", description: "Grilled chicken, pesto, mozzarella, tomato, pressed on focaccia", price: 12.99, image: "chicken_pesto_panini.jpg" },
      { name: "Turkey Cranberry Panini", description: "Turkey, cranberry sauce, brie cheese, spinach, pressed", price: 12.99, image: "turkey_cranberry_panini.jpg" },
      { name: "Prosciutto Fig Panini", description: "Prosciutto, fig jam, goat cheese, arugula on ciabatta", price: 15.99, image: "prosciutto_fig.jpg" },
      { name: "Apple Brie Panini", description: "Sliced apples, brie cheese, honey, walnuts, pressed", price: 11.99, image: "apple_brie_panini.jpg" },
      { name: "Salmon Avocado Panini", description: "Smoked salmon, avocado, cream cheese, capers, dill", price: 15.99, image: "salmon_avocado_panini.jpg" },
      
      // Wraps & Light Options
      { name: "Caesar Wrap", description: "Grilled chicken, romaine, parmesan, Caesar dressing in tortilla", price: 10.99, image: "caesar_wrap.jpg" },
      { name: "Buffalo Chicken Wrap", description: "Buffalo chicken, lettuce, tomato, blue cheese, celery", price: 11.99, image: "buffalo_chicken_wrap.jpg" },
      { name: "Tuna Avocado Wrap", description: "Tuna salad, avocado, lettuce, tomato in whole wheat wrap", price: 10.99, image: "tuna_avocado_wrap.jpg" },
      { name: "Turkey Club Wrap", description: "Turkey, bacon, lettuce, tomato, mayo in flour tortilla", price: 11.99, image: "turkey_club_wrap.jpg" },
      { name: "Veggie Rainbow Wrap", description: "Colorful vegetables, hummus, sprouts in spinach tortilla", price: 9.99, image: "veggie_rainbow_wrap.jpg" },
      
      // Specialty Artisan
      { name: "Lobster Roll New England", description: "Fresh lobster meat, celery, mayo, chives on brioche roll", price: 24.99, image: "lobster_roll.jpg" },
      { name: "Prime Rib French Dip", description: "Slow-roasted prime rib, horseradish, au jus on French bread", price: 18.99, image: "prime_rib_dip.jpg" },
      { name: "Duck Confit Sandwich", description: "Duck confit, cherry compote, arugula, brie on artisan bread", price: 19.99, image: "duck_confit_sandwich.jpg" },
      { name: "Wagyu Beef Sliders", description: "Three mini wagyu burgers with truffle aioli and microgreens", price: 22.99, image: "wagyu_sliders.jpg" },
      { name: "Foie Gras Burger", description: "Beef patty topped with foie gras, caramelized onions, brioche", price: 26.99, image: "foie_gras_burger.jpg" },
      
      // Healthy & Diet-Friendly
      { name: "Protein Power Wrap", description: "Grilled chicken, quinoa, vegetables, Greek yogurt sauce", price: 12.99, image: "protein_power_wrap.jpg" },
      { name: "Keto-Friendly Lettuce Wrap", description: "Turkey, bacon, avocado, cheese wrapped in butter lettuce", price: 11.99, image: "keto_lettuce_wrap.jpg" },
      { name: "Quinoa Veggie Burger", description: "Quinoa patty, avocado, sprouts, tomato on whole grain bun", price: 11.99, image: "quinoa_veggie_burger.jpg" },
      { name: "Gluten-Free Club", description: "Turkey, bacon, lettuce, tomato on gluten-free bread", price: 13.99, image: "gluten_free_club.jpg" },
      { name: "Paleo Chicken Salad", description: "Chicken salad with almonds, grapes in coconut wraps", price: 12.99, image: "paleo_chicken_salad.jpg" },
      
      // Unique & Creative
      { name: "Mac and Cheese Grilled", description: "Creamy mac and cheese between grilled cheese sandwich", price: 11.99, image: "mac_cheese_grilled.jpg" },
      { name: "Donut Fried Chicken", description: "Fried chicken breast served on a glazed donut bun", price: 13.99, image: "donut_fried_chicken.jpg" },
      { name: "Waffle Ice Cream Sandwich", description: "Vanilla ice cream between two Belgian waffle halves", price: 8.99, image: "waffle_ice_cream.jpg" },
      { name: "Pizza Sandwich", description: "Pizza sauce, pepperoni, mozzarella pressed between garlic bread", price: 10.99, image: "pizza_sandwich.jpg" },
      { name: "Sushi Sandwich", description: "Sushi ingredients layered in pressed rice 'bread' form", price: 16.99, image: "sushi_sandwich.jpg" },
      
      // Regional Specialties
      { name: "Po' Boy Shrimp", description: "Fried shrimp, lettuce, tomato, remoulade sauce on French bread", price: 14.99, image: "shrimp_po_boy.jpg" },
      { name: "Chicago Italian Beef", description: "Thinly sliced beef, peppers, Italian seasoning, jus", price: 13.99, image: "chicago_italian_beef.jpg" },
      { name: "New York Pastrami", description: "Hand-sliced pastrami, mustard, pickles on marble rye", price: 15.99, image: "ny_pastrami.jpg" },
      { name: "Texas BBQ Brisket", description: "Smoked brisket, coleslaw, BBQ sauce on Texas toast", price: 16.99, image: "texas_brisket.jpg" },
      { name: "California Turkey Avocado", description: "Turkey, avocado, sprouts, tomato, ranch on sourdough", price: 12.99, image: "california_turkey.jpg" }
    ]
  },

  "Cake": {
    items: [
      // Layer Cakes
      { name: "Triple Chocolate Layer Cake", description: "Rich chocolate cake with chocolate ganache and chocolate buttercream", price: 24.99, image: "triple_chocolate_layer.jpg" },
      { name: "Red Velvet Southern Style", description: "Traditional red velvet with cream cheese frosting and pecans", price: 22.99, image: "red_velvet_southern.jpg" },
      { name: "Vanilla Bean Birthday Cake", description: "Classic vanilla cake with vanilla buttercream and rainbow sprinkles", price: 20.99, image: "vanilla_birthday.jpg" },
      { name: "Lemon Raspberry Layer", description: "Lemon cake with raspberry filling and lemon cream cheese frosting", price: 23.99, image: "lemon_raspberry_layer.jpg" },
      { name: "Carrot Cake Supreme", description: "Spiced carrot cake with walnuts, cream cheese frosting, candied carrots", price: 22.99, image: "carrot_cake_supreme.jpg" },
      
      // Cheesecakes
      { name: "New York Style Cheesecake", description: "Classic dense cheesecake with graham cracker crust and berry topping", price: 25.99, image: "ny_cheesecake.jpg" },
      { name: "Chocolate Marble Cheesecake", description: "Vanilla and chocolate swirled cheesecake with chocolate crust", price: 26.99, image: "chocolate_marble_cheesecake.jpg" },
      { name: "Strawberry Swirl Cheesecake", description: "Vanilla cheesecake with fresh strawberry swirl and strawberry sauce", price: 24.99, image: "strawberry_swirl_cheesecake.jpg" },
      { name: "Salted Caramel Cheesecake", description: "Caramel cheesecake with sea salt caramel drizzle and pretzel crust", price: 27.99, image: "salted_caramel_cheesecake.jpg" },
      { name: "Key Lime Cheesecake", description: "Tart key lime cheesecake with graham crust and lime zest", price: 25.99, image: "key_lime_cheesecake.jpg" },
      
      // Specialty Cakes
      { name: "German Black Forest", description: "Chocolate sponge with cherries, whipped cream, and chocolate shavings", price: 28.99, image: "german_black_forest.jpg" },
      { name: "Italian Tiramisu Cake", description: "Coffee-soaked sponge layers with mascarpone and cocoa dust", price: 26.99, image: "tiramisu_cake.jpg" },
      { name: "French Opera Cake", description: "Almond sponge layers with chocolate ganache and coffee buttercream", price: 29.99, image: "french_opera.jpg" },
      { name: "English Trifle Cake", description: "Sponge cake layered with custard, fruit, and whipped cream", price: 24.99, image: "english_trifle_cake.jpg" },
      { name: "American Funfetti", description: "Vanilla cake with colorful sprinkles and vanilla buttercream", price: 21.99, image: "american_funfetti.jpg" },
      
      // Fruit Cakes
      { name: "Fresh Strawberry Shortcake", description: "Light sponge with fresh strawberries and whipped cream", price: 23.99, image: "strawberry_shortcake.jpg" },
      { name: "Pineapple Upside-Down", description: "Caramelized pineapple cake with brown butter glaze", price: 22.99, image: "pineapple_upside_down.jpg" },
      { name: "Peach Cobbler Cake", description: "Peach cake with cinnamon crumble topping and vanilla glaze", price: 23.99, image: "peach_cobbler_cake.jpg" },
      { name: "Blueberry Lemon Cake", description: "Lemon cake studded with fresh blueberries and lemon glaze", price: 24.99, image: "blueberry_lemon.jpg" },
      { name: "Apple Cinnamon Spice", description: "Spiced apple cake with cinnamon buttercream and caramel drizzle", price: 22.99, image: "apple_cinnamon_spice.jpg" },
      
      // Chocolate Specialties
      { name: "Dark Chocolate Ganache Cake", description: "Rich dark chocolate cake with silky dark chocolate ganache", price: 27.99, image: "dark_chocolate_ganache.jpg" },
      { name: "Milk Chocolate Mousse Cake", description: "Chocolate cake with milk chocolate mousse and chocolate curls", price: 26.99, image: "milk_chocolate_mousse.jpg" },
      { name: "White Chocolate Raspberry", description: "White chocolate cake with raspberry filling and white chocolate frosting", price: 28.99, image: "white_chocolate_raspberry.jpg" },
      { name: "Mocha Espresso Cake", description: "Coffee-chocolate cake with espresso buttercream and chocolate beans", price: 25.99, image: "mocha_espresso.jpg" },
      { name: "Chocolate Peanut Butter", description: "Chocolate cake with peanut butter frosting and chocolate ganache", price: 26.99, image: "chocolate_peanut_butter.jpg" },
      
      // Seasonal Cakes
      { name: "Pumpkin Spice Layer Cake", description: "Spiced pumpkin cake with cream cheese frosting and cinnamon", price: 23.99, image: "pumpkin_spice_layer.jpg" },
      { name: "Eggnog Holiday Cake", description: "Eggnog-flavored cake with nutmeg buttercream and gold dust", price: 26.99, image: "eggnog_holiday.jpg" },
      { name: "Summer Berry Medley", description: "Vanilla cake with mixed berry compote and berry buttercream", price: 25.99, image: "summer_berry_medley.jpg" },
      { name: "Spring Lemon Coconut", description: "Lemon cake with coconut flakes and lemon cream filling", price: 24.99, image: "spring_lemon_coconut.jpg" },
      { name: "Winter Spiced Rum", description: "Spiced cake with rum buttercream and candied orange peel", price: 27.99, image: "winter_spiced_rum.jpg" },
      
      // Wedding & Special Occasion
      { name: "Elegant Wedding Cake", description: "Multi-tiered vanilla and chocolate with buttercream roses", price: 89.99, image: "elegant_wedding.jpg" },
      { name: "Anniversary Gold Leaf", description: "Champagne cake with gold buttercream and edible gold leaf", price: 45.99, image: "anniversary_gold.jpg" },
      { name: "Birthday Surprise Cake", description: "Rainbow layers with surprise filling and colorful decorations", price: 32.99, image: "birthday_surprise.jpg" },
      { name: "Graduation Cap Cake", description: "Chocolate cake shaped and decorated like a graduation cap", price: 28.99, image: "graduation_cap.jpg" },
      { name: "Baby Shower Pink/Blue", description: "Gender reveal cake with pink or blue surprise inside", price: 26.99, image: "baby_shower.jpg" },
      
      // International Styles
      { name: "Japanese Matcha Cake", description: "Green tea cake with sweet red bean paste and matcha buttercream", price: 29.99, image: "japanese_matcha.jpg" },
      { name: "French Mille-feuille Cake", description: "Layers of puff pastry with vanilla cream and fondant icing", price: 31.99, image: "french_millefeuille.jpg" },
      { name: "Mexican Tres Leches", description: "Sponge cake soaked in three types of milk with cinnamon", price: 23.99, image: "mexican_tres_leches.jpg" },
      { name: "British Victoria Sponge", description: "Light sponge with jam filling and dusting of powdered sugar", price: 21.99, image: "british_victoria.jpg" },
      { name: "Brazilian Brigadeiro Cake", description: "Chocolate cake covered in chocolate brigadeiro balls", price: 26.99, image: "brazilian_brigadeiro.jpg" },
      
      // Mini & Individual Cakes
      { name: "Cupcake Tower Assortment", description: "24 assorted cupcakes in various flavors and decorations", price: 36.99, image: "cupcake_tower.jpg" },
      { name: "Individual Molten Lava Cakes", description: "Six personal chocolate cakes with molten chocolate centers", price: 18.99, image: "individual_molten.jpg" },
      { name: "Petit Four Collection", description: "Assorted bite-sized cakes with decorative icing", price: 24.99, image: "petit_four_collection.jpg" },
      { name: "Mini Cheesecake Variety", description: "Twelve mini cheesecakes in six different flavors", price: 28.99, image: "mini_cheesecake_variety.jpg" },
      { name: "Personal Birthday Cakes", description: "Set of 6 individual birthday cakes with candles", price: 22.99, image: "personal_birthday.jpg" },
      
      // Healthy & Alternative
      { name: "Sugar-Free Chocolate Cake", description: "Diabetic-friendly chocolate cake with sugar substitute frosting", price: 24.99, image: "sugar_free_chocolate.jpg" },
      { name: "Gluten-Free Vanilla Cake", description: "Celiac-safe vanilla cake with gluten-free flour blend", price: 26.99, image: "gluten_free_vanilla.jpg" },
      { name: "Vegan Rainbow Cake", description: "Plant-based colorful cake with dairy-free buttercream", price: 28.99, image: "vegan_rainbow.jpg" },
      { name: "Keto Chocolate Cake", description: "Low-carb chocolate cake with almond flour and sugar substitute", price: 29.99, image: "keto_chocolate.jpg" },
      { name: "Raw Vegan Carrot Cake", description: "Uncooked carrot cake with cashew cream frosting", price: 31.99, image: "raw_vegan_carrot.jpg" },
      
      // Premium Luxury Cakes
      { name: "Gold Leaf Opera Supreme", description: "French opera cake decorated with 24-karat edible gold leaf", price: 59.99, image: "gold_leaf_opera.jpg" },
      { name: "Champagne Truffle Cake", description: "Champagne-infused cake with chocolate truffle decoration", price: 49.99, image: "champagne_truffle.jpg" },
      { name: "Saffron Rose Cake", description: "Persian-inspired cake with saffron and rose water flavoring", price: 45.99, image: "saffron_rose.jpg" },
      { name: "Caviar Surprise Cake", description: "Unique cake with fruit caviar pearls and champagne cream", price: 55.99, image: "caviar_surprise.jpg" },
      { name: "Truffle Oil Chocolate Cake", description: "Gourmet chocolate cake with truffle oil infusion", price: 52.99, image: "truffle_oil_chocolate.jpg" },
      
      // Regional & Cultural
      { name: "Southern Hummingbird Cake", description: "Banana pineapple spice cake with cream cheese frosting", price: 24.99, image: "southern_hummingbird.jpg" },
      { name: "New York Crumb Cake", description: "Coffee cake with extra thick cinnamon crumb topping", price: 22.99, image: "ny_crumb_cake.jpg" },
      { name: "Texas Sheet Cake", description: "Large chocolate cake with warm chocolate pecan frosting", price: 26.99, image: "texas_sheet_cake.jpg" },
      { name: "Boston Cream Cake", description: "Yellow cake with pastry cream and chocolate glaze", price: 25.99, image: "boston_cream.jpg" },
      { name: "California Avocado Cake", description: "Unique green cake made with fresh avocados", price: 27.99, image: "california_avocado.jpg" }
    ]
  },

  "Pure Veg": {
    items: [
      // Indian Vegetarian Curries
      { name: "Paneer Butter Masala", description: "Soft cottage cheese cubes in rich tomato cream sauce with aromatic spices", price: 14.99, image: "paneer_butter_masala.jpg" },
      { name: "Dal Tadka Special", description: "Yellow lentils tempered with cumin, garlic, and fresh cilantro", price: 11.99, image: "dal_tadka.jpg" },
      { name: "Palak Paneer Traditional", description: "Fresh spinach curry with paneer cubes and authentic Indian spices", price: 13.99, image: "palak_paneer.jpg" },
      { name: "Chana Masala Punjabi", description: "Chickpeas cooked in spicy tomato-onion gravy with garam masala", price: 12.99, image: "chana_masala.jpg" },
      { name: "Aloo Gobi Masala", description: "Cauliflower and potatoes with turmeric, cumin, and coriander", price: 11.99, image: "aloo_gobi.jpg" },
      
      // Asian Vegetarian Dishes
      { name: "Mapo Tofu Szechuan", description: "Silky tofu in spicy Szechuan sauce with garlic and scallions", price: 12.99, image: "mapo_tofu.jpg" },
      { name: "Buddhist Delight", description: "Mixed vegetables and tofu in savory brown sauce", price: 13.99, image: "buddhist_delight.jpg" },
      { name: "General Tso's Cauliflower", description: "Crispy cauliflower in sweet and tangy General Tso's sauce", price: 13.99, image: "general_tso_cauliflower.jpg" },
      { name: "Thai Green Curry Vegetables", description: "Seasonal vegetables in coconut green curry with Thai basil", price: 14.99, image: "thai_green_curry_veg.jpg" },
      { name: "Pad Thai Vegetables", description: "Stir-fried rice noodles with vegetables, tofu, and tamarind sauce", price: 13.99, image: "pad_thai_vegetables.jpg" },
      
      // Mediterranean Vegetarian
      { name: "Ratatouille Provencal", description: "Traditional French vegetable stew with eggplant, zucchini, and herbs", price: 15.99, image: "ratatouille.jpg" },
      { name: "Stuffed Bell Peppers", description: "Bell peppers filled with quinoa, vegetables, and Mediterranean herbs", price: 14.99, image: "stuffed_bell_peppers.jpg" },
      { name: "Greek Moussaka Vegetarian", description: "Layers of eggplant, lentils, and béchamel sauce", price: 16.99, image: "vegetarian_moussaka.jpg" },
      { name: "Caprese Stuffed Portobello", description: "Grilled portobello mushrooms with mozzarella, tomato, and basil", price: 15.99, image: "caprese_portobello.jpg" },
      { name: "Mediterranean Vegetable Couscous", description: "Fluffy couscous with roasted vegetables and harissa sauce", price: 14.99, image: "mediterranean_couscous.jpg" },
      
      // Mexican Vegetarian
      { name: "Black Bean Enchiladas", description: "Corn tortillas filled with black beans, topped with enchilada sauce", price: 13.99, image: "black_bean_enchiladas.jpg" },
      { name: "Vegetarian Fajitas Platter", description: "Sizzling bell peppers and onions with guacamole and salsa", price: 15.99, image: "vegetarian_fajitas.jpg" },
      { name: "Sweet Potato Quesadillas", description: "Roasted sweet potato with cheese and caramelized onions", price: 12.99, image: "sweet_potato_quesadillas.jpg" },
      { name: "Quinoa Stuffed Poblanos", description: "Poblano peppers stuffed with quinoa, corn, and black beans", price: 16.99, image: "quinoa_stuffed_poblanos.jpg" },
      { name: "Mushroom and Spinach Tacos", description: "Soft tacos with sautéed mushrooms, spinach, and avocado crema", price: 11.99, image: "mushroom_spinach_tacos.jpg" },
      
      // Italian Vegetarian
      { name: "Eggplant Parmigiana", description: "Layered eggplant with marinara sauce and melted mozzarella", price: 16.99, image: "eggplant_parmigiana.jpg" },
      { name: "Mushroom Risotto Creamy", description: "Arborio rice with mixed mushrooms, parmesan, and white wine", price: 17.99, image: "mushroom_risotto.jpg" },
      { name: "Margherita Pizza Napoletana", description: "Thin crust pizza with San Marzano tomatoes, mozzarella, and basil", price: 14.99, image: "margherita_pizza.jpg" },
      { name: "Pasta Primavera", description: "Seasonal vegetables tossed with pasta in light cream or olive oil", price: 15.99, image: "pasta_primavera.jpg" },
      { name: "Spinach and Ricotta Cannelloni", description: "Pasta tubes filled with spinach and ricotta in tomato sauce", price: 16.99, image: "spinach_ricotta_cannelloni.jpg" },
      
      // Protein-Rich Vegetarian
      { name: "Lentil Walnut Loaf", description: "Hearty loaf made with lentils, walnuts, and vegetables", price: 15.99, image: "lentil_walnut_loaf.jpg" },
      { name: "Quinoa Power Bowl", description: "Quinoa with roasted vegetables, chickpeas, and tahini dressing", price: 14.99, image: "quinoa_power_bowl.jpg" },
      { name: "Black Bean Burgers", description: "House-made black bean patties with sweet potato fries", price: 13.99, image: "black_bean_burgers.jpg" },
      { name: "Chickpea Curry Madras", description: "Spicy chickpea curry with coconut milk and curry leaves", price: 12.99, image: "chickpea_curry.jpg" },
      { name: "Tempeh Stir Fry", description: "Marinated tempeh with vegetables in savory sauce", price: 14.99, image: "tempeh_stir_fry.jpg" },
      
      // Comfort Food Vegetarian
      { name: "Vegetarian Shepherd's Pie", description: "Lentils and vegetables topped with creamy mashed potatoes", price: 15.99, image: "vegetarian_shepherds_pie.jpg" },
      { name: "Mushroom Stroganoff", description: "Creamy mushroom sauce over egg noodles with herbs", price: 14.99, image: "mushroom_stroganoff.jpg" },
      { name: "Cauliflower Mac and Cheese", description: "Roasted cauliflower in creamy cheese sauce with breadcrumbs", price: 13.99, image: "cauliflower_mac_cheese.jpg" },
      { name: "Vegetable Pot Pie", description: "Mixed vegetables in savory gravy with flaky pastry crust", price: 16.99, image: "vegetable_pot_pie.jpg" },
      { name: "Stuffed Acorn Squash", description: "Roasted acorn squash filled with wild rice and cranberries", price: 17.99, image: "stuffed_acorn_squash.jpg" },
      
      // International Fusion
      { name: "Korean Kimchi Fried Rice", description: "Spicy fermented cabbage fried rice with vegetables and sesame", price: 13.99, image: "kimchi_fried_rice.jpg" },
      { name: "Moroccan Vegetable Tagine", description: "Slow-cooked vegetables with apricots and Moroccan spices", price: 16.99, image: "moroccan_tagine.jpg" },
      { name: "Ethiopian Vegetable Combo", description: "Assorted vegetable curries served with injera bread", price: 18.99, image: "ethiopian_vegetable_combo.jpg" },
      { name: "Japanese Vegetable Tempura", description: "Lightly battered and fried seasonal vegetables with dipping sauce", price: 15.99, image: "vegetable_tempura.jpg" },
      { name: "Turkish Stuffed Eggplant", description: "Imam Bayildi - eggplant stuffed with onions, garlic, and tomatoes", price: 16.99, image: "turkish_stuffed_eggplant.jpg" },
      
      // Raw & Light Options
      { name: "Raw Zucchini Noodles", description: "Spiralized zucchini with raw marinara and cashew parmesan", price: 14.99, image: "raw_zucchini_noodles.jpg" },
      { name: "Living Foods Plate", description: "Assorted raw vegetables, sprouts, and fermented foods", price: 16.99, image: "living_foods_plate.jpg" },
      { name: "Dehydrated Vegetable Chips", description: "Crispy vegetable chips made without oil or frying", price: 8.99, image: "dehydrated_veggie_chips.jpg" },
      { name: "Green Smoothie Bowl", description: "Thick green smoothie topped with fruits, nuts, and seeds", price: 11.99, image: "green_smoothie_bowl.jpg" },
      { name: "Raw Cashew Cheese Plate", description: "House-made cashew cheeses with vegetables and crackers", price: 17.99, image: "raw_cashew_cheese.jpg" },
      
      // Seasonal Vegetarian
      { name: "Autumn Root Vegetable Medley", description: "Roasted seasonal root vegetables with herbs and balsamic", price: 14.99, image: "autumn_root_vegetables.jpg" },
      { name: "Summer Vegetable Ratatouille", description: "Fresh summer vegetables stewed in their own juices", price: 13.99, image: "summer_ratatouille.jpg" },
      { name: "Spring Asparagus Risotto", description: "Creamy risotto with fresh asparagus and lemon zest", price: 16.99, image: "spring_asparagus_risotto.jpg" },
      { name: "Winter Squash Curry", description: "Butternut squash curry with coconut milk and warming spices", price: 14.99, image: "winter_squash_curry.jpg" },
      
      // Grilled & Barbecue Style
      { name: "Grilled Vegetable Platter", description: "Assorted grilled vegetables with herb oil and balsamic reduction", price: 15.99, image: "grilled_vegetable_platter.jpg" },
      { name: "BBQ Jackfruit Sandwiches", description: "Young jackfruit in BBQ sauce served on brioche buns", price: 13.99, image: "bbq_jackfruit.jpg" },
      { name: "Portobello Mushroom Steaks", description: "Marinated and grilled portobello caps with chimichurri", price: 16.99, image: "portobello_steaks.jpg" },
      { name: "Cauliflower Steaks", description: "Thick-cut cauliflower steaks with tahini sauce and herbs", price: 14.99, image: "cauliflower_steaks.jpg" },
      { name: "Grilled Halloumi Salad", description: "Grilled halloumi cheese with mixed greens and pomegranate", price: 15.99, image: "grilled_halloumi_salad.jpg" },
      
      // Breakfast/Brunch Vegetarian
      { name: "Vegetarian Benedict", description: "Poached eggs on grilled tomato with hollandaise sauce", price: 12.99, image: "vegetarian_benedict.jpg" },
      { name: "Avocado Toast Deluxe", description: "Smashed avocado on sourdough with microgreens and seeds", price: 10.99, image: "avocado_toast_deluxe.jpg" },
      { name: "Vegetable Frittata", description: "Baked egg dish with seasonal vegetables and fresh herbs", price: 11.99, image: "vegetable_frittata.jpg" },
      { name: "Quinoa Breakfast Bowl", description: "Warm quinoa with fruits, nuts, and coconut milk", price: 10.99, image: "quinoa_breakfast_bowl.jpg" },
      { name: "Vegetarian Hash Browns", description: "Crispy potato hash with peppers, onions, and herbs", price: 9.99, image: "vegetarian_hash.jpg" },
      
      // Vegan Specialties
      { name: "Vegan Pad Thai", description: "Rice noodles with vegetables and tofu in tamarind sauce", price: 14.99, image: "vegan_pad_thai.jpg" },
      { name: "Cashew Cream Pasta", description: "Pasta in rich cashew cream sauce with nutritional yeast", price: 15.99, image: "cashew_cream_pasta.jpg" },
      { name: "Jackfruit Carnitas Tacos", description: "Seasoned jackfruit in corn tortillas with avocado", price: 13.99, image: "jackfruit_carnitas.jpg" },
      { name: "Coconut Curry Vegetables", description: "Mixed vegetables in spicy coconut curry sauce", price: 14.99, image: "coconut_curry_vegetables.jpg" },
      { name: "Almond Milk Risotto", description: "Creamy risotto made with almond milk and nutritional yeast", price: 16.99, image: "almond_milk_risotto.jpg" }
    ]
  },

  "Pasta": {
    items: [
      // Classic Italian Pasta
      { name: "Spaghetti Carbonara Traditional", description: "Al dente spaghetti with eggs, pancetta, parmesan, and black pepper", price: 16.99, image: "spaghetti_carbonara.jpg" },
      { name: "Fettuccine Alfredo Supreme", description: "Fresh fettuccine in rich butter, cream, and parmesan sauce", price: 15.99, image: "fettuccine_alfredo.jpg" },
      { name: "Penne Arrabbiata Spicy", description: "Penne pasta in spicy tomato sauce with garlic and red chilies", price: 14.99, image: "penne_arrabbiata.jpg" },
      { name: "Linguine alle Vongole", description: "Linguine with fresh clams in white wine and garlic sauce", price: 21.99, image: "linguine_vongole.jpg" },
      { name: "Spaghetti Bolognese Authentic", description: "Traditional meat sauce with tomatoes, wine, and aromatic herbs", price: 17.99, image: "spaghetti_bolognese.jpg" },
      
      // Seafood Pasta
      { name: "Lobster Ravioli in Cream Sauce", description: "House-made ravioli stuffed with lobster in saffron cream", price: 28.99, image: "lobster_ravioli.jpg" },
      { name: "Shrimp Scampi Linguine", description: "Succulent shrimp in garlic, white wine, and lemon butter", price: 22.99, image: "shrimp_scampi.jpg" },
      { name: "Seafood Fra Diavolo", description: "Mixed seafood in spicy tomato sauce over linguine", price: 26.99, image: "seafood_fra_diavolo.jpg" },
      { name: "Salmon Penne with Dill", description: "Fresh salmon chunks with dill cream sauce over penne", price: 20.99, image: "salmon_penne.jpg" },
      { name: "Crab and Spinach Fettuccine", description: "Lump crab meat with spinach in white wine cream sauce", price: 24.99, image: "crab_spinach_fettuccine.jpg" },
      
      // Chicken Pasta
      { name: "Chicken Parmigiana Pasta", description: "Breaded chicken breast over pasta with marinara and mozzarella", price: 19.99, image: "chicken_parm_pasta.jpg" },
      { name: "Chicken Piccata Linguine", description: "Tender chicken in lemon caper sauce over fresh linguine", price: 18.99, image: "chicken_piccata.jpg" },
      { name: "Cajun Chicken Penne", description: "Blackened chicken with peppers in spicy cream sauce", price: 17.99, image: "cajun_chicken_penne.jpg" },
      { name: "Chicken Marsala Fettuccine", description: "Chicken in rich Marsala wine sauce with mushrooms", price: 19.99, image: "chicken_marsala_fettuccine.jpg" },
      { name: "Buffalo Chicken Mac and Cheese", description: "Spicy buffalo chicken in creamy cheese sauce over pasta", price: 16.99, image: "buffalo_chicken_mac.jpg" },
      
      // Vegetarian Pasta
      { name: "Mushroom Truffle Pappardelle", description: "Wide pasta with wild mushrooms and truffle oil", price: 22.99, image: "mushroom_truffle_pappardelle.jpg" },
      { name: "Eggplant Parmigiana Pasta", description: "Layered eggplant with marinara and mozzarella over pasta", price: 16.99, image: "eggplant_parm_pasta.jpg" },
      { name: "Spinach and Ricotta Cannelloni", description: "Large pasta tubes filled with spinach and ricotta", price: 17.99, image: "spinach_ricotta_cannelloni.jpg" },
      { name: "Roasted Vegetable Penne", description: "Seasonal roasted vegetables in olive oil and herbs", price: 15.99, image: "roasted_veggie_penne.jpg" },
      { name: "Four Cheese Lasagna", description: "Layers of pasta with four Italian cheeses and herbs", price: 18.99, image: "four_cheese_lasagna.jpg" },
      
      // Stuffed Pasta
      { name: "Beef and Ricotta Ravioli", description: "House-made ravioli with beef and ricotta in tomato sauce", price: 19.99, image: "beef_ricotta_ravioli.jpg" },
      { name: "Butternut Squash Tortellini", description: "Delicate tortellini filled with roasted butternut squash", price: 17.99, image: "butternut_tortellini.jpg" },
      { name: "Three Cheese Agnolotti", description: "Small stuffed pasta with three cheese blend in butter sauce", price: 20.99, image: "three_cheese_agnolotti.jpg" },
      { name: "Wild Mushroom Cappelletti", description: "Hat-shaped pasta filled with wild mushroom mixture", price: 21.99, image: "mushroom_cappelletti.jpg" },
      { name: "Prosciutto and Sage Ravioli", description: "Ravioli with prosciutto filling in brown butter sage sauce", price: 22.99, image: "prosciutto_sage_ravioli.jpg" },
      
      // Baked Pasta Dishes
      { name: "Classic Meat Lasagna", description: "Layers of pasta, meat sauce, ricotta, and mozzarella", price: 19.99, image: "classic_meat_lasagna.jpg" },
      { name: "Baked Ziti with Sausage", description: "Ziti pasta baked with Italian sausage and three cheeses", price: 17.99, image: "baked_ziti_sausage.jpg" },
      { name: "Eggplant Rollatini", description: "Sliced eggplant rolled with ricotta and baked in sauce", price: 18.99, image: "eggplant_rollatini.jpg" },
      { name: "Stuffed Shells Florentine", description: "Large shells filled with spinach and ricotta", price: 16.99, image: "stuffed_shells.jpg" },
      { name: "Manicotti alla Parmigiana", description: "Large pasta tubes stuffed with cheese and baked", price: 17.99, image: "manicotti_parmigiana.jpg" },
      
      // Gourmet & Specialty
      { name: "Duck Ragu Pappardelle", description: "Slow-braised duck ragu over wide ribbon pasta", price: 26.99, image: "duck_ragu_pappardelle.jpg" },
      { name: "Osso Buco Rigatoni", description: "Braised veal shank sauce over tube-shaped pasta", price: 28.99, image: "osso_buco_rigatoni.jpg" },
      { name: "Short Rib Bolognese", description: "Rich short rib sauce slow-cooked with wine and herbs", price: 24.99, image: "short_rib_bolognese.jpg" },
      { name: "Wagyu Beef Ragu", description: "Premium wagyu beef ragu over fresh pappardelle", price: 32.99, image: "wagyu_ragu.jpg" },
      { name: "Black Truffle Fettuccine", description: "Fresh pasta with black truffle shavings and cream", price: 35.99, image: "black_truffle_fettuccine.jpg" },
      
      // Light & Healthy
      { name: "Zucchini Noodle Primavera", description: "Spiralized zucchini with fresh vegetables and herbs", price: 14.99, image: "zucchini_noodle_primavera.jpg" },
      { name: "Whole Wheat Penne Pomodoro", description: "Whole grain pasta with fresh tomato and basil sauce", price: 13.99, image: "whole_wheat_pomodoro.jpg" },
      { name: "Gluten-Free Pasta Marinara", description: "Rice-based pasta with traditional marinara sauce", price: 15.99, image: "gluten_free_marinara.jpg" },
      { name: "Quinoa Pasta with Pesto", description: "High-protein quinoa pasta with basil pesto sauce", price: 16.99, image: "quinoa_pesto_pasta.jpg" },
      { name: "Shirataki Noodle Stir Fry", description: "Low-carb shirataki noodles with vegetables", price: 12.99, image: "shirataki_stir_fry.jpg" },
      
      // Cream-Based Sauces
      { name: "Tortellini in Vodka Sauce", description: "Cheese tortellini in tomato vodka cream sauce", price: 18.99, image: "tortellini_vodka_sauce.jpg" },
      { name: "Gnocchi Gorgonzola", description: "Potato dumplings in creamy gorgonzola cheese sauce", price: 17.99, image: "gnocchi_gorgonzola.jpg" },
      { name: "Penne à la Vodka", description: "Penne pasta in pink vodka cream sauce with herbs", price: 16.99, image: "penne_vodka.jpg" },
      { name: "Rigatoni with Sausage Cream", description: "Tube pasta with Italian sausage in cream sauce", price: 18.99, image: "rigatoni_sausage_cream.jpg" },
      { name: "Fettuccine Primavera", description: "Fresh vegetables in light cream sauce over fettuccine", price: 15.99, image: "fettuccine_primavera.jpg" },
      
      // International Fusion
      { name: "Thai Curry Pasta", description: "Pasta noodles in coconut curry sauce with vegetables", price: 16.99, image: "thai_curry_pasta.jpg" },
      { name: "Mexican Mac and Cheese", description: "Pasta with jalapeños, chorizo, and pepper jack cheese", price: 15.99, image: "mexican_mac_cheese.jpg" },
      { name: "Japanese Ramen Carbonara", description: "Ramen noodles prepared carbonara style with eggs", price: 14.99, image: "ramen_carbonara.jpg" },
      { name: "Korean Kimchi Pasta", description: "Pasta with fermented kimchi and spicy Korean flavors", price: 15.99, image: "kimchi_pasta.jpg" },
      { name: "Indian Curry Penne", description: "Penne pasta in aromatic Indian curry sauce", price: 16.99, image: "indian_curry_penne.jpg" },
      
      // Cold Pasta Salads
      { name: "Mediterranean Pasta Salad", description: "Cold pasta with olives, tomatoes, feta, and herbs", price: 12.99, image: "mediterranean_pasta_salad.jpg" },
      { name: "Italian Antipasto Pasta", description: "Cold pasta with salami, cheese, peppers, and Italian dressing", price: 14.99, image: "antipasto_pasta.jpg" },
      { name: "Greek Pasta Salad", description: "Pasta with cucumber, olives, feta, and lemon dressing", price: 13.99, image: "greek_pasta_salad.jpg" },
      { name: "Caprese Pasta Salad", description: "Cold pasta with mozzarella, tomatoes, and basil", price: 13.99, image: "caprese_pasta_salad.jpg" },
      { name: "Summer Vegetable Pasta Salad", description: "Cold pasta with fresh summer vegetables and vinaigrette", price: 12.99, image: "summer_veggie_pasta_salad.jpg" },
      
      // Soup & Broth Based
      { name: "Italian Wedding Soup", description: "Small pasta with meatballs and vegetables in broth", price: 11.99, image: "italian_wedding_soup.jpg" },
      { name: "Pasta e Fagioli", description: "Traditional Italian pasta and bean soup", price: 10.99, image: "pasta_fagioli.jpg" },
      { name: "Tortellini en Brodo", description: "Cheese tortellini floating in rich chicken broth", price: 12.99, image: "tortellini_brodo.jpg" },
      { name: "Minestrone with Pasta", description: "Vegetable soup with small pasta and Italian herbs", price: 10.99, image: "minestrone_pasta.jpg" },
      { name: "Chicken Noodle Soup", description: "Classic comfort soup with egg noodles and chicken", price: 11.99, image: "chicken_noodle_soup.jpg" },
      
      // Premium & Luxury
      { name: "Caviar Linguine", description: "Fresh linguine topped with premium caviar and crème fraîche", price: 45.99, image: "caviar_linguine.jpg" },
      { name: "Gold Leaf Carbonara", description: "Traditional carbonara finished with edible gold leaf", price: 35.99, image: "gold_leaf_carbonara.jpg" },
      { name: "White Truffle Risotto", description: "Creamy risotto with shaved white truffle", price: 42.99, image: "white_truffle_risotto.jpg" },
      { name: "Kobe Beef Ragu", description: "Japanese Kobe beef slow-cooked into rich pasta sauce", price: 48.99, image: "kobe_beef_ragu.jpg" },
      { name: "Saffron Lobster Linguine", description: "Lobster linguine in saffron-infused cream sauce", price: 39.99, image: "saffron_lobster_linguine.jpg" }
    ]
  },

  "Noodles": {
    items: [
      // Asian Soup Noodles
      { name: "Tonkotsu Ramen Authentic", description: "Rich pork bone broth with fresh ramen noodles, chashu pork, and soft-boiled egg", price: 16.99, image: "tonkotsu_ramen.jpg" },
      { name: "Miso Ramen Classic", description: "Fermented soybean paste broth with corn, green onions, and bamboo shoots", price: 15.99, image: "miso_ramen.jpg" },
      { name: "Shoyu Ramen Traditional", description: "Light soy sauce-based broth with chicken, menma, and nori", price: 15.99, image: "shoyu_ramen.jpg" },
      { name: "Spicy Tantanmen", description: "Japanese-style spicy sesame and chili oil ramen with ground pork", price: 17.99, image: "spicy_tantanmen.jpg" },
      { name: "Vegetarian Miso Ramen", description: "Plant-based miso broth with tofu, vegetables, and sesame seeds", price: 14.99, image: "vegetarian_miso_ramen.jpg" },
      
      // Vietnamese Pho
      { name: "Pho Bo Beef Special", description: "Traditional beef pho with rice noodles, herbs, and bean sprouts", price: 14.99, image: "pho_bo_beef.jpg" },
      { name: "Pho Ga Chicken", description: "Clear chicken broth with rice noodles and tender chicken", price: 13.99, image: "pho_ga_chicken.jpg" },
      { name: "Pho Tai Rare Beef", description: "Thin slices of rare beef cooked in hot broth over rice noodles", price: 15.99, image: "pho_tai.jpg" },
      { name: "Vegetarian Pho", description: "Vegetable broth with tofu, mushrooms, and fresh herbs", price: 12.99, image: "vegetarian_pho.jpg" },
      { name: "Seafood Pho Special", description: "Clear broth with shrimp, scallops, and fish balls", price: 17.99, image: "seafood_pho.jpg" },
      
      // Thai Noodle Dishes
      { name: "Pad Thai Original", description: "Stir-fried rice noodles with shrimp, tofu, bean sprouts, and tamarind", price: 14.99, image: "pad_thai_original.jpg" },
      { name: "Pad See Ew", description: "Wide rice noodles with Chinese broccoli and sweet soy sauce", price: 13.99, image: "pad_see_ew.jpg" },
      { name: "Drunken Noodles (Pad Kee Mao)", description: "Spicy wide rice noodles with basil and chili", price: 14.99, image: "drunken_noodles.jpg" },
      { name: "Tom Yum Noodle Soup", description: "Spicy and sour soup with rice noodles and shrimp", price: 15.99, image: "tom_yum_noodles.jpg" },
      { name: "Pad Woon Sen", description: "Glass noodles stir-fried with vegetables and protein", price: 13.99, image: "pad_woon_sen.jpg" },
      
      // Chinese Noodles
      { name: "Lo Mein Combination", description: "Soft egg noodles stir-fried with mixed vegetables and protein", price: 13.99, image: "lo_mein_combo.jpg" },
      { name: "Chow Mein Crispy", description: "Crispy fried noodles with vegetables and savory sauce", price: 12.99, image: "chow_mein_crispy.jpg" },
      { name: "Dan Dan Noodles", description: "Szechuan noodles with spicy sesame sauce and ground pork", price: 14.99, image: "dan_dan_noodles.jpg" },
      { name: "Beef Noodle Soup", description: "Rich beef broth with hand-pulled noodles and tender beef", price: 16.99, image: "beef_noodle_soup.jpg" },
      { name: "Cold Sesame Noodles", description: "Chilled noodles with creamy sesame sauce and cucumber", price: 11.99, image: "cold_sesame_noodles.jpg" },
      
      // Korean Noodle Dishes
      { name: "Naengmyeon Cold Noodles", description: "Buckwheat noodles in cold broth with pickled vegetables", price: 14.99, image: "naengmyeon.jpg" },
      { name: "Japchae Sweet Potato Noodles", description: "Glass noodles stir-fried with vegetables and sesame oil", price: 13.99, image: "japchae.jpg" },
      { name: "Kimchi Ramen", description: "Spicy ramen with fermented kimchi and pork belly", price: 15.99, image: "kimchi_ramen.jpg" },
      { name: "Korean Jajangmyeon", description: "Noodles in black bean sauce with onions and pork", price: 14.99, image: "jajangmyeon.jpg" },
      { name: "Bibim Naengmyeon", description: "Cold mixed noodles with spicy gochujang sauce", price: 13.99, image: "bibim_naengmyeon.jpg" },
      
      // Italian Style Noodles
      { name: "Asian Fusion Carbonara", description: "Ramen noodles prepared carbonara style with bacon and egg", price: 15.99, image: "asian_carbonara.jpg" },
      { name: "Garlic Butter Udon", description: "Thick Japanese udon noodles in garlic butter sauce", price: 12.99, image: "garlic_butter_udon.jpg" },
      { name: "Truffle Oil Ramen", description: "Ramen noodles with truffle oil and mushrooms", price: 19.99, image: "truffle_oil_ramen.jpg" },
      { name: "Cheese Ramen", description: "Creamy cheese-based ramen with corn and scallions", price: 14.99, image: "cheese_ramen.jpg" },
      { name: "Pesto Udon", description: "Japanese udon noodles with Italian basil pesto", price: 13.99, image: "pesto_udon.jpg" },
      
      // Stir-Fried Noodles
      { name: "Singapore Rice Noodles", description: "Thin rice noodles with curry powder, shrimp, and BBQ pork", price: 15.99, image: "singapore_rice_noodles.jpg" },
      { name: "Beef Chow Fun", description: "Wide rice noodles stir-fried with beef and bean sprouts", price: 14.99, image: "beef_chow_fun.jpg" },
      { name: "Chicken Yakisoba", description: "Japanese wheat noodles stir-fried with chicken and vegetables", price: 13.99, image: "chicken_yakisoba.jpg" },
      { name: "Seafood Pad Thai", description: "Rice noodles with mixed seafood and traditional pad Thai sauce", price: 17.99, image: "seafood_pad_thai.jpg" },
      { name: "Vegetable Chow Mein", description: "Mixed vegetables stir-fried with soft wheat noodles", price: 11.99, image: "vegetable_chow_mein.jpg" },
      
      // Hot Pot & Spicy Noodles
      { name: "Szechuan Spicy Noodles", description: "Hand-pulled noodles in fiery Szechuan chili oil", price: 14.99, image: "szechuan_spicy_noodles.jpg" },
      { name: "Korean Fire Noodles", description: "Ultra-spicy instant noodles with cheese and vegetables", price: 12.99, image: "korean_fire_noodles.jpg" },
      { name: "Malatang Personal Hot Pot", description: "Choose your noodles and ingredients for personal spicy broth", price: 16.99, image: "malatang_hot_pot.jpg" },
      { name: "Volcano Ramen", description: "Extremely spicy ramen with ghost pepper and habanero", price: 18.99, image: "volcano_ramen.jpg" },
      { name: "Thai Spicy Boat Noodles", description: "Intensely flavored beef noodle soup with herbs", price: 15.99, image: "thai_boat_noodles.jpg" },
      
      // Cold & Refreshing
      { name: "Vietnamese Bun Bo Hue", description: "Spicy beef noodle soup from Central Vietnam", price: 15.99, image: "bun_bo_hue.jpg" },
      { name: "Cold Szechuan Noodles", description: "Chilled noodles with numbing Szechuan peppercorns", price: 13.99, image: "cold_szechuan_noodles.jpg" },
      { name: "Japanese Hiyashi Chuka", description: "Cold ramen with colorful toppings and sesame dressing", price: 14.99, image: "hiyashi_chuka.jpg" },
      { name: "Korean Mul Naengmyeon", description: "Ice-cold buckwheat noodles in refreshing broth", price: 13.99, image: "mul_naengmyeon.jpg" },
      { name: "Thai Glass Noodle Salad", description: "Cold glass noodles with lime, chili, and herbs", price: 12.99, image: "thai_glass_noodle_salad.jpg" },
      
      // Fusion & Creative
      { name: "Ramen Burger", description: "Beef patty between compressed ramen noodle 'buns'", price: 16.99, image: "ramen_burger.jpg" },
      { name: "Noodle Tacos", description: "Soft tacos filled with Asian-style noodles and vegetables", price: 13.99, image: "noodle_tacos.jpg" },
      { name: "Pizza Noodles", description: "Noodles with pizza sauce, mozzarella, and pepperoni", price: 14.99, image: "pizza_noodles.jpg" },
      { name: "Breakfast Ramen", description: "Ramen with soft-boiled egg, bacon, and hash browns", price: 15.99, image: "breakfast_ramen.jpg" },
      { name: "Dessert Noodles", description: "Sweet noodles with coconut milk, fruits, and ice cream", price: 11.99, image: "dessert_noodles.jpg" },
      
      // Healthy & Light Options
      { name: "Zucchini Noodle Pho", description: "Low-carb zucchini noodles in traditional pho broth", price: 13.99, image: "zucchini_pho.jpg" },
      { name: "Shirataki Ramen Bowl", description: "Zero-calorie shirataki noodles in miso broth", price: 11.99, image: "shirataki_ramen.jpg" },
      { name: "Kelp Noodle Pad Thai", description: "Sea vegetable noodles with traditional pad Thai flavors", price: 14.99, image: "kelp_noodle_pad_thai.jpg" },
      { name: "Quinoa Noodle Soup", description: "High-protein quinoa noodles in clear vegetable broth", price: 12.99, image: "quinoa_noodle_soup.jpg" },
      { name: "Brown Rice Noodle Bowl", description: "Whole grain brown rice noodles with steamed vegetables", price: 11.99, image: "brown_rice_noodles.jpg" },
      
      // Premium & Gourmet
      { name: "Wagyu Beef Ramen", description: "Premium wagyu beef in rich tonkotsu broth", price: 28.99, image: "wagyu_beef_ramen.jpg" },
      { name: "Lobster Miso Ramen", description: "Fresh lobster meat in luxurious miso broth", price: 26.99, image: "lobster_miso_ramen.jpg" },
      { name: "Truffle Udon", description: "Udon noodles with shaved black truffle and cream sauce", price: 24.99, image: "truffle_udon.jpg" },
      { name: "A5 Wagyu Pho", description: "Vietnamese pho with premium A5 wagyu beef slices", price: 32.99, image: "wagyu_pho.jpg" },
      { name: "Caviar Ramen", description: "Delicate ramen topped with premium caviar", price: 35.99, image: "caviar_ramen.jpg" },
      
      // Regional Specialties
      { name: "Lanzhou Beef Noodles", description: "Hand-pulled noodles in clear beef broth from Northwest China", price: 15.99, image: "lanzhou_beef_noodles.jpg" },
      { name: "Bun Rieu Crab Noodles", description: "Vietnamese crab and tomato noodle soup", price: 16.99, image: "bun_rieu.jpg" },
      { name: "Mazesoba Brothless Ramen", description: "Tokyo-style ramen without broth, mixed with sauce", price: 16.99, image: "mazesoba.jpg" },
      { name: "Khao Soi Northern Thai", description: "Coconut curry noodle soup with crispy noodle topping", price: 15.99, image: "khao_soi.jpg" },
      { name: "Laksa Malaysian Style", description: "Spicy coconut milk noodle soup with prawns", price: 16.99, image: "malaysian_laksa.jpg" }
    ]
  }
};

// Generate comprehensive menu items for each category
export function generateMenuItems() {
  const menuItems = [];
  
  Object.keys(categories).forEach(categoryName => {
    const categoryItems = categories[categoryName].items;
    
    categoryItems.forEach((item, index) => {
      menuItems.push({
        name: item.name,
        description: item.description,
        price: item.price,
        category: categoryName,
        image: item.image,
        id: `${categoryName.toLowerCase()}_${index + 1}`
      });
    });
  });
  
  return menuItems;
}

// Export the menu data
export default categories;
