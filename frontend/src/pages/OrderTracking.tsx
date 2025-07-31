import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface OrderStatus {
  step: string;
  description: string;
  completed: boolean;
  current: boolean;
}

const OrderTracking: React.FC = () => {
  const [orderStatus] = useState<OrderStatus[]>([
    {
      step: "Order Received",
      description: "Your order has been received and is being prepared.",
      completed: true,
      current: false
    },
    {
      step: "Order Prepared",
      description: "Your order is being prepared in the kitchen.",
      completed: false,
      current: true
    },
    {
      step: "Order Dispatched",
      description: "Your order is on its way to you.",
      completed: false,
      current: false
    },
    {
      step: "Order Delivered",
      description: "Enjoy your meal",
      completed: false,
      current: false
    }
  ]);

  const orderDetails = {
    orderId: "1234567",
    orderTime: "12:30 PM",
    deliveryAddress: "123 Main Street, San Francisco, CA 94105",
    paymentMethod: "Credit Card",
    orderTotal: "$35.50"
  };

  const orderItems = [
    { name: "Spicy Chicken Sandwich", quantity: 1 },
    { name: "Fries", quantity: 1 },
    { name: "Cake", quantity: 1 }
  ];

  const getProgressPercentage = (index: number): number => {
    if (orderStatus[index].completed) return 100;
    if (orderStatus[index].current) return 75;
    return 0;
  };

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Order Status</h1>
          <p className="text-gray-400 text-lg mb-8">Order #{orderDetails.orderId}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Progress */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#211e1b] rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Progress</h2>
              
              <div className="space-y-6">
                {orderStatus.map((status, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Progress Circle */}
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        status.completed 
                          ? 'bg-green-500' 
                          : status.current 
                            ? 'bg-yellow-400' 
                            : 'bg-[#383633]'
                      }`}>
                        {status.completed ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-white font-bold">{index + 1}</span>
                        )}
                      </div>
                    </div>

                    {/* Progress Content */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        status.completed || status.current ? 'text-white' : 'text-gray-400'
                      }`}>
                        {status.step}
                      </h3>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-[#383633] rounded-full h-2 mb-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            status.completed 
                              ? 'bg-green-500' 
                              : status.current 
                                ? 'bg-yellow-400' 
                                : 'bg-transparent'
                          }`}
                          style={{ width: `${getProgressPercentage(index)}%` }}
                        ></div>
                      </div>
                      
                      <p className={`text-sm ${
                        status.completed || status.current ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {status.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-[#211e1b] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Delivery Map</h2>
              <div className="bg-[#383633] rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-white font-medium">San Francisco</p>
                  <p className="text-gray-400 text-sm">Your order is being prepared</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Order Details */}
            <div className="bg-[#211e1b] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Order Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Order Time</span>
                  <span className="text-white font-medium">{orderDetails.orderTime}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-gray-400">Delivery Address</span>
                  <span className="text-white font-medium text-right max-w-xs">{orderDetails.deliveryAddress}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Payment Method</span>
                  <span className="text-white font-medium">{orderDetails.paymentMethod}</span>
                </div>
                
                <div className="flex justify-between items-center border-t border-[#383633] pt-4">
                  <span className="text-gray-400">Order Total</span>
                  <span className="text-yellow-400 font-bold text-lg">{orderDetails.orderTotal}</span>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="bg-[#211e1b] rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Items</h2>
              
              <div className="space-y-3">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white font-medium">{item.name}</span>
                    <span className="text-gray-400">x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-[#211e1b] rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="text-white font-semibold">Estimated Delivery Time</h3>
                  <p className="text-gray-400">30-45 minutes</p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-[#211e1b] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Need Help?</h3>
              <p className="text-gray-400 text-sm mb-4">
                If you have any questions about your order, please contact our support team.
              </p>
              <button className="bg-yellow-400 text-[#1b1a18] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
