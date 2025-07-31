import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReferralInvite: React.FC = () => {
  const [shareMethod, setShareMethod] = useState<'email' | 'social'>('email');
  const [isCopied, setIsCopied] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');

  const referralCode = 'FRIEND2024';
  const userEmail = 'user@example.com';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleEmailShare = () => {
    const subject = 'Join me at FlavorHub!';
    const body = `Hi there!

I think you'd love FlavorHub! It's an amazing restaurant with delicious food and great service.

Use my referral code "${referralCode}" when you sign up and we'll both get a special discount on our next meal!

Check them out: ${window.location.origin}

Best regards,
${userEmail}`;

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSocialShare = () => {
    const text = `Join me at FlavorHub! Use my referral code "${referralCode}" when you sign up and we'll both get a special discount! ${window.location.origin}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Join FlavorHub',
        text: text,
        url: window.location.origin
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Sharing via email:', { emailAddress, message });
    setEmailAddress('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-[#1b1a18] py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Share the Love</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Invite your friends to join FlavorHub and enjoy delicious meals together. When they sign up and make their first order, you'll both receive a special discount on your next meal.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Share via Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Share via</h2>
            
            {/* Share Method Tabs */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setShareMethod('email')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  shareMethod === 'email'
                    ? 'bg-yellow-400 text-[#1b1a18]'
                    : 'bg-[#211e1b] text-white border border-[#383633] hover:border-[#4a4643]'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setShareMethod('social')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  shareMethod === 'social'
                    ? 'bg-yellow-400 text-[#1b1a18]'
                    : 'bg-[#211e1b] text-white border border-[#383633] hover:border-[#4a4643]'
                }`}
              >
                Social
              </button>
            </div>

            {/* Email Share Form */}
            {shareMethod === 'email' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]"
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Friend's Email Address
                    </label>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      placeholder="Enter your friend's email address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Add a personal message to your invitation..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-400 text-[#1b1a18] py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
                  >
                    Send Invitation
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Social Share */}
            {shareMethod === 'social' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]"
              >
                <div className="text-center space-y-4">
                  <p className="text-gray-400">
                    Share FlavorHub with your friends on social media
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSocialShare}
                    className="bg-yellow-400 text-[#1b1a18] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-200"
                  >
                    Share Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Referral Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Referral Code</h2>
            <div className="bg-[#211e1b] rounded-lg p-6 border border-[#383633]">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={referralCode}
                    readOnly
                    className="w-full bg-[#383633] text-white px-4 py-3 rounded-lg border border-[#4a4643] focus:outline-none font-mono text-lg"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyCode}
                  className="bg-[#383633] text-white p-3 rounded-lg hover:bg-[#4a4643] transition-colors duration-200"
                  title="Copy referral code"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </motion.button>
              </div>
              <p className="text-gray-400 text-sm">
                Share your unique referral code with friends. They can enter this code during signup to claim their discount, and you'll get a reward too!
              </p>
              {isCopied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 text-green-400 text-sm font-medium"
                >
                  ✓ Referral code copied to clipboard!
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Quick Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmailShare}
                className="bg-[#211e1b] text-white px-6 py-3 rounded-lg border border-[#383633] hover:border-[#4a4643] transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Share via Email
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSocialShare}
                className="bg-[#211e1b] text-white px-6 py-3 rounded-lg border border-[#383633] hover:border-[#4a4643] transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share on Social
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReferralInvite;
