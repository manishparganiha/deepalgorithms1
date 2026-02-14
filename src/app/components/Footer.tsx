import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1f36] to-[#0a0e1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo Section */}
          <div>
            <img 
              src="assets/images/deep.png" 
              alt="Deep Algorithms" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Fostering AI. Connecting Minds. Securing the digital future with autonomous intelligence.
            </p>
          </div>
          
          {/* India Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">India</h3>
            <div className="space-y-6">
              <div className="text-gray-400 text-sm">
                <p className="text-white font-medium mb-2">Hyderabad</p>
                <p className="leading-relaxed">Sriram Shanta Tech Park</p>
                <p className="leading-relaxed">4th Floor, Besides DLF,</p>
                <p className="leading-relaxed">Gachibowli, Hyderabad,</p>
                <p className="leading-relaxed">Telangana - 500032</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="text-white font-medium mb-2">Bengaluru</p>
                <p className="leading-relaxed">Prestige Shantiniketan,</p>
                <p className="leading-relaxed">ITPL Main Road,</p>
                <p className="leading-relaxed">Whitefield, Bengaluru,</p>
                <p className="leading-relaxed">Karnataka - 560048</p>
              </div>
            </div>
          </div>
          
          {/* Global Location */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Global</h3>
            <div className="text-gray-400 text-sm">
              <p className="text-white font-medium mb-2">Maryland</p>
              <p className="leading-relaxed">23231 Aurora Hills Drive,</p>
              <p className="leading-relaxed">Clarks Burg,</p>
              <p className="leading-relaxed">Maryland 20871 USA</p>
            </div>
          </div>
          
          {/* Security & Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Security & Compliance</h3>
            <div className="space-y-3 mb-6">
              <a href="#privacy" className="block text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 duration-200">
                Privacy Policy
              </a>
              <a href="#cookies" className="block text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 duration-200">
                Cookie Policy
              </a>
              <a href="#terms" className="block text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 duration-200">
                Terms & Conditions
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              
                <img 
                  src="assets/images/iso27001.png" 
                  alt="ISO 27001" 
                  className="h-15"
                />
            
              <img 
                  src="assets/images/soc2typeII.png" 
                  alt="ISO 27001" 
                  className="h-15 "
                />
              <img 
                  src="assets/images/gdpr.png" 
                  alt="ISO 27001" 
                  className="h-15"
                />
              <img 
                  src="assets/images/hippa.png" 
                  alt="ISO 27001" 
                  className="h-15"
                />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Deep Algorithms Solutions Pvt Ltd.   All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
