import React, { useState } from 'react';
import { MessageCircle, Users, Shield, Star, CheckCircle, Award, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Login from './component/Login';
const VendorVerse = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showModal, setShowModal] = useState(null);
  const [userType, setUserType] = useState('');

  const stats = [
    { number: '99%', label: 'Trust Score Average' },
    { number: '15,000+', label: 'Verified Users' },
    { number: '850+', label: 'Gold Trusted Members' },
    { number: '45,000+', label: 'Successful Exchanges' }
  ];

  const conversations = [
    { name: 'Mumbai Delights Restaurant', message: 'The tomatoes are ready for pickup anytime today', time: '2 min ago', badge: 'verified', avatar: 'M' },
    { name: 'Priya Singh', message: 'Thank you for the fresh herbs! Quality was excellent', time: '1 hour ago', badge: 'trusted', avatar: 'P' },
    { name: 'Green Leaf Organic', message: 'We have 15kg bell peppers available', time: '3 hours ago', badge: 'verified', avatar: 'G' }
  ];

  const vendorListings = [
    { name: 'Fresh Tomatoes', vendor: 'Spice Route Mumbai', rating: 4.9, price: 'Free', weight: '25 kg', expires: 'Today', time: '2:00 PM - 6:00 PM', location: 'Bandra West (1.2 km)' },
    { name: 'Bell Peppers', vendor: 'Green Leaf Organic', rating: 4.8, price: '₹20/kg', weight: '12 kg', expires: 'Tomorrow', time: '10:00 AM - 4:00 PM', location: 'Andheri East (3.5 km)' },
    { name: 'Mixed Spices', vendor: 'Delhi Delights', rating: 4.7, price: '₹50/kg', weight: '5 kg', expires: '3 days', time: 'Anytime', location: 'Powai (2.1 km)' }
  ];

  const restaurantListings = [
    { name: 'Fresh Tomatoes', status: 'Available', weight: '25 kg', expires: 'Today', time: '2:00 PM - 6:00 PM', requests: 5 },
    { name: 'Bell Peppers', status: 'Available', weight: '12 kg', expires: 'Tomorrow', time: '10:00 AM - 4:00 PM', requests: 3 },
    { name: 'Onions', status: 'Pending', weight: '40 kg', expires: '2 days', time: 'Anytime', requests: 8 }
  ];

  const trustFeatures = [
    { icon: CheckCircle, title: 'Identity Verification', desc: 'All users go through a comprehensive verification process including phone, email, and document verification.' },
    { icon: Star, title: 'Community Ratings', desc: 'Transparent rating system where both parties rate each interaction, building trust over time.' },
    { icon: Shield, title: 'Safe Transactions', desc: 'Secure payment processing and dispute resolution to protect all community members.' },
    { icon: Award, title: 'Trust Badges', desc: 'Earn badges and levels based on successful interactions, donations, and community contributions.' }
  ];

  const Modal = ({ type, onClose }) => 
   (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-90vw">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        
        {type === 'signup' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">I am a:</label>
            <div className="flex gap-2">
              <button 
                onClick={() => setUserType('vendor')}
                className={`flex-1 p-2 border rounded ${userType === 'vendor' ? 'bg-orange-100 border-orange-500' : 'border-gray-300'}`}
              >
                Vendor
              </button>
              <button 
                onClick={() => setUserType('restaurant')}
                className={`flex-1 p-2 border rounded ${userType === 'restaurant' ? 'bg-orange-100 border-orange-500' : 'border-gray-300'}`}
              >
                Restaurant
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          {type === 'signup' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
              </div>
            </>
          )}
         

          <button onClick={onClose} className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
            {type === 'login' ? 'Login' : 'Create Account'}
          </button>
        </div>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">V</div>
          <span className="font-bold text-lg">VendorVerse</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {['home', 'restaurant', 'vendor', 'trust', 'messages'].map(page => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize ${currentPage === page ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'}`}
            >
              {page === 'messages' ? 'Chat' : page}
            </button>
          ))}
        </nav>
        
        <div className="flex gap-2">
          <button onClick={() => setShowModal('login')} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">Login</button>
          <button onClick={() => setShowModal('signup')} className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Join Now</button>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div>
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust & Safety at the Heart of Everything</h1>
        <p className="text-xl mb-6 opacity-90">Empowering street vendors through restaurant partnerships. Reducing food waste, building community.</p>
        <button onClick={() => setShowModal('signup')} className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MessagesPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Messages</h1>
      <p className="text-gray-600 mb-6">Connect with restaurants and vendors</p>
      
      <div className="bg-white rounded-xl shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Conversations</h3>
        </div>
        {conversations.map((conv, i) => (
          <div key={i} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
              {conv.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{conv.name}</span>
                <span className={`px-2 py-1 text-xs rounded ${conv.badge === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {conv.badge === 'verified' ? 'Verified' : 'Trusted'}
                </span>
              </div>
              <p className="text-sm text-gray-600">{conv.message}</p>
            </div>
            <span className="text-xs text-gray-500">{conv.time}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const TrustPage = () => (
    <div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Trust & Safety<br /><span className="text-yellow-500">at the Heart of Everything</span></h1>
        <p className="text-lg mb-6 opacity-90">Our comprehensive verification and rating system ensures safe, reliable exchanges for restaurants and vendors alike.</p>
        <div className="flex justify-center gap-3">
          <span className="bg-green-500 px-3 py-1 rounded-full text-sm">Verified</span>
          <span className="bg-gray-500 px-3 py-1 rounded-full text-sm">Silver Trusted</span>
          <span className="bg-yellow-500 px-3 py-1 rounded-full text-sm">Gold Trusted</span>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center mb-8">How We Build Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustFeatures.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const VendorDashboard = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
          <p className="text-gray-600">Raj Kumar - Street Food Vendor</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Verified</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Silver Trusted</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Ingredients Sourced</h3>
          <div className="text-2xl font-bold text-orange-500">850kg</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Money Saved</h3>
          <div className="text-2xl font-bold text-green-500">₹25,000</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Trust Score</h3>
          <div className="text-2xl font-bold text-yellow-500">4/5</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Active Requests</h3>
          <div className="text-2xl font-bold text-blue-500">3</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold">Available Ingredients</h3>
        </div>
        {vendorListings.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold">{item.name[0]}</span>
              </div>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.vendor} • ⭐ {item.rating}</p>
                <p className="text-xs text-gray-500">{item.weight} • Expires: {item.expires} • {item.time}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-orange-500 mb-2">{item.price}</div>
              <button className="bg-orange-500 text-white px-4 py-1 rounded text-sm hover:bg-orange-600">Request</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const RestaurantDashboard = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
          <p className="text-gray-600">Mumbai Delights Restaurant</p>
        </div>
        <div className="flex gap-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Verified</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Gold Trusted</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Total Donations</h3>
          <div className="text-2xl font-bold text-orange-500">1,250kg</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Vendors Helped</h3>
          <div className="text-2xl font-bold text-green-500">89</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Trust Score</h3>
          <div className="text-2xl font-bold text-yellow-500">4/5</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-sm text-gray-600 mb-1">Active Listings</h3>
          <div className="text-2xl font-bold text-blue-500">12</div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="font-semibold">Active Listings</h3>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Add New</button>
        </div>
        {restaurantListings.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100">
            <div>
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.weight} • Expires: {item.expires} • {item.time}</p>
              <p className="text-xs text-gray-500">{item.requests} requests</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs rounded ${item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {item.status}
              </span>
              <button className="text-orange-500 hover:text-orange-700">✏️</button>
              <button className="text-red-500 hover:text-red-700">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'messages': return <MessagesPage />;
      case 'trust': return <TrustPage />;
      case 'vendor': return <VendorDashboard />;
      case 'restaurant': return <RestaurantDashboard />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {renderPage()}
      {showModal && <Modal type={showModal} onClose={() => setShowModal(null)} />}
    </div>
  );
};

export default VendorVerse;