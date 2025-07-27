import React, { useState } from 'react';
import { Package, DollarSign, Users, Shield, Building, X, Plus, Calendar, Clock, MapPin } from 'lucide-react';

const RestaurantDashboard = ({ currentUser = { fullName: 'Restaurant Owner' } }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [surplusItems, setSurplusItems] = useState([
    {
      id: 1,
      name: 'Fresh Vegetables',
      quantity: '5kg',
      category: 'Vegetables',
      expiryDate: '2025-07-30',
      price: '₹500',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Dairy Products',
      quantity: '3L',
      category: 'Dairy',
      expiryDate: '2025-07-28',
      price: '₹300',
      status: 'Requested'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: 'Vegetables',
    expiryDate: '',
    price: '',
    description: '',
    location: ''
  });

  const categories = ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Bread', 'Spices', 'Other'];

  const restaurantStats = [
    { title: 'Waste Reduced', value: '85kg', icon: Package, color: 'bg-green-500' },
    { title: 'Revenue Generated', value: '₹12,000', icon: DollarSign, color: 'bg-blue-500' },
    { title: 'Vendors Helped', value: '15', icon: Users, color: 'bg-purple-500' },
    { title: 'Environmental Impact', value: '95%', icon: Shield, color: 'bg-orange-500' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    
    if (!formData.name || !formData.quantity || !formData.expiryDate || !formData.price) {
      alert('Please fill in all required fields');
      return;
    }

    const newItem = {
      id: Date.now(),
      ...formData,
      price: formData.price.startsWith('₹') ? formData.price : `₹${formData.price}`,
      status: 'Available'
    };

    setSurplusItems(prev => [newItem, ...prev]);
    setFormData({
      name: '',
      quantity: '',
      category: 'Vegetables',
      expiryDate: '',
      price: '',
      description: '',
      location: ''
    });
    setShowAddForm(false);
    
    // Show success message
    alert('Surplus item added successfully!');
  };

  const removeItem = (id) => {
    setSurplusItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Restaurant Dashboard</h1>
        <p className="text-gray-600">Welcome back, {currentUser?.fullName}! Manage your surplus ingredients here.</p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Turn Your <span className="text-green-500">Surplus</span> into <span className="text-blue-500">Success</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">For Restaurants</h3>
            </div>
            <p className="text-gray-600">
              Transform your excess ingredients into revenue while supporting local vendors and reducing environmental waste.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Impact</h3>
            </div>
            <p className="text-gray-600">
              Every ingredient shared helps reduce food waste, supports local businesses, and creates a sustainable ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {restaurantStats.map((stat, index) => (
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

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">List New Surplus</h3>
          <p className="text-gray-600 mb-4">Have excess ingredients? List them here for local vendors.</p>
          <button 
            onClick={() => setShowAddForm(true)}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Surplus Items
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Requests</h3>
          <div className="space-y-3">
            {[
              'Ravi Kumar - Vegetables (2kg)',
              'Priya Sharma - Dairy Products (5L)',
              'Amit Singh - Bread Items (20 pieces)'
            ].map((request, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b">
                <span className="text-sm">{request}</span>
                <button className="text-blue-500 text-sm hover:underline">Respond</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Surplus Items */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Your Surplus Items ({surplusItems.length})</h3>
        <div className="grid gap-4">
          {surplusItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <div className="flex gap-4 text-sm text-gray-600 mt-1">
                  <span>Qty: {item.quantity}</span>
                  <span>Category: {item.category}</span>
                  <span>Price: {item.price}</span>
                  <span>Expires: {item.expiryDate}</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                  item.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 p-2"
                title="Remove item"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Surplus Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Add Surplus Item</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Item Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  placeholder="e.g., Fresh Tomatoes"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Quantity *</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  placeholder="e.g., 5kg, 10 pieces, 2L"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date *</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Price *</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  placeholder="e.g., 500 (₹ will be added automatically)"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  placeholder="Pickup location (optional)"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-green-500"
                  rows="3"
                  placeholder="Additional details about the item (optional)"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDashboard;