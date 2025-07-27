import React, { useState } from 'react';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, User } from 'lucide-react';
import Login from './component/Login';
import Signup from './component/Signup';
import VendorDashboard from './component/VendorDashboard';
import RestaurantDashboard from './component/RestaurantDashboard';
import MapComponent from './component/MapComponent';
import Trust from './component/Trust';

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">V</div>
            <span className="font-bold text-lg">VendorVerse</span>
          </div>
          <p className="text-gray-400 text-sm">Connecting street vendors with restaurants to reduce food waste and build community.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">How It Works</a></li>
            <li><a href="#" className="hover:text-white">Safety</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@vendorverse.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Mumbai, India</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 VendorVerse. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const VendorVerse = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showModal, setShowModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const impactStats = [
    { number: '1,250kg', label: 'Food Saved Today', icon: '🥬' },
    { number: '89', label: 'Vendors Helped', icon: '👥' },
    { number: '156', label: 'Restaurants Connected', icon: '🏪' },
    { number: '₹45,000', label: 'Money Saved', icon: '💰' }
  ];

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'map', label: 'Find Places' },
    { key: 'trust', label: 'Trust & Safety' },
    { key: 'vendor', label: 'Vendor' },
    { key: 'restaurant', label: 'Restaurant' }
  ];

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold transform hover:scale-105 transition-transform">
              V
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              VendorVerse
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button 
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                  currentPage === item.key 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md' 
                    : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* User Section */}
          <div className="flex items-center gap-4">
            {currentUser && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {currentUser.fullName[0]}
                </div>
                <div className="hidden md:block">
                  <span className="text-sm font-medium text-gray-800">
                    {currentUser.fullName}
                  </span>
                  <p className="text-xs text-gray-500 capitalize">
                    {currentUser.userType}
                  </p>
                </div>
              </div>
            )}
            
            {!currentUser ? (
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowModal('login')} 
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 font-medium"
                >
                  Login
                </button>
                <button 
                  onClick={() => setShowModal('signup')} 
                  className="px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md font-medium"
                >
                  Join Now
                </button>
              </div>
            ) : (
              <button 
                onClick={() => {
                  setCurrentUser(null);
                  setCurrentPage('home');
                }}
                className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105 font-medium"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="lg:hidden mt-4 flex flex-wrap gap-2">
          {navItems.map(item => (
            <button 
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === item.key 
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white' 
                  : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );

  const HomePage = () => (
    <div>
      <div className="relative text-white text-center py-20 overflow-hidden 
      " style={{ backgroundImage: "url('/images/hero-street-food.jpeg')" }} >
        <div className="relative z-10 max-w-4xl mx-auto px-4   opacity-100"  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect. Share. Reduce Waste.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-100">
            Empowering street vendors through restaurant partnerships. Find nearby restaurants and vendors with Google Maps integration.
          </p>
          {currentUser && (
            <div className="mb-6 p-6 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <p className="text-xl">Welcome back, {currentUser.fullName}!</p>
              <p className="text-sm opacity-90">📍 {currentUser.address}</p>
            </div>
          )}
          <button 
            onClick={() => currentUser ? setCurrentPage(currentUser.userType) : setShowModal('signup')} 
            className="bg-white text-orange-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {currentUser ? 'Go to Dashboard' : 'Get Started'}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-orange-500 mb-3">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-xl mb-4">Sign Up</h3>
              <p className="text-gray-600">Create your account as a vendor or restaurant owner</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-xl mb-4">Find Nearby</h3>
              <p className="text-gray-600">Use Google Maps to find restaurants and vendors near you</p>
            </div>
            <div className="p-8">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="font-bold text-xl mb-4">Connect</h3>
              <p className="text-gray-600">Contact directly and arrange your food exchanges</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'map' && <MapComponent userType={currentUser?.userType || 'vendor'} currentUser={currentUser} />}
      {currentPage === 'trust' && <Trust />}
      {currentPage === 'vendor' && <VendorDashboard currentUser={currentUser} />}
      {currentPage === 'restaurant' && <RestaurantDashboard currentUser={currentUser} />}

      {/* Modals */}
      {showModal === 'signup' && (
        <Signup 
          onClose={() => setShowModal(null)}
          onSuccess={(userData) => {
            setCurrentUser(userData);
            setShowModal(null);
            setCurrentPage(userData.userType);
          }}
          switchToLogin={() => setShowModal('login')}
        />
      )}
      
      {showModal === 'login' && (
        <Login 
          onClose={() => setShowModal(null)}
          onSuccess={(userData) => {
            setCurrentUser(userData);
            setShowModal(null);
            setCurrentPage(userData.userType);
          }}
          switchToSignup={() => setShowModal('signup')}
        />
      )}
    </div>
  );
};

export default VendorVerse;