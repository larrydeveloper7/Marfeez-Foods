import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  rating: number;
  reviewText: string;
  date: string;
  likes: number;
  comments: number;
  isReplied: boolean;
  isFlagged: boolean;
}

const Reviews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'unreplied' | 'flagged'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const reviews: Review[] = [
    {
      id: '1',
      customerName: 'Clara Bennett',
      customerImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      reviewText: 'The food was absolutely delicious! I ordered the pasta carbonara and it was cooked to perfection. The service was also excellent, our server was very attentive and friendly. I will definitely be coming back!',
      date: '2 weeks ago',
      likes: 12,
      comments: 2,
      isReplied: true,
      isFlagged: false
    },
    {
      id: '2',
      customerName: 'Owen Carter',
      customerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 4,
      reviewText: 'I had a great experience at this restaurant. The ambiance was lovely and the staff were very welcoming. The food was good, but not exceptional. I would recommend it for a casual dinner.',
      date: '3 weeks ago',
      likes: 8,
      comments: 1,
      isReplied: false,
      isFlagged: false
    },
    {
      id: '3',
      customerName: 'Isabella Harper',
      customerImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 2,
      reviewText: 'The food was okay, but the service was slow and the restaurant was quite noisy. I might give it another try, but I wasn\'t overly impressed.',
      date: '1 month ago',
      likes: 5,
      comments: 3,
      isReplied: false,
      isFlagged: true
    },
    {
      id: '4',
      customerName: 'Marcus Rodriguez',
      customerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      reviewText: 'Amazing experience! The chef\'s special was incredible and the wine pairing was perfect. The staff went above and beyond to make our anniversary special.',
      date: '1 week ago',
      likes: 15,
      comments: 4,
      isReplied: true,
      isFlagged: false
    },
    {
      id: '5',
      customerName: 'Sarah Johnson',
      customerImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      rating: 3,
      reviewText: 'The food was decent but overpriced for what you get. The atmosphere is nice though, and the location is convenient.',
      date: '2 weeks ago',
      likes: 3,
      comments: 1,
      isReplied: false,
      isFlagged: false
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (activeTab === 'unreplied') return !review.isReplied;
    if (activeTab === 'flagged') return review.isFlagged;
    return true;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'orders', label: 'Orders', icon: '📄' },
    { id: 'menu', label: 'Menu', icon: '🍷' },
    { id: 'reviews', label: 'Reviews', icon: '⭐' },
    { id: 'marketing', label: 'Marketing', icon: '📢' }
  ];

  return (
    <div className="min-h-screen bg-[#1b1a18] flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#211e1b] border-r border-[#383633] p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#383633] rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">Restaurant Hub</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ backgroundColor: '#383633' }}
              whileTap={{ scale: 0.95 }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                item.id === 'reviews'
                  ? 'bg-[#383633] text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* View Public Page Link */}
        <div className="absolute bottom-6 left-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            <span>View public page</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Reviews</h1>
          <p className="text-gray-400 text-lg">Manage your customer feedback.</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-8 border-b border-[#383633]">
            {[
              { id: 'all', label: 'All' },
              { id: 'unreplied', label: 'Unreplied' },
              { id: 'flagged', label: 'Flagged' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
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

        {/* Reviews List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">Reviews</h2>
          <div className="space-y-6">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]"
              >
                <div className="flex items-start gap-4">
                  {/* Customer Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.customerImage}
                      alt={review.customerName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-white font-semibold">{review.customerName}</h3>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4">{review.reviewText}</p>

                    {/* Engagement */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span className="text-sm">{review.likes}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-sm">{review.comments}</span>
                      </div>
                      {review.isFlagged && (
                        <div className="flex items-center gap-2 text-red-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          <span className="text-sm">Flagged</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-yellow-400 text-[#1b1a18] rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-200"
                      >
                        {review.isReplied ? 'Edit Reply' : 'Reply'}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-[#383633] text-white rounded-lg font-medium hover:bg-[#4a4643] transition-colors duration-200"
                      >
                        Flag
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {[1, 2, 3, '...', 10].map((page, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors duration-200 ${
                  page === currentPage
                    ? 'bg-[#383633] text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
              >
                {page}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews; 