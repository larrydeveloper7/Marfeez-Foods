import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Chef Isabella Rossi',
      role: 'Head Chef',
      description: 'With over 15 years of culinary experience, Chef Isabella brings her passion for Italian cuisine and innovative cooking techniques to create unforgettable dining experiences.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'David Chen',
      role: 'Restaurant Manager',
      description: 'David ensures smooth operations and exceptional service. His attention to detail and commitment to guest satisfaction makes every visit memorable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Emily Carter',
      role: 'Head Server',
      description: 'Emily leads our service team with warmth and professionalism. Her dedication to guest satisfaction ensures every dining experience is exceptional.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
    }
  ];

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
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
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-gray-400 mb-8">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-yellow-400 text-[#1b1a18] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Find Us</h1>
        </motion.div>

        <div className="space-y-12">
          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
            <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
              <p className="text-gray-400 leading-relaxed">
                Located in the heart of downtown, FlavorHub offers a cozy and inviting atmosphere. 
                Our address is 123 Main Street, Anytown, USA. We are easily accessible by public 
                transportation and have ample parking nearby.
              </p>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-gray-400">123 Main Street<br />Anytown, USA 12345</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Contact</h3>
                  <p className="text-gray-400">Phone: (555) 123-4567<br />Email: info@flavorhub.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Meet the passionate individuals who bring the FlavorHub experience to life. 
              Our team is dedicated to providing exceptional service and creating memorable 
              dining experiences for our guests.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#211e1b] rounded-lg overflow-hidden border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
                >
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-yellow-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Have questions, feedback, or want to make a reservation? We'd love to hear from you! 
                Call us at (555) 123-4567 or fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-yellow-400 text-[#1b1a18] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Map</h2>
            <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
              <div className="h-96 bg-[#383633] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-400">Interactive map coming soon</p>
                  <p className="text-gray-500 text-sm mt-2">123 Main Street, Anytown, USA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
