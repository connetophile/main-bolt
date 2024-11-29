import React from 'react';

const Team = () => {
  return (
    <div className="bg-white py-24" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Team Spirit</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            At Connectophile, we thrive on collaboration. Our team is composed of diverse individuals who bring different skill sets, perspectives, and experiences to the table.
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Collaborative Environment</h3>
                  <p className="text-indigo-600">Working Together</p>
                </div>
                <div className="text-base text-gray-500">
                  We believe that innovation thrives in an environment where everyone's voice is heard and valued.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>Diverse Perspectives</h3>
                  <p className="text-indigo-600">Learning from Each Other</p>
                </div>
                <div className="text-base text-gray-500">
                  Our team brings together different backgrounds and experiences to create a richer platform.
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80"
                  alt="Team discussion"
                />
              </div>
              <div className="space-y-2">
                <div className="text-lg leading-6 font-medium space-y-1">
                  <h3>United Vision</h3>
                  <p className="text-indigo-600">Shared Goals</p>
                </div>
                <div className="text-base text-gray-500">
                  We are united in our mission to build a platform where people from all walks of life can find common ground.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;