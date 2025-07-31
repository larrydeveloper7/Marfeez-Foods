import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('Regular');
  const [selectedSpice, setSelectedSpice] = useState('Mild');
  const [addOns, setAddOns] = useState({
    guacamole: false,
    sourCream: false,
    extraChicken: false
  });

  const product = {
    id: 1,
    name: "Spicy Chicken Bowl",
    description: "A FlavorFusion grilled chicken rice black beans corn and spicy kick. Customize your regular large and add-ons.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop",
    price: "$14.99",
    basePrice: 14.99,
    category: "Bowls",
    nutritionalInfo: {
      calories: 490,
      protein: "45g",
      carbs: "60g",
      fat: "20g"
    },
    reviews: [
      {
        id: 1,
        name: "OliviaKaper",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        rating: 5,
        comment: "Absolutely delicious! The chicken was perfectly cooked and the spice level was just right. I'll definitely be ordering this again.",
        date: "2 months ago",
        likes: 15,
        dislikes: 2
      },
      {
        id: 2,
        name: "Owen Taylor",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
        rating: 4,
        comment: "Great food, but I wish there were more options for add-ons. The spice was good but could be a bit hotter.",
        date: "1 month ago",
        likes: 4,
        dislikes: 1
      }
    ],
    ratingBreakdown: {
      5: 80,
      4: 10,
      3: 0,
      2: 0,
      1: 0
    },
    overallRating: 4.5
  };

  const addOnPrices = {
    guacamole: 2.50,
    sourCream: 1.50,
    extraChicken: 4.00
  };

  const calculateTotalPrice = () => {
    let total = product.basePrice;
    Object.entries(addOns).forEach(([key, selected]) => {
      if (selected && addOnPrices[key as keyof typeof addOnPrices]) {
        total += addOnPrices[key as keyof typeof addOnPrices];
      }
    });
    return total.toFixed(2);
  };

  const handleAddOnChange = (addOn: keyof typeof addOns) => {
    setAddOns(prev => ({
      ...prev,
      [addOn]: !prev[addOn]
    }));
  };

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className="w-4 h-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
      {filled ? (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      )}
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Product Name and Description */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-3">{product.name}</h1>
              <p className="text-gray-300 text-lg">{product.description}</p>
            </div>

            {/* Customization Section */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Customize</h3>
              
              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">Size</label>
                <div className="flex gap-3">
                  {['Regular', 'Large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                        selectedSize === size
                          ? 'bg-yellow-400 text-[#1b1a18] border-yellow-400'
                          : 'bg-[#211e1b] text-white border-[#383633] hover:border-yellow-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spice Level */}
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">Spice Level</label>
                <div className="flex gap-3">
                  {['Mild', 'Medium', 'Hot'].map((spice) => (
                    <button
                      key={spice}
                      onClick={() => setSelectedSpice(spice)}
                      className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                        selectedSpice === spice
                          ? 'bg-yellow-400 text-[#1b1a18] border-yellow-400'
                          : 'bg-[#211e1b] text-white border-[#383633] hover:border-yellow-400'
                      }`}
                    >
                      {spice}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">Add-ons</label>
                <div className="space-y-2">
                  {Object.entries(addOns).map(([key, selected]) => (
                    <label key={key} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => handleAddOnChange(key as keyof typeof addOns)}
                        className="w-4 h-4 text-yellow-400 bg-[#211e1b] border-[#383633] rounded focus:ring-yellow-400 focus:ring-2"
                      />
                      <span className="text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-yellow-400">+${addOnPrices[key as keyof typeof addOnPrices]}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Reviews</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-yellow-400">{product.overallRating}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(product.overallRating)} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="mb-4">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center space-x-2 mb-1">
                    <span className="text-white text-sm w-8">{stars}★</span>
                    <div className="flex-1 bg-[#211e1b] rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${product.ratingBreakdown[stars as keyof typeof product.ratingBreakdown]}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400 text-sm w-12">{product.ratingBreakdown[stars as keyof typeof product.ratingBreakdown]}%</span>
                  </div>
                ))}
              </div>

              {/* Individual Reviews */}
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <div key={review.id} className="bg-[#211e1b] rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-white font-medium">{review.name}</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} filled={i < review.rating} />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{review.comment}</p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{review.date}</span>
                          <div className="flex items-center space-x-4">
                            <span>👍 {review.likes}</span>
                            <span>👎 {review.dislikes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutritional Information */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Nutritional Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#211e1b] rounded-lg p-4">
                  <span className="text-gray-400 text-sm">Calories</span>
                  <div className="text-white font-semibold">{product.nutritionalInfo.calories}</div>
                </div>
                <div className="bg-[#211e1b] rounded-lg p-4">
                  <span className="text-gray-400 text-sm">Protein</span>
                  <div className="text-white font-semibold">{product.nutritionalInfo.protein}</div>
                </div>
                <div className="bg-[#211e1b] rounded-lg p-4">
                  <span className="text-gray-400 text-sm">Carbs</span>
                  <div className="text-white font-semibold">{product.nutritionalInfo.carbs}</div>
                </div>
                <div className="bg-[#211e1b] rounded-lg p-4">
                  <span className="text-gray-400 text-sm">Fat</span>
                  <div className="text-white font-semibold">{product.nutritionalInfo.fat}</div>
                </div>
              </div>
            </div>

            {/* Add to Order Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-400 text-[#1b1a18] py-4 px-6 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Add To Order - ${calculateTotalPrice()}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
