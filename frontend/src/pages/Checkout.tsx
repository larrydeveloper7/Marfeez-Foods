import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CheckoutForm {
  address: string;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'paystack' | 'flutterwave' | 'stripe';
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutForm>({
    address: '',
    deliveryMethod: 'delivery',
    paymentMethod: 'paystack'
  });
  const [errors, setErrors] = useState<Partial<CheckoutForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock order data
  const orderItems = [
    { name: 'Spicy Chicken Bowl', quantity: 2, price: 14.99 },
    { name: 'Classic Cheeseburger', quantity: 1, price: 12.99 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = formData.deliveryMethod === 'delivery' ? 5.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const validateForm = (): boolean => {
    const newErrors: Partial<CheckoutForm> = {};

    if (formData.deliveryMethod === 'delivery' && !formData.address.trim()) {
      newErrors.address = 'Address is required for delivery';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (field: keyof CheckoutForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1b1a18] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Order Confirmed!</h2>
            <p className="text-gray-400 mb-4">
              Thank you for your order. Your order number is: <span className="text-yellow-400 font-semibold">#FP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </p>
            <p className="text-gray-400 mb-8">
              We'll send you a confirmation email with tracking details.
            </p>
            <div className="space-y-3">
              <Link
                to="/order-tracking"
                className="block w-full bg-yellow-400 text-[#1b1a18] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
              >
                Track Your Order
              </Link>
              <Link
                to="/menu"
                className="block w-full border-2 border-[#383633] text-white py-3 rounded-lg font-semibold hover:bg-[#383633] transition-all duration-200"
              >
                Order Again
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Checkout</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#211e1b] rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Address Section */}
              <div>
                <label htmlFor="address" className="block text-lg font-semibold text-white mb-4">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    errors.address ? 'border-red-500 bg-red-900/20' : 'border-[#383633] bg-[#1b1a18] text-white'
                  }`}
                  placeholder="Enter your address"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-400">{errors.address}</p>
                )}
              </div>

              {/* Delivery Method Section */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Delivery Method
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('deliveryMethod', 'delivery')}
                    className={`flex-1 py-3 px-6 rounded-lg border transition-colors duration-200 ${
                      formData.deliveryMethod === 'delivery'
                        ? 'bg-[#383633] text-white border-[#383633]'
                        : 'bg-[#1b1a18] text-white border-[#383633] hover:bg-[#383633]'
                    }`}
                  >
                    Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('deliveryMethod', 'pickup')}
                    className={`flex-1 py-3 px-6 rounded-lg border transition-colors duration-200 ${
                      formData.deliveryMethod === 'pickup'
                        ? 'bg-[#383633] text-white border-[#383633]'
                        : 'bg-[#1b1a18] text-white border-[#383633] hover:bg-[#383633]'
                    }`}
                  >
                    Pickup
                  </button>
                </div>
              </div>

              {/* Payment Method Section */}
              <div>
                <label className="block text-lg font-semibold text-white mb-4">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'paystack')}
                    className={`py-3 px-4 rounded-lg border transition-colors duration-200 ${
                      formData.paymentMethod === 'paystack'
                        ? 'bg-[#383633] text-white border-[#383633]'
                        : 'bg-[#1b1a18] text-white border-[#383633] hover:bg-[#383633]'
                    }`}
                  >
                    Paystack
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'flutterwave')}
                    className={`py-3 px-4 rounded-lg border transition-colors duration-200 ${
                      formData.paymentMethod === 'flutterwave'
                        ? 'bg-[#383633] text-white border-[#383633]'
                        : 'bg-[#1b1a18] text-white border-[#383633] hover:bg-[#383633]'
                    }`}
                  >
                    Flutterwave
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'stripe')}
                    className={`py-3 px-4 rounded-lg border transition-colors duration-200 ${
                      formData.paymentMethod === 'stripe'
                        ? 'bg-[#383633] text-white border-[#383633]'
                        : 'bg-[#1b1a18] text-white border-[#383633] hover:bg-[#383633]'
                    }`}
                  >
                    Stripe
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t border-[#383633] pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {orderItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">{item.name}</p>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-[#383633] pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax (8%)</span>
                    <span className="text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">
                      {formData.deliveryMethod === 'delivery' ? 'Delivery Fee' : 'Pickup'}
                    </span>
                    <span className="text-white">
                      {formData.deliveryMethod === 'delivery' ? `$${deliveryFee.toFixed(2)}` : 'Free'}
                    </span>
                  </div>
                  <div className="border-t border-[#383633] pt-3">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold text-white">Total</span>
                      <span className="text-xl font-bold text-yellow-400">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#383633] text-white py-4 rounded-lg font-semibold hover:bg-[#4a4643] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mx-auto"
                  />
                ) : (
                  'Place Order'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
