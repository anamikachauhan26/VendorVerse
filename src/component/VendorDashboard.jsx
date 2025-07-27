import React from 'react';
import { Package, DollarSign, Building, TrendingUp, CheckCircle } from 'lucide-react';

const VendorDashboard = ({ currentUser }) => {
  const vendorStats = [
    { title: 'Orders This Week', value: '23', icon: Package, color: 'bg-blue-500' },
    { title: 'Money Saved', value: '₹4,500', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Restaurants Connected', value: '8', icon: Building, color: 'bg-purple-500' },
    { title: 'Success Rate', value: '94%', icon: TrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Vendor Dashboard</h1>
        <p className="text-gray-600">Welcome back, {currentUser?.fullName}! Here's your business overview.</p>
      </div>

      {/* Hero Section with Problem/Solution */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Bridging the Gap Between <span className="text-orange-500">Waste</span> and <span className="text-orange-500">Want</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">The Problem</h3>
            </div>
            <p className="text-gray-600">
              Restaurants waste 40% of surplus ingredients while street vendors struggle with expensive, low-quality raw materials.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Our Solution</h3>
            </div>
            <p className="text-gray-600">
              VendorVerse creates a trusted marketplace where restaurants can share, donate, or sell surplus ingredients to local vendors.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {vendorStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Available Ingredients */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Available Ingredients Today</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Fresh Vegetables', restaurant: 'Spice Garden', price: '₹50/kg', discount: '60% off' },
            { name: 'Bread & Bakery', restaurant: 'Café Mocha', price: '₹30/dozen', discount: '50% off' },
            { name: 'Dairy Products', restaurant: 'Punjab Grill', price: '₹40/liter', discount: '40% off' }
          ].map((item, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-600">From {item.restaurant}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-lg font-bold text-green-600">{item.price}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{item.discount}</span>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded mt-3 hover:bg-orange-600 transition-all">
                Contact Seller
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;