import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Order {
  id: string;
  items: number;
  status: string;
  date: string;
  total: number;
}

interface Address {
  id: string;
  name: string;
  address: string;
  isDefault: boolean;
}

interface FavoriteDish {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

const UserDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('order-history');

  const orders: Order[] = [
    { id: '123456789', items: 1, status: 'Delivered', date: '10/10/2023', total: 24.99 },
    { id: '987654321', items: 2, status: 'Delivered', date: '09/20/2023', total: 38.50 },
    { id: '112233445', items: 3, status: 'Delivered', date: '08/15/2023', total: 52.75 },
    { id: '556677889', items: 1, status: 'Delivered', date: '07/05/2023', total: 18.99 },
    { id: '998877646', items: 2, status: 'Delivered', date: '06/25/2023', total: 31.25 },
  ];

  const addresses: Address[] = [
    { id: '1', name: 'Home', address: '123 Main St, City, State 12345', isDefault: true },
    { id: '2', name: 'Work', address: '456 Business Ave, City, State 12345', isDefault: false },
    { id: '3', name: 'Mom\'s House', address: '789 Family Ln, City, State 12345', isDefault: false },
  ];

  const favoriteDishes: FavoriteDish[] = [
    { id: '1', name: 'Spicy Chicken Sandwich', image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop', price: 12.99, category: 'Sandwiches' },
    { id: '2', name: 'Classic Cheeseburger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', price: 14.99, category: 'Burgers' },
    { id: '3', name: 'Margherita Pizza', image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=400&h=300&fit=crop', price: 16.99, category: 'Pizza' },
    { id: '4', name: 'Grilled Salmon Salad', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', price: 18.99, category: 'Salads' },
  ];

  const tabs = [
    { id: 'order-history', label: 'Order History' },
    { id: 'saved-addresses', label: 'Saved Addresses' },
    { id: 'favorite-dishes', label: 'Favorite Dishes' },
    { id: 'reorder', label: 'Reorder' },
  ];

  const renderOrderHistory = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Past Orders</h2>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#211e1b] rounded-lg p-4 border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <span className="text-yellow-400 font-semibold">Order #{order.id}</span>
                  <span className="text-gray-400">
                    {order.status} - {order.items} item{order.items > 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1">${order.total.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <span className="text-gray-400 text-sm">{order.date}</span>
                <button className="block mt-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-200">
                  Reorder
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderSavedAddresses = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Saved Addresses</h2>
      <div className="space-y-4">
        {addresses.map((address, index) => (
          <motion.div
            key={address.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#211e1b] rounded-lg p-4 border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-semibold">{address.name}</h3>
                  {address.isDefault && (
                    <span className="bg-yellow-400 text-[#1b1a18] px-2 py-1 rounded text-xs font-medium">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{address.address}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-200">
                  Edit
                </button>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-200">
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#211e1b] border-2 border-dashed border-[#383633] rounded-lg p-4 text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-200"
        >
          + Add New Address
        </motion.button>
      </div>
    </motion.div>
  );

  const renderFavoriteDishes = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Favorite Dishes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoriteDishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#211e1b] rounded-lg overflow-hidden border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
          >
            <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${dish.image})` }}></div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">{dish.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{dish.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-semibold">${dish.price.toFixed(2)}</span>
                <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderReorder = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Quick Reorder</h2>
      <div className="space-y-4">
        {orders.slice(0, 3).map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-[#211e1b] rounded-lg p-4 border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-yellow-400 font-semibold">Order #{order.id}</span>
                <p className="text-gray-400 text-sm mt-1">{order.date}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-[#1b1a18] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
              >
                Reorder Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-white">Account</h1>
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/loyalty"
                className="inline-flex items-center gap-2 bg-yellow-400 text-[#1b1a18] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                My Rewards
              </Link>
            </motion.div>
          </div>
          
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-[#383633]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-yellow-400 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'order-history' && renderOrderHistory()}
          {activeTab === 'saved-addresses' && renderSavedAddresses()}
          {activeTab === 'favorite-dishes' && renderFavoriteDishes()}
          {activeTab === 'reorder' && renderReorder()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
