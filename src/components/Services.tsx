import React from 'react';
import { Clock, Users, Shield, Lightbulb, Music } from 'lucide-react';

const services = [
  {
    title: 'Priority Check-In & Exclusive Time Slots',
    description: 'Get privileged access with priority check-in and book exclusive time slots that fit your schedule perfectly.',
    icon: Clock,
  },
  {
    title: 'Private Group Activities',
    description: 'Join intimate group sessions with like-minded individuals, fostering deeper connections in a controlled environment.',
    icon: Users,
  },
  {
    title: 'Safe and Secure Access',
    description: 'Experience peace of mind with our robust security measures and verified member authentication system.',
    icon: Shield,
  },
  {
    title: 'Personalized Activity Recommendations',
    description: 'Receive tailored suggestions for activities and events based on your interests and past engagements.',
    icon: Lightbulb,
  },
  {
    title: 'Exclusive Live Entertainment',
    description: 'Access premium live performances, workshops, and special events available only to our community members.',
    icon: Music,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Premium Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our exclusive range of services designed to enhance your community experience
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-0 -translate-y-1/2">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center ring-8 ring-white">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-base text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;