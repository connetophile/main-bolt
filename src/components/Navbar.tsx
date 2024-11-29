import React from 'react';
import { Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Connectophile</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#community" className="text-gray-700 hover:text-indigo-600">Community</a>
            <a href="#mission" className="text-gray-700 hover:text-indigo-600">Mission</a>
            <a href="#team" className="text-gray-700 hover:text-indigo-600">Team</a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600">Process</a>
            <a href="#guidelines" className="text-gray-700 hover:text-indigo-600">Guidelines</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;