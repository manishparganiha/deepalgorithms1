import React from 'react';

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden">
      {/* adapID AI Section - Blue Background */}
      <div className="relative bg-[#4ac4f3] text-white py-44">
      {/**<div className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#1e40af] text-white py-44">  */}
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">          
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-xl blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-xl blur-3xl"></div>
        </div>
          <div className="absolute inset-0 opacity-5">
            <img
              src="assets/logos/image.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        
        <span className="banner-objects-02 iq-fadebounce">
        <span className="iq-round"></span>
        </span>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl mb-6">
                <img 
                  src="assets/images/adapID-1.png" 
                  alt="adapID AI" 
                  className="h-10"
                />
                <span className="text-sm font-semibold">AI-Powered Platform</span>
              </div>
              
              <h2 className="text-5xl mb-4 leading-tight font-bold">
                adapID AI
              </h2>
              <p className="text-2xl mb-6 text-blue-100 font-light">
                AI-Powered Continuous Cyber Risk Management
              </p>
              <p className="text-xl mb-6 text-white/90 font-medium">
                Protect identities. Expose threats. Secure applications.
              </p>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Deep Algorithms delivers autonomous, AI-driven security platforms that continuously manage identity risk and threat exposure across modern digital enterprises.
              </p>
              
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/20">
                <img 
                  src="assets/images/adapID.png" 
                  alt="adapID AI" 
                  className="w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* BotShield AI Section - White Background with Blue Theme */}
      <div className="relative bg-white py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-xl blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-xl blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-xl border border-blue-200">
                <img 
                  src="assets/images/BotShield.gif" 
                  alt="BotShield AI" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-sm mb-6 border border-blue-200">
                <img 
                  src="assets/images/BotShieldLogo.png"
                  alt="BotShield AI" 
                  className="h-8"
                />
                <span className="text-sm font-semibold text-blue-700">Autonomous CTEM</span>
              </div>
              
              <h2 className="text-5xl mb-4 leading-tight font-bold text-gray-900">
                BotShield AI
              </h2>
              <p className="text-2xl mb-6 text-blue-600 font-light">
                Continuous Threat Exposure Management powered by Autonomous Red & Blue AI Agents
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                BotShield AI CTEM is an autonomous, AI-driven platform. Instead of siloed VAPT reports and reactive patch cycles, BotShield AI creates a closed-loop, self-improving security and performance ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
