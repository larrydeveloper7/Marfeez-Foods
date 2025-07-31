import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Menu', href: '/menu', icon: '🍽️' },
    { name: 'Reservation', href: '/reservation', icon: '📅' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl mb-6"
          >
            🍕
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-6xl font-bold text-white mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-400 mb-8"
          >
            Oops! The page you're looking for seems to have wandered off. 
            Maybe it's exploring our delicious menu?
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4 mb-8"
          >
            <Link
              to="/"
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
            >
              Go Back Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="block w-full border-2 border-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-200"
            >
              Go Back
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.href}
                    className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="text-2xl mb-2">{link.icon}</div>
                    <div className="text-sm text-white font-medium">{link.name}</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 p-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg border border-yellow-600/30"
          >
            <p className="text-yellow-400 text-sm">
              💡 Pro tip: While you're here, why not check out our amazing menu? 
              We promise it's worth the detour!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
