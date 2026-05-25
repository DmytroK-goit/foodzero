import starters from "../../img/menu/starters.png";
import mainDish from "../../img/menu/main.png";
import drinks from "../../img/menu/drinks.png";

export const menu = [
  {
    id: 1,
    coast: "20",
    name: "Deep Sea Snow White Cod Fillet",
    desc: "Delicate cod fillet prepared with citrus butter sauce and seasonal herbs.",

    about:
      "Premium deep sea white cod prepared using gentle pan-searing techniques to preserve natural texture and flavor. Finished with citrus butter sauce and seasonal herbs, served with roasted vegetables for a balanced gourmet experience.",

    calories: 420,
    protein: "38g",
    fat: "18g",
    carbs: "14g",

    cookTime: "25 min",
    serving: "350g",

    taste: ["Light", "Fresh", "Citrus", "Buttery"],

    ingredients: ["White cod fillet", "Lemon butter sauce", "Seasonal vegetables", "Olive oil", "Fresh herbs"],

    allergens: ["Fish", "Dairy"],

    img: mainDish,
    cat: "mains",
  },

  {
    id: 2,
    coast: "22",
    name: "Steak With Rosemary Butter",
    desc: "Juicy grilled steak with aromatic rosemary butter and sea salt.",

    about:
      "High-quality beef steak grilled over open flame to achieve perfect caramelization. Topped with rosemary-infused butter for rich aroma and deep flavor, served with roasted vegetables.",

    calories: 680,
    protein: "52g",
    fat: "44g",
    carbs: "10g",

    cookTime: "30 min",
    serving: "400g",

    taste: ["Rich", "Smoky", "Savory", "Buttery"],

    ingredients: ["Beef steak", "Rosemary butter", "Sea salt", "Garlic", "Roasted vegetables"],

    allergens: ["Dairy"],

    img: mainDish,
    cat: "mains",
  },

  {
    id: 3,
    coast: "18",
    name: "Cucumber Salad",
    desc: "Fresh cucumber salad with herbs and lemon dressing.",

    about:
      "Light refreshing salad made from fresh cucumbers, garden greens, and citrus dressing. Designed as a palate cleanser and perfect starter for any meal.",

    calories: 180,
    protein: "4g",
    fat: "10g",
    carbs: "14g",

    cookTime: "10 min",
    serving: "200g",

    taste: ["Fresh", "Light", "Crisp"],

    ingredients: ["Cucumber", "Lemon dressing", "Olive oil", "Fresh dill", "Mixed greens"],

    allergens: [],

    img: starters,
    cat: "starters",
  },

  {
    id: 4,
    coast: "90",
    name: "Natural Wine Pairing",
    desc: "Curated natural wine selection for perfect food pairing.",

    about: "A curated selection of premium natural wines chosen to enhance aroma, texture, and balance of your dining experience.",

    calories: 250,
    protein: "0g",
    fat: "0g",
    carbs: "6g",

    cookTime: "—",
    serving: "150ml",

    taste: ["Aromatic", "Dry", "Elegant"],

    ingredients: ["Natural grapes", "Fermentation cultures"],

    allergens: ["Sulfites"],

    img: drinks,
    cat: "drinks",
  },

  /* STARTERS */
  {
    id: 5,
    coast: "20",
    name: "Grilled Okra and Tomatoes",
    desc: "Charred okra and tomatoes with herbs and olive oil.",

    about:
      "Mediterranean-inspired dish with grilled okra and ripe tomatoes, enhanced with olive oil and fresh herbs for a smoky and vibrant flavor profile.",

    calories: 210,
    protein: "5g",
    fat: "12g",
    carbs: "18g",

    cookTime: "15 min",
    serving: "220g",

    taste: ["Smoky", "Fresh", "Earthy"],

    ingredients: ["Okra", "Tomatoes", "Olive oil", "Herbs"],

    allergens: [],

    img: starters,
    cat: "starters",
  },

  {
    id: 6,
    coast: "18",
    name: "Cucumber Salad",
    desc: "Crisp cucumber slices with citrus dressing.",

    about: "Refreshing cucumber salad with dill, greens, and citrus dressing, perfect as a light starter.",

    calories: 160,
    protein: "3g",
    fat: "9g",
    carbs: "12g",

    cookTime: "10 min",
    serving: "200g",

    taste: ["Crisp", "Fresh", "Light"],

    ingredients: ["Cucumber", "Dill", "Lemon", "Olive oil"],

    allergens: [],

    img: starters,
    cat: "starters",
  },

  {
    id: 7,
    coast: "12",
    name: "Basil Pancakes",
    desc: "Soft savory pancakes with basil and spices.",

    about: "Soft herb-infused pancakes with basil and spices, served warm with creamy topping for a balanced savory flavor.",

    calories: 300,
    protein: "8g",
    fat: "14g",
    carbs: "32g",

    cookTime: "20 min",
    serving: "250g",

    taste: ["Herbal", "Soft", "Warm"],

    ingredients: ["Flour", "Basil", "Eggs", "Cream"],

    allergens: ["Gluten", "Eggs", "Dairy"],

    img: starters,
    cat: "starters",
  },

  /* MAINS */
  {
    id: 8,
    coast: "20",
    name: "Deep Sea Snow White Cod Fillet",
    desc: "Cod fillet with citrus butter and vegetables.",

    about: "Signature cod dish with delicate texture, citrus butter glaze, and seasonal vegetables prepared with precision and elegance.",

    calories: 410,
    protein: "36g",
    fat: "17g",
    carbs: "13g",

    cookTime: "25 min",
    serving: "350g",

    taste: ["Light", "Elegant", "Citrus"],

    ingredients: ["Cod", "Butter", "Lemon", "Vegetables"],

    allergens: ["Fish", "Dairy"],

    img: mainDish,
    cat: "mains",
  },

  {
    id: 9,
    coast: "22",
    name: "Steak With Rosemary Butter",
    desc: "Grilled steak with rosemary butter.",

    about: "Juicy steak grilled over open flame and enriched with rosemary butter for deep aroma and flavor.",

    calories: 700,
    protein: "54g",
    fat: "46g",
    carbs: "8g",

    cookTime: "30 min",
    serving: "400g",

    taste: ["Rich", "Smoky", "Bold"],

    ingredients: ["Beef", "Rosemary", "Butter", "Salt"],

    allergens: ["Dairy"],

    img: mainDish,
    cat: "mains",
  },

  {
    id: 10,
    coast: "20",
    name: "Steaks with Grilled Kimchi",
    desc: "Steak with smoky grilled kimchi.",

    about: "Fusion dish combining juicy steak with smoky grilled kimchi for bold flavor contrast.",

    calories: 640,
    protein: "50g",
    fat: "38g",
    carbs: "16g",

    cookTime: "28 min",
    serving: "380g",

    taste: ["Spicy", "Smoky", "Bold"],

    ingredients: ["Beef", "Kimchi", "Spices"],

    allergens: [],

    img: mainDish,
    cat: "mains",
  },

  /* DRINKS */
  {
    id: 11,
    coast: "158",
    name: "Wine Pairing",
    desc: "Selected wines for tasting menu.",

    about: "Premium wine pairing selection designed to complement each course with balanced flavor profiles.",

    calories: 240,
    protein: "0g",
    fat: "0g",
    carbs: "5g",

    cookTime: "—",
    serving: "150ml",

    taste: ["Dry", "Elegant"],

    ingredients: ["Wine grapes"],

    allergens: ["Sulfites"],

    img: drinks,
    cat: "drinks",
  },

  {
    id: 12,
    coast: "168",
    name: "Natural Wine Pairing",
    desc: "Expressive natural wines with unique flavors.",

    about: "Natural wine selection with expressive acidity and organic fermentation methods.",

    calories: 260,
    protein: "0g",
    fat: "0g",
    carbs: "7g",

    cookTime: "—",
    serving: "150ml",

    taste: ["Fruity", "Dry", "Complex"],

    ingredients: ["Organic grapes"],

    allergens: ["Sulfites"],

    img: drinks,
    cat: "drinks",
  },

  {
    id: 13,
    coast: "90",
    name: "Whisky Flyer",
    desc: "Aged whisky tasting flight.",

    about: "Carefully curated whisky tasting experience featuring aged spirits with deep aroma and smooth finish.",

    calories: 320,
    protein: "0g",
    fat: "0g",
    carbs: "2g",

    cookTime: "—",
    serving: "120ml",

    taste: ["Strong", "Oak", "Warm"],

    ingredients: ["Malted barley", "Water"],

    allergens: [],

    img: drinks,
    cat: "drinks",
  },
];
