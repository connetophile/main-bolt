import React from 'react';
import ContactMethods from './contact/ContactMethods';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-500">
            We would love to hear from you. Let us know how we can help.
          </p>
        </div>

        <div className="mt-20">
          <ContactMethods />
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;