export interface Cake {
  id: number;
  name: string;
  description: string;
  category: 'birthday' | 'wedding' | 'celebration';
  image: string;
  price?: string;
}

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Pink Rose Birthday Cake",
    description: "Elegant three-tier pink cake with buttercream roses and gold accents",
    category: "birthday",
    image: "hero-cake.jpg"
  },
  {
    id: 2,
    name: "Chocolate Delight",
    description: "Rich chocolate cake with ganache drip and fresh berries",
    category: "birthday",
    image: "chocolate-cake.jpg"
  },
  {
    id: 3,
    name: "Vanilla Dream",
    description: "Classic vanilla cake with pastel buttercream and edible flowers",
    category: "birthday",
    image: "vanilla-cake.jpg"
  },
  {
    id: 4,
    name: "Strawberry Bliss",
    description: "Fresh strawberry cake with pink frosting and whipped cream",
    category: "birthday",
    image: "strawberry-cake.jpg"
  },
  {
    id: 5,
    name: "Funfetti Party",
    description: "Colorful birthday cake with rainbow sprinkles and festive decorations",
    category: "birthday",
    image: "funfetti-cake.jpg"
  },
  {
    id: 6,
    name: "Red Velvet Classic",
    description: "Rich red velvet with cream cheese frosting and elegant piping",
    category: "birthday",
    image: "red-velvet-cake.jpg"
  },
  {
    id: 7,
    name: "Carrot Garden Cake",
    description: "Moist carrot cake with cream cheese frosting and walnut decorations",
    category: "celebration",
    image: "carrot-cake.jpg"
  },
  {
    id: 8,
    name: "Black Forest Beauty",
    description: "Classic black forest with cherries and chocolate shavings",
    category: "celebration",
    image: "black-forest-cake.jpg"
  },
  {
    id: 9,
    name: "Lemon Sunshine",
    description: "Zesty lemon cake with citrus glaze and fresh lemon slices",
    category: "celebration",
    image: "lemon-cake.jpg"
  },
  {
    id: 10,
    name: "Coffee Mocha",
    description: "Rich coffee mocha cake with coffee buttercream",
    category: "celebration",
    image: "coffee-cake.jpg"
  },
  {
    id: 11,
    name: "Lavender Dreams",
    description: "Delicate lavender cake with purple frosting and edible flowers",
    category: "celebration",
    image: "lavender-cake.jpg"
  },
  {
    id: 12,
    name: "Coconut Paradise",
    description: "Tropical coconut cake with coconut flakes and tropical decorations",
    category: "celebration",
    image: "coconut-cake.jpg"
  },
  {
    id: 13,
    name: "Matcha Elegance",
    description: "Refined matcha green tea cake with white chocolate ganache",
    category: "celebration",
    image: "matcha-cake.jpg"
  },
  {
    id: 14,
    name: "Classic Lace Wedding",
    description: "Luxurious three-tier white wedding cake with delicate lace patterns",
    category: "wedding",
    image: "wedding-cake-1.jpg"
  },
  {
    id: 15,
    name: "Rustic Naked Wedding",
    description: "Beautiful naked wedding cake with fresh flowers and berries",
    category: "wedding",
    image: "wedding-cake-2.jpg"
  },
  {
    id: 16,
    name: "Modern Blush Wedding",
    description: "Contemporary blush pink wedding cake with gold geometric details",
    category: "wedding",
    image: "wedding-cake-3.jpg"
  },
  {
    id: 17,
    name: "Romantic Rose Wedding",
    description: "Four-tier wedding cake with cascading sugar roses",
    category: "wedding",
    image: "wedding-cake-4.jpg"
  },
  {
    id: 18,
    name: "Celebration Flowers",
    description: "Festive celebration cake with colorful buttercream flowers",
    category: "celebration",
    image: "celebration-cake-1.jpg"
  },
  {
    id: 19,
    name: "Anniversary Gold",
    description: "Elegant anniversary cake with gold decorations and roses",
    category: "celebration",
    image: "anniversary-cake.jpg"
  },
  {
    id: 20,
    name: "Graduation Success",
    description: "Celebration graduation cake with diploma and cap decorations",
    category: "celebration",
    image: "graduation-cake.jpg"
  }
];
