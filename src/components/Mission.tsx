import React from 'react';
import { Target, Heart, Zap, Users, Lock } from 'lucide-react';

const Mission = () => {
  return (
    <div className="bg-gray-50 py-24" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
            At Connectophile, we believe in bridging gaps between people, fostering connections that transcend geographical and cultural barriers. Our mission is to create a safe, inclusive, and dynamic platform where strangers can meet, greet, and communicate freely.
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Target, title: 'Inclusivity', description: 'We welcome everyone, regardless of background, interests, or experiences.' },
            { icon: Heart, title: 'Respect', description: 'Every conversation is built on mutual respect, understanding that diversity strengthens our connections.' },
            { icon: Zap, title: 'Innovation', description: 'We are committed to constantly evolving and improving our platform to make your experience better.' },
            { icon: Users, title: 'Community', description: 'We foster a sense of belonging and encourage genuine connections.' },
            { icon: Lock, title: 'Safety', description: 'We prioritize the security of our users, creating an environment where people can communicate openly and confidently.' }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{item.title}</h3>
              <p className="mt-2 text-base text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;