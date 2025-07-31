import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Partial<ReservationForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const validateForm = () => {
    const newErrors: Partial<ReservationForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (formData.guests < 1 || formData.guests > 20) {
      newErrors.guests = 'Please select between 1 and 20 guests';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof ReservationForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNumberChange = (field: 'guests', value: string) => {
    const numValue = parseInt(value) || 1;
    setFormData(prev => ({ ...prev, [field]: numValue }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1b1a18] py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Reservation Confirmed!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for your reservation. We've sent a confirmation email to {formData.email}.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-yellow-400 text-[#1b1a18] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
            >
              Make Another Reservation
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Book a table</h1>
          <p className="text-gray-400">
            Reserve your spot for an unforgettable dining experience
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Number of Guests */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Number of Guests
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={(e) => handleNumberChange('guests', e.target.value)}
                className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </div>
            {errors.guests && (
              <p className="text-red-400 text-sm mt-1">{errors.guests}</p>
            )}
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Date
            </label>
            <input
              type="date"
              min={getMinDate()}
              value={formData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Select Time
            </label>
            <div className="relative">
              <select
                value={formData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent appearance-none"
              >
                <option value="">Choose a time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.time && (
              <p className="text-red-400 text-sm mt-1">{errors.time}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Special Requests (optional)
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) => handleInputChange('specialRequests', e.target.value)}
              rows={4}
              className="w-full bg-[#211e1b] text-white px-4 py-3 rounded-lg border border-[#383633] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
              placeholder="Any special requests or dietary requirements..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-yellow-400 text-[#1b1a18] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Finding a table...' : 'Find a table'}
          </motion.button>
        </motion.form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Need to make changes? Contact us at{' '}
            <a href="tel:+1234567890" className="text-yellow-400 hover:text-yellow-300">
              (123) 456-7890
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservation;
