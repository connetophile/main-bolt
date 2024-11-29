import React from 'react';
import { Check, AlertCircle } from 'lucide-react';

const Guidelines = () => {
  return (
    <div className="bg-white py-24" id="guidelines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">The Forum Agreement</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            To foster a respectful and positive environment, we ask all users to adhere to our Forum Agreement.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">What We Expect</h3>
              <ul className="space-y-4">
                {[
                  'Serendipitous Encounters: Meet people you would never have crossed paths with otherwise.',
                  'Meaningful Conversations: Move beyond surface-level small talk.',
                  'A Welcoming Community: Everyone is here to connect and share.',
                  'Safety & Support: Secure experience with dedicated support.',
                  'Growth & Discovery: Learn about different cultures and perspectives.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Community Guidelines</h3>
              <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
                {[
                  {
                    title: 'Respectful Behavior',
                    description: 'Treat others as you would want to be treated. No hate speech or harassment.'
                  },
                  {
                    title: 'Authenticity',
                    description: 'Be yourself. No impersonation or misleading behavior.'
                  },
                  {
                    title: 'Constructive Interaction',
                    description: 'Engage in meaningful and helpful conversations.'
                  },
                  {
                    title: 'Privacy & Safety',
                    description: 'Protect personal information and respect others\' privacy.'
                  },
                  {
                    title: 'Reporting Issues',
                    description: 'Help keep the community safe by reporting inappropriate content.'
                  }
                ].map((item, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-indigo-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;