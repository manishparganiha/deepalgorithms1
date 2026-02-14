import React from 'react';
import { Shield, AlertTriangle, Users, Eye, RefreshCw, Lock, Network, Swords, ShieldCheck, Zap, TrendingUp, Activity } from 'lucide-react';

export function SolutionsSection() {
  const adapIDProblems = [
    { icon: Network, title: 'Fragmented Identity Landscape', description: 'Consolidate scattered identity systems', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Lack of Identity Ownership', description: 'Clear accountability and governance', color: 'from-indigo-500 to-indigo-600' },
    { icon: Eye, title: 'Blind Access Visibility', description: 'Complete access transparency', color: 'from-blue-500 to-indigo-600' },
    { icon: RefreshCw, title: 'Unmanaged Identity Lifecycle', description: 'Automated lifecycle management', color: 'from-sky-500 to-blue-600' },
    { icon: Lock, title: 'Unchecked Account Takeover', description: 'Proactive threat detection', color: 'from-blue-600 to-indigo-700' },
    { icon: Network, title: 'Invisible Lateral Movement', description: 'Track and prevent lateral threats', color: 'from-indigo-600 to-blue-700' }
  ];
  
  const botShieldSolutions = [
    { icon: Swords, title: 'Offensive Security', description: 'Red Team AI Agents', color: 'from-sky-500 to-blue-600' },
    { icon: ShieldCheck, title: 'Defensive Security', description: 'Blue Team AI Agents', color: 'from-sky-500 to-blue-600' },
    { icon: Zap, title: 'Application Delivery Intelligence', description: 'Smart deployment and monitoring', color: 'from-cyan-500 to-blue-600' },
    { icon: TrendingUp, title: 'Risk Prioritization & Remediation', description: 'Orchestrated remediation workflows', color: 'from-blue-600 to-indigo-600' },
    { icon: Activity, title: 'Traffic & Demand Forecasting', description: 'Predictive analytics and scaling', color: 'from-indigo-500 to-blue-600' }
  ];
  
  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* adapID Problems */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              IDENTITY SECURITY
            </span>
            <h2 className="text-5xl mb-4 text-gray-900 font-bold">
              Problems adapID AI Solves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive identity risk management across your entire digital ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adapIDProblems.map((problem, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className={`bg-[#4ac4f3] w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {/* <div className={`bg-gradient-to-br ${problem.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>   */}
                  <problem.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 font-semibold">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* BotShield Solutions */}
        <div>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              THREAT MANAGEMENT
            </span>
            <h2 className="text-5xl mb-4 text-gray-900 font-bold">
              Problems BotShield AI Solves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Autonomous threat exposure management with continuous security validation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botShieldSolutions.map((solution, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className={`bg-[#4ac4f3] w-16 h-16 rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
               {/* <div className={`bg-gradient-to-br ${solution.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>    */}
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900 font-semibold">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
