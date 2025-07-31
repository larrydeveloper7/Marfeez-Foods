import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, cartCount, updateQuantity, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + tax + deliveryFee;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#1b1a18] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-3xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link
              to="/menu"
              className="bg-yellow-400 text-[#1b1a18] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
            >
              Browse Menu
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Your Cart ({cartCount})</h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    exit="exit"
                    className="bg-[#211e1b] rounded-lg p-6 flex items-center space-x-4"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      <p className="text-yellow-400 font-semibold">${item.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-[#383633] rounded-lg flex items-center justify-center hover:bg-[#4a4643] transition-colors duration-200 text-white"
                      >
                        -
                      </motion.button>
                      <span className="w-12 text-center text-white font-semibold">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-[#383633] rounded-lg flex items-center justify-center hover:bg-[#4a4643] transition-colors duration-200 text-white"
                      >
                        +
                      </motion.button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <p className="text-white font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    {/* Remove Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-400 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#211e1b] rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax (8%)</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span className="text-white">
                    {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-[#383633] pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-xl font-bold text-yellow-400">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/checkout"
                  className="w-full bg-yellow-400 text-[#1b1a18] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/menu"
                  className="w-full border-2 border-[#383633] text-white py-3 rounded-lg font-semibold hover:bg-[#383633] transition-all duration-200 text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {deliveryFee > 0 && (
                <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    Add ${(50 - subtotal).toFixed(2)} more to your order for free delivery!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
