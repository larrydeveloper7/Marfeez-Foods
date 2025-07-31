import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import LoyaltyRewards from './pages/LoyaltyRewards';
import ReferralInvite from './pages/ReferralInvite';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/loyalty" element={<LoyaltyRewards />} />
            <Route path="/referral" element={<ReferralInvite />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
