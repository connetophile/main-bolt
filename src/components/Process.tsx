import React from 'react';
import { Workflow, Users, MessageSquare, Shield } from 'lucide-react';

const Process = () => {
  return (
    <div className="bg-gray-50 py-24" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How We Work</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We operate with transparency, flexibility, and a commitment to user-centered design.
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Agile Development
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      User Satisfaction
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Workflow,
                title: 'Agile Approach',
                description: 'Constant iteration and improvement based on user feedback.'
              },
              {
                icon: Users,
                title: 'User-Centered',
                description: 'Every decision is made with our users in mind.'
              },
              {
                icon: MessageSquare,
                title: 'Open Communication',
                description: 'Transparent dialogue with our community.'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Rigorous testing and validation processes.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <item.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.title}
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {item.description}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;