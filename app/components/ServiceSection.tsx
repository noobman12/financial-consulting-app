import React from "react";
import { BarChart3, Globe, CreditCard, ListChecks, Plus, ChevronDown, MousePointer2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

// Mock Data for Bar Chart
const barData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 }, // Highlighted
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 8000 }, // Cursor here
  { name: 'Jun', value: 3000 },
  { name: 'Jul', value: 4500 },
];

export const ServiceSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            First Step Toward Building a Secure, Prosperous Financial Future
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Investment Portfolio Management */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-[#114232]">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Investment Portfolio Management</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Personalized investment strategies, portfolio management, and asset allocation tailored to individual or corporate goals.
            </p>
            
            {/* Chart Visual */}
            <div className="bg-gray-50 rounded-2xl p-6 relative">
              <div className="flex justify-between items-start mb-4">
                 <h4 className="font-semibold text-gray-900">Statistic</h4>
                 <div className="bg-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm border border-gray-100">
                    July 2024
                 </div>
              </div>
              
              {/* Tooltip Overlay Mockup */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-40">
                 <div className="text-xs text-gray-500 mb-1">July 2024</div>
                 <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-900">$8,740.00</span>
                    <span className="text-[10px] text-green-600 bg-green-50 px-1 rounded">↗ 51.3%</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400">$2,110.00</span>
                    <span className="text-[10px] text-green-600 bg-green-50 px-1 rounded">↗ 12.1%</span>
                 </div>
              </div>

              <div className="h-48 mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 4 ? '#114232' : index === 2 ? '#114232' : '#e5e7eb'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              {/* Cursor Icon Mockup */}
               <div className="absolute bottom-1/3 left-[60%] transform translate-x-2">
                  <MousePointer2 className="w-6 h-6 text-gray-400 fill-gray-200" />
               </div>
            </div>
          </div>

          {/* 2. Currency Exchange */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow flex flex-col">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-[#114232]">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Currency Exchange</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Personalized investment strategies, portfolio management, and asset allocation tailored to individual or corporate goals.
            </p>
            
            {/* Map Visual Placeholder - Using a CSS pattern for "dots" or similar */}
            <div className="bg-gray-50 rounded-2xl h-48 w-full flex items-center justify-center overflow-hidden relative">
               {/* Simple Dot Pattern to simulate map */}
               <div className="absolute inset-0 opacity-20" 
                    style={{
                        backgroundImage: 'radial-gradient(#114232 1px, transparent 1px)',
                        backgroundSize: '8px 8px'
                    }}>
               </div>
               {/* World Map Silhouette (SVG) - Simplified */}
               <svg viewBox="0 0 100 50" className="w-full h-full text-[#114232] opacity-80 p-4">
                  <path fill="currentColor" d="M20,15 Q25,10 30,15 T40,20 T50,15 T60,20 T70,15 T80,20 T90,15 V35 H10 V15 Z" /> 
                  {/* Just a very abstract shape for now, replacing with something better if needed or text */}
                  <text x="50" y="30" fontSize="8" textAnchor="middle" fill="currentColor">World Map Visualization</text>
               </svg>
            </div>
          </div>

          {/* 3. Budgeting Tools */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-[#114232]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Budgeting Tools</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Personalized investment strategies, portfolio management, and asset allocation tailored to individual or corporate goals.
            </p>
            
            {/* Payment Schedule UI */}
            <div className="border border-gray-200 rounded-2xl p-6">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="font-semibold text-gray-900">Payment Schedule</h4>
                  <button className="flex items-center gap-1 text-xs font-medium border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50">
                     This Month <ChevronDown className="w-3 h-3" />
                  </button>
               </div>
               
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm">
                     Bē
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900">Behance Premium</p>
                     <p className="text-xs text-gray-500">30 Oct 2024</p>
                  </div>
               </div>
            </div>
          </div>

          {/* 4. Financial Planning */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center mb-6 text-[#114232]">
              <ListChecks className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Planning</h3>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Personalized investment strategies, portfolio management, and asset allocation tailored to individual or corporate goals.
            </p>
            
            {/* Saving Plans UI */}
            <div className="bg-gray-50 rounded-2xl p-6">
               <div className="flex justify-between items-center mb-6">
                  <h4 className="font-semibold text-gray-900">Saving Plans</h4>
                  <button className="flex items-center gap-1 text-xs font-medium bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50">
                     <Plus className="w-3 h-3" /> Add
                  </button>
               </div>

               <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-green-100 text-green-700 rounded-lg">
                           <CreditCard className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Financial Saving</span>
                     </div>
                     <div className="text-sm">
                        <span className="font-bold text-gray-900">$10,00.00</span>
                        <span className="text-gray-400">/$30,000.00</span>
                     </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm opacity-60">
                     <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-green-100 text-green-700 rounded-lg">
                           <Globe className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Education</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
