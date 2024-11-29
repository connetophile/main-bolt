import React from 'react';
import { Heart, Shield, Users, Star, Home } from 'lucide-react';

const values = [
  {
    title: 'Authenticity',
    description: 'Encouraging real, meaningful interactions.',
    icon: Heart,
  },
  {
    title: 'Safety',
    description: 'Ensuring a secure, trustworthy environment.',
    icon: Shield,
  },
  {
    title: 'Inclusivity',
    description: 'Welcoming people of all backgrounds and personalities.',
    icon: Users,
  },
  {
    title: 'Memorability',
    description: 'Crafting unique, enjoyable experiences.',
    icon: Star,
  },
  {
    title: 'Community',
    description: 'Fostering a sense of belonging and shared connection.',
    icon: Home,
  },
];

const Values = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            These values embody everything we do, from event design to customer experience.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="flex justify-center">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;