import React from 'react';

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="assets/images/deep.png" 
              alt="Deep Algorithms" 
              className="h-10"
            />
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium">
              Products
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium">
              Solutions
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#2563eb] transition-colors font-medium">
              Contact
            </a>
            
            {/* Request Demo Button */}
            <button className="bg-[#4ac4f3] text-white px-6 py-2.5 hover:shadow-lg hover:scale-105 transition-all font-medium">
            {/*<button className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium">*/}
              Request Demo
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}