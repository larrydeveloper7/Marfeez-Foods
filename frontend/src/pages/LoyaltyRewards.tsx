import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  image: string;
  isAvailable: boolean;
}

interface Activity {
  id: string;
  type: string;
  points: number;
  orderNumber?: string;
  date: string;
}

const LoyaltyRewards: React.FC = () => {
  const [, setSelectedReward] = useState<string | null>(null);

  const userProfile = {
    name: 'Sophia Carter',
    membershipLevel: 'Gold Member',
    currentPoints: 1250,
    nextTier: 'Platinum',
    pointsToNextTier: 750,
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  };

  const rewards: Reward[] = [
    {
      id: '1',
      name: 'Free Appetizer',
      description: 'Enjoy a complimentary appetizer of your choice with your next order.',
      pointsRequired: 250,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      isAvailable: true
    },
    {
      id: '2',
      name: 'Free Entree',
      description: 'Redeem 500 points for a free entree from our menu.',
      pointsRequired: 500,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      isAvailable: true
    },
    {
      id: '3',
      name: 'Free Dessert',
      description: 'Indulge in a complimentary dessert of your choice.',
      pointsRequired: 1000,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
      isAvailable: true
    },
    {
      id: '4',
      name: 'Free Meal',
      description: 'Enjoy a complete meal on us, including an appetizer, entree, and dessert.',
      pointsRequired: 2000,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      isAvailable: false
    }
  ];

  const activities: Activity[] = [
    { id: '1', type: 'Earned', points: 100, orderNumber: 'Order #12345', date: 'May 15, 2024' },
    { id: '2', type: 'Earned', points: 50, date: 'May 10, 2024' },
    { id: '3', type: 'Earned', points: 75, orderNumber: 'Order #1225', date: 'May 5, 2024' },
    { id: '4', type: 'Redeemed', points: -250, date: 'May 1, 2024' },
    { id: '5', type: 'Earned', points: 125, orderNumber: 'Order #1220', date: 'April 28, 2024' }
  ];

  const handleRedeemReward = (rewardId: string) => {
    setSelectedReward(rewardId);
    // Implement redemption logic here
    console.log(`Redeeming reward: ${rewardId}`);
    alert(`Redeeming ${rewards.find(r => r.id === rewardId)?.name}!`);
  };

  const progressPercentage = ((userProfile.currentPoints - 500) / userProfile.pointsToNextTier) * 100;

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">My Rewards</h1>
          <p className="text-gray-400 text-lg">
            Earn points for every purchase and redeem them for delicious rewards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Points and Rewards */}
          <div className="lg:col-span-2 space-y-8">
            {/* My Points Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">My Points</h2>
              <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Available Points</p>
                  <div className="text-5xl font-bold text-yellow-400 mb-4">
                    {userProfile.currentPoints.toLocaleString()}
                  </div>
                  <p className="text-gray-400 text-sm">
                    Keep earning to unlock more rewards!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Redeem Rewards Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Redeem Rewards</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {rewards.map((reward, index) => (
                  <motion.div
                    key={reward.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-[#211e1b] rounded-lg overflow-hidden border border-[#383633] hover:border-[#4a4643] transition-colors duration-200"
                  >
                    <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${reward.image})` }}></div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-semibold">{reward.name}</h3>
                        <span className="text-yellow-400 font-bold">{reward.pointsRequired} Points</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{reward.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleRedeemReward(reward.id)}
                        disabled={!reward.isAvailable || userProfile.currentPoints < reward.pointsRequired}
                        className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 ${
                          reward.isAvailable && userProfile.currentPoints >= reward.pointsRequired
                            ? 'bg-yellow-400 text-[#1b1a18] hover:bg-yellow-300'
                            : 'bg-[#383633] text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {reward.isAvailable && userProfile.currentPoints >= reward.pointsRequired
                          ? 'Redeem Now'
                          : 'Not Enough Points'
                        }
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - User Profile and Activity */}
          <div className="space-y-8">
            {/* User Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]"
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={userProfile.profileImage}
                    alt={userProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{userProfile.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{userProfile.membershipLevel}</p>
              </div>

              {/* Next Tier Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm">Next Tier: {userProfile.nextTier}</span>
                  <span className="text-gray-400 text-sm">
                    {userProfile.pointsToNextTier} more points needed
                  </span>
                </div>
                <div className="w-full bg-[#383633] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-yellow-400 h-2 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  Earn {userProfile.pointsToNextTier} more points to reach {userProfile.nextTier} status
                </p>
              </div>
            </motion.div>

            {/* My Activity Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">My Activity</h2>
              <div className="bg-[#211e1b] rounded-lg p-4 border border-[#383633]">
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex justify-between items-center py-2 border-b border-[#383633] last:border-b-0"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${
                            activity.points > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {activity.points > 0 ? '+' : ''}{activity.points} Points
                          </span>
                          {activity.orderNumber && (
                            <span className="text-gray-400 text-sm">{activity.orderNumber}</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{activity.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;
