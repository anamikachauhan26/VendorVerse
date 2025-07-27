import React, { useState } from 'react';
import { User, Building } from 'lucide-react';

const Signup = ({ onClose, switchToLogin, onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    email: '', password: '', fullName: '', phone: '', businessName: '', address: '', userType: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleUserTypeSelect = (type) => {
    setUserType(type);
    setFormData(prev => ({ ...prev, userType: type }));
    setCurrentStep(2);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.businessName.trim()) newErrors.businessName = 'Business name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const userData = {
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        address: formData.address,
        userType: formData.userType,
        verified: true,
        coordinates: { lat: 19.0760, lng: 72.8777 }
      };
      
      if (onSuccess) onSuccess(userData);
    } catch (error) {
      setErrors({ general: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Choose Your Role</h3>
        <p className="text-gray-600">Select how you'll be using VendorVerse</p>
      </div>
      
      <button onClick={() => handleUserTypeSelect('vendor')} className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Street Vendor</h4>
            <p className="text-gray-600 text-sm">Get fresh ingredients from restaurants at discounted prices</p>
          </div>
        </div>
      </button>
      
      <button onClick={() => handleUserTypeSelect('restaurant')} className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-lg">Restaurant Owner</h4>
            <p className="text-gray-600 text-sm">Share surplus ingredients with vendors and reduce waste</p>
          </div>
        </div>
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">Your Information</h3>
        <p className="text-gray-600">Tell us about yourself and your business</p>
      </div>

      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {errors.general}
        </div>
      )}

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
          errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder="Full Name"
      />
      {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder="Email Address"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
          errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder="Phone Number"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
          errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder="Create Password"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <input
        type="text"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
          errors.businessName ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder={`${userType === 'vendor' ? 'Business' : 'Restaurant'} Name`}
      />
      {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}

      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        rows={3}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 resize-none ${
          errors.address ? 'border-red-500 bg-red-50' : 'border-gray-300'
        }`}
        placeholder="Complete Address"
      />
      {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Join VendorVerse
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
        </div>

        <div className="min-h-[400px]">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
        </div>

        {currentStep === 2 && (
          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex-1 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        )}

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <button onClick={switchToLogin} className="text-orange-500 hover:text-orange-600 font-semibold">
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;