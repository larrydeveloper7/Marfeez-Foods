export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  isFavorite?: boolean;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export const dummyProducts: Product[] = [
  // Burgers
  {
    id: '1',
    name: 'Marfeez Special Burger',
    description: 'A delicious burger with special sauce and fresh ingredients.',
    price: 8.99,
    imageUrl: '/images/burger.jpg',
    category: 'Burgers',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with melted cheese, lettuce, and tomato.',
    price: 7.99,
    imageUrl: '/images/cheeseburger.jpg',
    category: 'Burgers',
  },
  {
    id: '3',
    name: 'Veggie Delight Burger',
    description: 'Plant-based patty with fresh vegetables and special sauce.',
    price: 9.99,
    imageUrl: '/images/veggie-burger.jpg',
    category: 'Burgers',
    isVegetarian: true,
  },

  // Starters
  {
    id: '4',
    name: 'Spicy Chicken Wings',
    description: 'Crispy wings with a spicy kick.',
    price: 6.99,
    imageUrl: '/images/wings.jpg',
    category: 'Starters',
    isSpicy: true,
  },
  {
    id: '5',
    name: 'Loaded Nachos',
    description: 'Crispy tortilla chips topped with cheese, jalapeños, and guacamole.',
    price: 8.99,
    imageUrl: '/images/nachos.jpg',
    category: 'Starters',
    isPopular: true,
  },
  {
    id: '6',
    name: 'Bruschetta',
    description: 'Toasted bread with fresh tomatoes, basil, and olive oil.',
    price: 5.99,
    imageUrl: '/images/bruschetta.jpg',
    category: 'Starters',
    isVegetarian: true,
  },

  // Pizzas
  {
    id: '7',
    name: 'Veggie Pizza',
    description: 'A healthy and tasty veggie pizza with fresh vegetables.',
    price: 10.99,
    imageUrl: '/images/pizza.jpg',
    category: 'Pizzas',
    isVegetarian: true,
  },
  {
    id: '8',
    name: 'Pepperoni Supreme',
    description: 'Classic pepperoni pizza with extra cheese and herbs.',
    price: 12.99,
    imageUrl: '/images/pepperoni-pizza.jpg',
    category: 'Pizzas',
    isPopular: true,
  },
  {
    id: '9',
    name: 'BBQ Chicken Pizza',
    description: 'BBQ sauce, grilled chicken, red onions, and cilantro.',
    price: 13.99,
    imageUrl: '/images/bbq-pizza.jpg',
    category: 'Pizzas',
  },

  // Main Courses
  {
    id: '10',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables.',
    price: 18.99,
    imageUrl: '/images/salmon.jpg',
    category: 'Main Courses',
  },
  {
    id: '11',
    name: 'Beef Tenderloin',
    description: 'Premium cut beef with red wine reduction and mashed potatoes.',
    price: 24.99,
    imageUrl: '/images/beef-tenderloin.jpg',
    category: 'Main Courses',
    isPopular: true,
  },
  {
    id: '12',
    name: 'Chicken Marsala',
    description: 'Pan-seared chicken in marsala wine sauce with mushrooms.',
    price: 16.99,
    imageUrl: '/images/chicken-marsala.jpg',
    category: 'Main Courses',
  },

  // Salads
  {
    id: '13',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce, parmesan cheese, croutons, and caesar dressing.',
    price: 9.99,
    imageUrl: '/images/caesar-salad.jpg',
    category: 'Salads',
    isVegetarian: true,
  },
  {
    id: '14',
    name: 'Greek Salad',
    description: 'Mixed greens with feta cheese, olives, tomatoes, and cucumber.',
    price: 8.99,
    imageUrl: '/images/greek-salad.jpg',
    category: 'Salads',
    isVegetarian: true,
  },

  // Desserts
  {
    id: '15',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream.',
    price: 7.99,
    imageUrl: '/images/lava-cake.jpg',
    category: 'Desserts',
    isPopular: true,
  },
  {
    id: '16',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
    price: 6.99,
    imageUrl: '/images/tiramisu.jpg',
    category: 'Desserts',
  },

  // Beverages
  {
    id: '17',
    name: 'Fresh Lemonade',
    description: 'Homemade lemonade with fresh lemons and a hint of mint.',
    price: 3.99,
    imageUrl: '/images/lemonade.jpg',
    category: 'Beverages',
    isVegetarian: true,
  },
  {
    id: '18',
    name: 'Iced Coffee',
    description: 'Cold brewed coffee with cream and your choice of syrup.',
    price: 4.99,
    imageUrl: '/images/iced-coffee.jpg',
    category: 'Beverages',
  },
  {
    id: '19',
    name: 'Smoothie Bowl',
    description: 'Acai berry smoothie topped with granola, fruits, and honey.',
    price: 8.99,
    imageUrl: '/images/smoothie-bowl.jpg',
    category: 'Beverages',
    isVegetarian: true,
  },

  // Sides
  {
    id: '20',
    name: 'Garlic Bread',
    description: 'Toasted bread with garlic butter and herbs.',
    price: 3.99,
    imageUrl: '/images/garlic-bread.jpg',
    category: 'Sides',
    isVegetarian: true,
  },
  {
    id: '21',
    name: 'French Fries',
    description: 'Crispy golden fries served with ketchup.',
    price: 4.99,
    imageUrl: '/images/fries.jpg',
    category: 'Sides',
    isVegetarian: true,
  },
  {
    id: '22',
    name: 'Onion Rings',
    description: 'Beer-battered onion rings with ranch dipping sauce.',
    price: 5.99,
    imageUrl: '/images/onion-rings.jpg',
    category: 'Sides',
    isVegetarian: true,
  },
];
