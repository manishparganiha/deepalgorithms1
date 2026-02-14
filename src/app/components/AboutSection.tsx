import React from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/*<span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-blue-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
            OUR STORY
          </span>*/}
          <h2 className="text-5xl mb-4 text-gray-900 font-bold">About Deep Algorithms</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Fostering AI. Connecting Minds. Securing the Future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50">
            <h3 className="text-3xl mb-6 text-gray-900 font-semibold">Who We Are</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Deep Algorithms is a pioneering AI security company that delivers autonomous, intelligent platforms for continuous cyber risk management and threat exposure.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We combine cutting-edge artificial intelligence with deep cybersecurity expertise to create solutions that protect modern digital enterprises from evolving threats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower organizations with AI-driven security that adapts, learns, and continuously improves—transforming reactive security into proactive protection.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/50">
            <h3 className="text-3xl mb-6 text-gray-900 font-semibold">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To be the global leader in autonomous AI-powered cybersecurity, enabling organizations to stay ahead of threats through continuous, intelligent security management.
            </p>
            <h3 className="text-2xl mb-4 text-gray-900 font-semibold">Our Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✦</span>
                <span className="text-lg">Innovation through AI and cutting-edge technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✦</span>
                <span className="text-lg">Continuous improvement and adaptation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✦</span>
                <span className="text-lg">Trust and transparency with our customers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">✦</span>
                <span className="text-lg">Excellence in security and compliance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl mb-2 text-gray-900 font-semibold">Mission-Driven</h4>
            <p className="text-gray-600">
              Protecting digital enterprises with autonomous AI security
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="bg-gradient-to-br from-cyan-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl mb-2 text-gray-900 font-semibold">Certified</h4>
            <p className="text-gray-600">
              ISO 27001, SOC 2, GDPR & HIPAA compliant
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl mb-2 text-gray-900 font-semibold">Expert Team</h4>
            <p className="text-gray-600">
              World-class AI and cybersecurity professionals
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center border border-white/50 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl mb-2 text-gray-900 font-semibold">Global Reach</h4>
            <p className="text-gray-600">
              Serving enterprises across India and USA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}