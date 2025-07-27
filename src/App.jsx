import React, { useState } from 'react';
import { MessageCircle, Users, Shield, Star, CheckCircle, Award, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, ArrowRight, ArrowUp, Eye, EyeOff, User, Lock, Building } from 'lucide-react';

const VendorVerse = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showModal, setShowModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null); // Store user data after signup/login

  const impactStats = [
    { number: '1,250kg', label: 'Food Saved Today', icon: '🥬' },
    { number: '89', label: 'Vendors Helped', icon: '👥' },
    { number: '156', label: 'Restaurants Connected', icon: '🏪' },
    { number: '₹45,000', label: 'Money Saved', icon: '💰' }
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

  const Header = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold transform hover:scale-105 transition-transform">V</div>
          <span className="font-bold text-lg bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">VendorVerse</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {['home', 'restaurant', 'vendor', 'trust', 'messages'].map(page => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize transition-all duration-200 hover:scale-105 ${
                currentPage === page 
                  ? 'text-orange-500 font-semibold border-b-2 border-orange-500' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              {page === 'messages' ? 'Chat' : page}
            </button>
          ))}
        </nav>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setShowModal('login')} 
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
          >
            Login
          </button>
          <button 
            onClick={() => setShowModal('signup')} 
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );

   const HomePage = ({ setShowModal, stats }) => (
  <div>
    <div className="relative text-white text-center py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/images/hero-street-food.jpeg')" }}>
      {/* Optional: Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-green-400  opacity-70"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Trust & Safety at the Heart of Everything
        </h1>
        <p className="text-xl mb-6 opacity-90 animate-fade-in-delay">
          Empowering street vendors through restaurant partnerships. Reducing food waste, building community.
        </p>
        <button 
          onClick={() => setShowModal('signup')} 
          className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg animate-bounce-subtle"
        >
          Get Started
        </button>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);



  // const HomePage = () => (
  //   <div>
  //     <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white text-center py-16 relative overflow-hidden">
  //       <div className="absolute inset-0 bg-black opacity-10"></div>
  //       <div className="relative z-10 max-w-4xl mx-auto px-4">
  //         <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust & Safety at the Heart of Everything</h1>
  //         <p className="text-xl mb-6 opacity-90">Empowering street vendors through restaurant partnerships. Reducing food waste, building community.</p>
  //         <button 
  //           onClick={() => setShowModal('signup')} 
  //           className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
  //         >
  //           Get Started
  //         </button>
  //       </div>
  //     </div>

  //     <div className="container mx-auto px-4 py-12">
  //       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  //         {impactStats.map((stat, i) => (
  //           <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
  //             <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
  //             <div className="text-gray-600">{stat.label}</div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  const MessagesPage = () => (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-2">Messages</h1>
      <p className="text-gray-600 mb-6">Connect with restaurants and vendors</p>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <h3 className="font-semibold text-gray-800">Conversations</h3>
        </div>
        {conversations.map((conv, i) => (
          <div key={i} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-all duration-200">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 shadow-md">
              {conv.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold">{conv.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${conv.badge === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
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
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Trust & Safety<br /><span className="text-yellow-500">at the Heart of Everything</span></h1>
          <p className="text-lg mb-6 opacity-90">Our comprehensive verification and rating system ensures safe, reliable exchanges for restaurants and vendors alike.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How We Build Trust</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustFeatures.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
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

  const Dashboard = ({ type, title, subtitle, badges, stats, listings, isRestaurant = false }) => (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          {badges.map((badge, i) => (
            <span key={i} className={`px-3 py-1 rounded-full text-sm ${badge.color} hover:scale-105 transition-transform`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-sm text-gray-600 mb-1">{stat.label}</h3>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <h3 className="font-semibold">{isRestaurant ? 'Active Listings' : 'Available Ingredients'}</h3>
          {isRestaurant && (
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md">
              Add New
            </button>
          )}
        </div>
        {listings.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200">
            {isRestaurant ? (
              <>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.weight} • Expires: {item.expires} • {item.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.status}
                </span>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.vendor} • ⭐ {item.rating}</p>
                    <p className="text-xs text-gray-500">{item.weight} • Expires: {item.expires}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-orange-500 mb-2">{item.price}</div>
                  <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-lg text-sm hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md">
                    Request
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const VendorDashboard = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [vendorRequests, setVendorRequests] = useState(currentUser ? [] : vendorListings);
    const [newRequest, setNewRequest] = useState({
      ingredientName: '',
      quantity: '',
      maxPrice: '',
      urgency: 'normal',
      notes: ''
    });

    const handleAddRequest = (e) => {
      e.preventDefault();
      const request = {
        id: Date.now(),
        name: newRequest.ingredientName,
        vendor: currentUser?.businessName || 'Your Business',
        quantity: newRequest.quantity,
        maxPrice: newRequest.maxPrice,
        urgency: newRequest.urgency,
        notes: newRequest.notes,
        status: 'Searching',
        createdAt: new Date().toLocaleString()
      };
      
      setVendorRequests([...vendorRequests, request]);
      setNewRequest({ ingredientName: '', quantity: '', maxPrice: '', urgency: 'normal', notes: '' });
      setShowAddForm(false);
    };

    const AddRequestForm = () => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Add Ingredient Request</h3>
            <button 
              onClick={() => setShowAddForm(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleAddRequest} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ingredient Name *
              </label>
              <input
                type="text"
                value={newRequest.ingredientName}
                onChange={(e) => setNewRequest({...newRequest, ingredientName: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., Fresh Tomatoes, Bell Peppers"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity Needed *
              </label>
              <input
                type="text"
                value={newRequest.quantity}
                onChange={(e) => setNewRequest({...newRequest, quantity: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., 10 kg, 50 pieces"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Price
              </label>
              <input
                type="text"
                value={newRequest.maxPrice}
                onChange={(e) => setNewRequest({...newRequest, maxPrice: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., ₹50/kg, Free"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <select
                value={newRequest.urgency}
                onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent (Today)</option>
                <option value="flexible">Flexible (This Week)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={newRequest.notes}
                onChange={(e) => setNewRequest({...newRequest, notes: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                rows="3"
                placeholder="Any specific requirements or preferences..."
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all"
              >
                Add Request
              </button>
            </div>
          </form>
        </div>
      </div>
    );

    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
              <p className="text-gray-600">{currentUser?.fullName || 'Raj Kumar'} - {currentUser?.businessName || 'Street Food Vendor'}</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 hover:scale-105 transition-transform">
                Verified
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:scale-105 transition-transform">
                Silver Trusted
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Ingredients Sourced</h3>
              <div className="text-2xl font-bold text-orange-500">850kg</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Money Saved</h3>
              <div className="text-2xl font-bold text-green-500">₹25,000</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Trust Score</h3>
              <div className="text-2xl font-bold text-yellow-500">4/5</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Active Requests</h3>
              <div className="text-2xl font-bold text-blue-500">{vendorRequests.length}</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <h3 className="font-semibold">My Ingredient Requests</h3>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
              >
                Add New Request
              </button>
            </div>
            
            {vendorRequests.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-4">🍅</div>
                <h4 className="text-lg font-semibold mb-2">No ingredient requests yet</h4>
                <p className="text-sm mb-4">Start by adding your first ingredient request to connect with restaurants</p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all"
                >
                  Add Your First Request
                </button>
              </div>
            ) : (
              vendorRequests.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-bold">{item.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-xs text-gray-500">
                        {item.urgency === 'urgent' ? '🔴 Urgent' : item.urgency === 'flexible' ? '🟡 Flexible' : '🟢 Normal'}
                        {item.createdAt && ` • Created: ${item.createdAt}`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-500 mb-2">{item.maxPrice || 'Price negotiable'}</div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'Searching' ? 'bg-blue-100 text-blue-800' : 
                      item.status === 'Available' ? 'bg-green-100 text-green-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status || 'Available'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {showAddForm && <AddRequestForm />}
      </>
    );
  };

  const RestaurantDashboard = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [restaurantListingsState, setRestaurantListingsState] = useState(currentUser ? [] : restaurantListings);
    const [newListing, setNewListing] = useState({
      ingredientName: '',
      quantity: '',
      price: '',
      expires: '',
      pickupTime: '',
      notes: ''
    });

    const handleAddListing = (e) => {
      e.preventDefault();
      const listing = {
        id: Date.now(),
        name: newListing.ingredientName,
        weight: newListing.quantity,
        price: newListing.price,
        expires: newListing.expires,
        time: newListing.pickupTime,
        status: 'Available',
        requests: 0,
        notes: newListing.notes,
        createdAt: new Date().toLocaleString()
      };
      
      setRestaurantListingsState([...restaurantListingsState, listing]);
      setNewListing({ ingredientName: '', quantity: '', price: '', expires: '', pickupTime: '', notes: '' });
      setShowAddForm(false);
    };

    const AddListingForm = () => (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Add New Ingredient</h3>
            <button 
              onClick={() => setShowAddForm(false)}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleAddListing} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ingredient Name *
              </label>
              <input
                type="text"
                value={newListing.ingredientName}
                onChange={(e) => setNewListing({...newListing, ingredientName: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., Fresh Tomatoes, Bell Peppers"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity Available *
              </label>
              <input
                type="text"
                value={newListing.quantity}
                onChange={(e) => setNewListing({...newListing, quantity: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., 10 kg, 50 pieces"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                type="text"
                value={newListing.price}
                onChange={(e) => setNewListing({...newListing, price: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., ₹50/kg, Free"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expires
              </label>
              <select
                value={newListing.expires}
                onChange={(e) => setNewListing({...newListing, expires: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select expiry</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
                <option value="1 week">1 week</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Time
              </label>
              <input
                type="text"
                value={newListing.pickupTime}
                onChange={(e) => setNewListing({...newListing, pickupTime: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                placeholder="e.g., 2:00 PM - 6:00 PM, Anytime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={newListing.notes}
                onChange={(e) => setNewListing({...newListing, notes: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                rows="3"
                placeholder="Any special instructions or details..."
              />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all"
              >
                Add Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    );

    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
              <p className="text-gray-600">{currentUser?.businessName || 'Mumbai Delights Restaurant'}</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 hover:scale-105 transition-transform">
                Verified
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 hover:scale-105 transition-transform">
                Gold Trusted
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Total Donations</h3>
              <div className="text-2xl font-bold text-orange-500">1,250kg</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Vendors Helped</h3>
              <div className="text-2xl font-bold text-green-500">89</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Trust Score</h3>
              <div className="text-2xl font-bold text-yellow-500">4/5</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="text-sm text-gray-600 mb-1">Active Listings</h3>
              <div className="text-2xl font-bold text-blue-500">{restaurantListingsState.length}</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50">
              <h3 className="font-semibold">Active Listings</h3>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-105 shadow-md"
              >
                Add New
              </button>
            </div>
            
            {restaurantListingsState.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <div className="text-4xl mb-4">🥬</div>
                <h4 className="text-lg font-semibold mb-2">No active listings</h4>
                <p className="text-sm mb-4">Start sharing your surplus ingredients with the vendor community</p>
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all"
                >
                  Add Your First Listing
                </button>
              </div>
            ) : (
              restaurantListingsState.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.weight} • Expires: {item.expires} • {item.time}</p>
                    <p className="text-xs text-gray-500">{item.requests} requests</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {showAddForm && <AddListingForm />}
      </>
    );
  };

  // Login Component
  const Login = ({ onClose }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      
      // Simulate login
      setTimeout(() => {
        setCurrentUser({ fullName: 'John Doe', userType: 'vendor' });
        setLoading(false);
        onClose();
        setCurrentPage('vendor');
      }, 1000);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Signup Component
  const Signup = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userType, setUserType] = useState('');
    const [formData, setFormData] = useState({
      email: '', password: '', fullName: '', phone: '', businessName: '', userType: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleUserTypeSelect = (type) => {
      setUserType(type);
      setFormData(prev => ({ ...prev, userType: type }));
      setCurrentStep(2);
    };

    const handleSubmit = async () => {
      setLoading(true);
      
      // Simulate signup
      setTimeout(() => {
        setCurrentUser(formData);
        setLoading(false);
        onClose();
        setCurrentPage(formData.userType);
      }, 1000);
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Join VendorVerse
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>

          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Choose Your Role</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => handleUserTypeSelect('vendor')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Street Vendor</h4>
                      <p className="text-gray-600 text-sm">Get fresh ingredients from restaurants</p>
                    </div>
                  </div>
                </button>
                
                <button 
                  onClick={() => handleUserTypeSelect('restaurant')}
                  className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">Restaurant Owner</h4>
                      <p className="text-gray-600 text-sm">Share surplus ingredients with vendors</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4 text-center">Tell us about yourself</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter your phone"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {userType === 'vendor' ? 'Business Name' : 'Restaurant Name'}
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Enter business name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Account'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Footer Component
  const Footer = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <>
        <section className="bg-gradient-to-r from-orange-500 via-red-500 to-green-600 py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of restaurants and vendors building a more sustainable food ecosystem
            </p>
            <button 
              onClick={() => setShowModal('signup')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 text-lg mx-auto"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">V</span>
                  </div>
                  <span className="text-xl font-bold text-white">VendorVerse</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering street vendors through restaurant partnerships. 
                  Reducing food waste, building community.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">PLATFORM</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setCurrentPage('restaurant')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      For Restaurants
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('vendor')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      For Vendors
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('trust')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Trust & Safety
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowModal('signup')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      How it Works
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">COMMUNITY</h3>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setCurrentPage('home')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Success Stories
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('trust')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Guidelines
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setCurrentPage('messages')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Support
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowModal('signup')}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Join Community
                    </button>
                  </li>
                </ul>
                
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Mail className="w-4 h-4" />
                    <span>support@vendorverse.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 VendorVerse. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="text-gray-400 text-sm">
                  Made with ❤️ for the community
                </div>
                
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white hover:from-orange-600 hover:to-yellow-600 transition-all duration-200 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage setShowModal={setShowModal} stats={impactStats}/>;
      case 'messages': return <MessagesPage />;
      case 'trust': return <TrustPage />;
      case 'vendor': return <VendorDashboard />;
      case 'restaurant': return <RestaurantDashboard />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      {showModal === 'login' && <Login onClose={() => setShowModal(null)} />}
      {showModal === 'signup' && <Signup onClose={() => setShowModal(null)} />}
    </div>
  );
};

export default VendorVerse;