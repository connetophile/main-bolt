import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: "We will respond within 24 hours",
    action: 'Send email',
    href: 'mailto:contact@connectophile.com'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Available 24/7 for quick help',
    action: 'Start chat',
    href: '#'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm',
    action: 'Call now',
    href: 'tel:+1234567890'
  }
];

const ContactMethods = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {contactMethods.map((method) => (
        <div
          key={method.title}
          className="relative bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white mx-auto">
            <method.icon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
            {method.title}
          </h3>
          <p className="mt-2 text-base text-gray-500 text-center">
            {method.description}
          </p>
          <div className="mt-6 text-center">
            <a
              href={method.href}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {method.action}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactMethods;