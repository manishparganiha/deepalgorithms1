import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/**
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span> */}
          <h2 className="text-5xl mb-4 text-gray-900 font-bold">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to learn more about our AI-powered security solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl mb-8 text-gray-900 font-semibold">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us about your security needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4ac4f3] text-white py-4 hover:shadow-lg hover:scale-[1.02] transition-all font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl border border-blue-100">
              <h3 className="text-3xl mb-8 text-gray-900 font-semibold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#4ac4f3] p-4 rounded-sm shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@deepalgorithms.io</p>
                    <p className="text-gray-600">sales@deepalgorithms.io</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#4ac4f3] p-4 rounded-sm shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">India: +91 40 1234 5678</p>
                    <p className="text-gray-600">USA: +1 (301) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#4ac4f3] p-4 rounded-sm shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Headquarters</h4>
                    <p className="text-gray-600">
                      Sriram Shanta Tech Park, 4th Floor<br />
                      Gachibowli, Hyderabad<br />
                      Telangana - 500032, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#4ac4f3] p-10 rounded-3xl shadow-xl text-white">
              <h4 className="text-2xl mb-3 font-semibold">Request a Demo</h4>
              <p className="text-white/90 mb-6 text-lg">
                Schedule a personalized demo of adapID AI or BotShield AI with our security experts.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3.5 rounded-xl hover:shadow-xl hover:scale-105 transition-all font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}