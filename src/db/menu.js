import starters from "../../img/menu/starters.png";
import startersBg from "../../img/menu/starters_bg.png";
import mainDish from "../../img/menu/main.png";
import drinks from "../../img/menu/drinks.png";
import drinksBg from "../../img/menu/drinks_bg.png";

export const menu = [
  {
    id: 1,
    coast: "20",
    name: "Deep Sea Snow White Cod Fillet",
    desc: "Delicate cod fillet served with seasonal herbs and a light citrus sauce.",
  },
  {
    id: 2,
    coast: "22",
    name: "Steak With Rosemary Butter",
    desc: "Juicy grilled steak finished with aromatic rosemary butter and sea salt.",
  },
  {
    id: 3,
    coast: "18",
    name: "Cucumber Salad",
    desc: "Fresh cucumber salad with garden greens, olive oil, and lemon dressing.",
  },
  {
    id: 4,
    coast: "90",
    name: "Natural Wine Pairing",
    desc: "A curated selection of premium natural wines chosen for your meal.",
  },

  /* STARTERS */
  {
    id: 5,
    coast: "20",
    name: "Grilled Okra and Tomatoes",
    desc: "Charred okra and ripe tomatoes served with herbs and olive oil.",
    img: starters,
    cat: "starters",
  },
  {
    id: 6,
    coast: "18",
    name: "Cucumber Salad",
    desc: "Crisp cucumber slices tossed with lemon, greens, and fresh dill.",
    img: starters,
    cat: "starters",
  },
  {
    id: 7,
    coast: "12",
    name: "Basil Pancakes",
    desc: "Soft savory pancakes infused with basil and seasonal spices.",
    img: starters,
    cat: "starters",
  },

  /* MAINS */
  {
    id: 8,
    coast: "20",
    name: "Deep Sea Snow White Cod Fillet",
    desc: "Tender cod fillet paired with vegetables and citrus butter glaze.",
    img: mainDish,
    cat: "mains",
  },
  {
    id: 9,
    coast: "22",
    name: "Steak With Rosemary Butter",
    desc: "Premium steak grilled to perfection with rosemary butter finish.",
    img: mainDish,
    cat: "mains",
  },
  {
    id: 10,
    coast: "20",
    name: "Steaks with Grilled Kimchi",
    desc: "Rich grilled steak served with smoky spicy kimchi.",
    img: mainDish,
    cat: "mains",
  },

  /* DRINKS */
  {
    id: 11,
    coast: "158",
    name: "Wine Pairing",
    desc: "A premium wine selection designed to match your tasting menu.",
    img: drinks,
    cat: "drinks",
  },
  {
    id: 12,
    coast: "168",
    name: "Natural Wine Pairing",
    desc: "Handpicked natural wines with bright and expressive flavors.",
    img: drinks,
    cat: "drinks",
  },
  {
    id: 13,
    coast: "90",
    name: "Whisky Flyer",
    desc: "A refined tasting flight featuring selected aged whiskies.",
    img: drinks,
    cat: "drinks",
  },
];
