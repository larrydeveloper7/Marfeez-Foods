import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Notification from '../components/Notification';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [selectedDietary, setSelectedDietary] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [notification, setNotification] = useState({ show: false, message: '' });
  const { addToCart } = useCart();

  const menuItems = [
    {
      id: "1",
      name: "Spicy Chicken Sandwich",
      description: "Crispy chicken, spicy mayo, lettuce, tomato",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
      category: "Sandwiches",
      price: 12.99,
      dietary: "Non-Vegetarian"
    },
    {
      id: "2",
      name: "Classic Cheeseburger",
      description: "Beef patty, cheddar cheese, lettuce, tomato, onion",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "Burgers",
      price: 14.99,
      dietary: "Non-Vegetarian"
    },
    {
      id: "3",
      name: "Vegan Beyond Burger",
      description: "Plant-based patty, vegan cheese, lettuce, tomato, onion",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop",
      category: "Burgers",
      price: 16.99,
      dietary: "Vegan"
    },
    {
      id: "4",
      name: "Grilled Salmon Salad",
      description: "Grilled salmon, mixed greens, cherry tomatoes, vinaigrette",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
      category: "Salads",
      price: 18.99,
      dietary: "Non-Vegetarian"
    },
    {
      id: "5",
      name: "Pasta Primavera",
      description: "Pasta with seasonal vegetables in a light cream sauce",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
      category: "Pasta",
      price: 15.99,
      dietary: "Vegetarian"
    },
    {
      id: "6",
      name: "Shrimp Scampi",
      description: "Shrimp in a garlic butter sauce served over linguine",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4a8?w=400&h=300&fit=crop",
      category: "Pasta",
      price: 19.99,
      dietary: "Non-Vegetarian"
    },
    {
      id: "7",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop",
      category: "Pizza",
      price: 16.99,
      dietary: "Vegetarian"
    },
    {
      id: "8",
      name: "BBQ Chicken Pizza",
      description: "Pizza with BBQ sauce, grilled chicken, red onions, and cilantro",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      category: "Pizza",
      price: 18.99,
      dietary: "Non-Vegetarian"
    }
  ];

  const categories = ['All', 'Sandwiches', 'Burgers', 'Salads', 'Pasta', 'Pizza'];
  const priceRanges = ['All', 'Under $10', '$10-$15', '$15-$20', 'Over $20'];
  const dietaryOptions = ['All', 'Vegetarian', 'Vegan', 'Non-Vegetarian'];

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      const dietaryMatch = selectedDietary === 'All' || item.dietary === selectedDietary;
      
      // Price filtering logic
      const price = item.price;
      let priceMatch = true;
      switch (selectedPrice) {
        case 'Under $10':
          priceMatch = price < 10;
          break;
        case '$10-$15':
          priceMatch = price >= 10 && price <= 15;
          break;
        case '$15-$20':
          priceMatch = price > 15 && price <= 20;
          break;
        case 'Over $20':
          priceMatch = price > 20;
          break;
        default:
          priceMatch = true;
      }
      
      return categoryMatch && dietaryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPrice, selectedDietary]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image
    });
    
    // Show notification
    setNotification({
      show: true,
      message: `${item.name} added to cart!`
    });
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title and Actions */}
        <motion.div 
          className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">Explore Our Menu</h1>
          
          {/* Reservation Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/reservation"
              className="inline-flex items-center gap-2 bg-yellow-400 text-[#1b1a18] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Table
            </Link>
          </motion.div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-[#211e1b] text-white px-4 py-2 pr-8 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="appearance-none bg-[#211e1b] text-white px-4 py-2 pr-8 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {priceRanges.map((price) => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Dietary Filter */}
            <div className="relative">
              <select
                value={selectedDietary}
                onChange={(e) => setSelectedDietary(e.target.value)}
                className="appearance-none bg-[#211e1b] text-white px-4 py-2 pr-8 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {dietaryOptions.map((dietary) => (
                  <option key={dietary} value={dietary}>{dietary}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {currentItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#211e1b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-yellow-400">${item.price.toFixed(2)}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(item)}
                    className="bg-yellow-400 text-[#1b1a18] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 text-white hover:text-yellow-400 disabled:text-gray-600 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-yellow-400 text-[#1b1a18]'
                    : 'bg-[#211e1b] text-white hover:bg-[#383633]'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-white hover:text-yellow-400 disabled:text-gray-600 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No dishes found</h3>
            <p className="text-gray-400">Try adjusting your filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Notification */}
      <Notification
        message={notification.message}
        isVisible={notification.show}
        onClose={() => setNotification({ show: false, message: '' })}
      />
    </div>
  );
};

export default Menu;
