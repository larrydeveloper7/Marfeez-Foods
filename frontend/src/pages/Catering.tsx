import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CateringOption {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface SampleMenu {
  id: string;
  title: string;
  description: string;
  image: string;
  startingPrice: string;
}

interface QuoteForm {
  name: string;
  email: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  additionalInfo: string;
}

const Catering: React.FC = () => {
  const [formData, setFormData] = useState<QuoteForm>({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    guestCount: 0,
    additionalInfo: ''
  });
  const [errors, setErrors] = useState<Partial<QuoteForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cateringOptions: CateringOption[] = [
    {
      id: '1',
      title: 'Corporate Events',
      description: 'Impress your clients and colleagues with our professional corporate catering services. From boardroom lunches to large-scale conferences, we deliver exceptional food and service that reflects your company\'s standards.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      features: ['Professional presentation', 'Dietary accommodations', 'On-site service staff', 'Custom branding options']
    },
    {
      id: '2',
      title: 'Weddings',
      description: 'Make your special day unforgettable with our elegant wedding catering. From intimate gatherings to grand celebrations, we create personalized menus that reflect your style and delight your guests.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
      features: ['Custom menu design', 'Wedding cake included', 'Ceremony & reception service', 'Tasting sessions']
    },
    {
      id: '3',
      title: 'Private Parties',
      description: 'Celebrate life\'s special moments with our private party catering. Whether it\'s a birthday, anniversary, or any celebration, we bring the restaurant experience to your home or venue.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop',
      features: ['Flexible menu options', 'Setup & cleanup included', 'Staffed service', 'Venue coordination']
    }
  ];

  const sampleMenus: SampleMenu[] = [
    {
      id: '1',
      title: 'Buffet Style',
      description: 'Perfect for large gatherings, our buffet service offers a variety of dishes that allow guests to choose their favorites.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      startingPrice: 'Starting at $25/person'
    },
    {
      id: '2',
      title: 'Plated Dinners',
      description: 'Elegant sit-down service with professionally plated courses, perfect for formal events and intimate gatherings.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      startingPrice: 'Starting at $35/person'
    },
    {
      id: '3',
      title: 'Cocktail Receptions',
      description: 'Sophisticated passed appetizers and stationary displays, ideal for networking events and cocktail parties.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      startingPrice: 'Starting at $20/person'
    }
  ];

  const eventTypes = [
    'Corporate Event',
    'Wedding',
    'Private Party',
    'Birthday Celebration',
    'Anniversary',
    'Holiday Party',
    'Graduation',
    'Other'
  ];

  const handleInputChange = (field: keyof QuoteForm, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<QuoteForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (formData.guestCount < 1) {
      newErrors.guestCount = 'Please enter number of guests';
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
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      eventType: '',
      eventDate: '',
      guestCount: 0,
      additionalInfo: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#1b1a18] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Quote Request Sent!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for your inquiry. We'll review your requirements and get back to you within 24 hours with a personalized quote.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-yellow-400 text-[#1b1a18] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
            >
              Request Another Quote
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1a18]">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=800&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Exceptional Catering Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From intimate gatherings to grand celebrations, we bring our culinary expertise to your venue. 
            Custom menus, professional service, and unforgettable experiences tailored to your event.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-[#1b1a18] px-8 py-4 rounded-lg text-xl font-semibold hover:bg-yellow-300 transition-all duration-200"
          >
            Request a Quote
          </motion.button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Catering Options Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Catering Options</h2>
          <div className="space-y-12">
            {cateringOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="h-80 lg:h-96 rounded-lg overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="text-yellow-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-400 text-[#1b1a18] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Menus Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Sample Menus</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sampleMenus.map((menu, index) => (
              <motion.div
                key={menu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#211e1b] rounded-lg overflow-hidden border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
              >
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${menu.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-xl mb-2">{menu.title}</h3>
                  <p className="text-gray-400 mb-4">{menu.description}</p>
                  <p className="text-yellow-400 font-semibold">{menu.startingPrice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">Request a Quote</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#211e1b] rounded-lg p-8 border border-[#383633]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => handleInputChange('eventType', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="text-red-400 text-sm mt-1">{errors.eventType}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                    {errors.eventDate && (
                      <p className="text-red-400 text-sm mt-1">{errors.eventDate}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', parseInt(e.target.value) || 0)}
                    className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Enter number of guests"
                  />
                  {errors.guestCount && (
                    <p className="text-red-400 text-sm mt-1">{errors.guestCount}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Please provide any additional details about your event"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-[#1b1a18] py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Catering; 