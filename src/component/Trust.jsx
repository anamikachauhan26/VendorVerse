import React from 'react';
import { CheckCircle, Star, Shield, Award } from 'lucide-react';

const Trust = () => {
  const trustFeatures = [
    {
      icon: CheckCircle,
      title: 'Identity Verification',
      description: 'All users go through a comprehensive verification process including phone, email, and document verification.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Star,
      title: 'Community Ratings',
      description: 'Transparent rating system where both parties rate each interaction, building trust over time.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Safe Transactions',
      description: 'Secure payment processing and dispute resolution to protect all community members.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Trust Badges',
      description: 'Earn badges and levels based on successful interactions, donations, and community contributions.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How We Build Trust
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple layers of security and verification keep our community safe
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Info */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Support Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Verified Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-lg opacity-90">Tolerance for Fraud</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Learn More About Our Policies
            </button>
          </div>
        </div>

        {/* Trust Process Steps */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Your Safety Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your account with basic information' },
              { step: '2', title: 'Verify Identity', desc: 'Complete phone and document verification' },
              { step: '3', title: 'Start Trading', desc: 'Begin connecting with verified users' },
              { step: '4', title: 'Build Reputation', desc: 'Earn trust badges through positive interactions' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;