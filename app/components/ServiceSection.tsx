import React from "react";
import { BarChart3, Globe, MousePointer2 } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

// Mock Data for Bar Chart
const barData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 6000 },
  { name: 'Apr', value: 2000 },
  { name: 'May', value: 8000 },
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
             <div className="flex items-center gap-2">
                 <BarChart3 className="w-4 h-4 text-[#114232]" />
                 <span className="text-sm font-semibold text-[#114232]">Analytics</span>
             </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
            First Step Toward Building a Secure, Prosperous Financial Future
          </h2>
        </div>

        {/* Grid Layout - 2 Big Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. Monthly Overview (Bar Chart) */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Monthly Overview</h3>
                    <p className="text-sm text-gray-500">Track your financial growth over time</p>
                </div>
                <div className="bg-white px-3 py-1 rounded-lg text-xs font-medium shadow-sm border border-gray-100">
                    Year 2024
                </div>
            </div>

            {/* Chart Area */}
            <div className="h-64 w-full relative">
                {/* Tooltip Overlay Mockup */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="text-xs text-gray-500 mb-1">May 2024</div>
                     <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-gray-900">$8,740.00</span>
                        <span className="text-[10px] text-green-600 bg-green-50 px-1 rounded">↗ 51.3%</span>
                     </div>
                </div>

                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                      {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 4 ? '#114232' : '#e5e7eb'} className="transition-all duration-300 hover:opacity-80" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* Cursor Icon Mockup */}
               <div className="absolute top-[20%] left-[65%] transform translate-x-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <MousePointer2 className="w-6 h-6 text-gray-400 fill-gray-200" />
               </div>
            </div>
            
            {/* Legend/Footer */}
            <div className="mt-6 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#114232]"></div>
                    <span className="text-xs font-medium text-gray-600">Income</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-xs font-medium text-gray-600">Expenses</span>
                </div>
            </div>
          </div>

          {/* 2. User Distribution (Map) */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden">
             <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">User Distribution</h3>
                    <p className="text-sm text-gray-500">Global reach of our financial services</p>
                </div>
                <Globe className="w-6 h-6 text-gray-300" />
            </div>

            {/* Map Visual Placeholder */}
            <div className="h-64 w-full relative flex items-center justify-center">
               {/* Simplified World Map SVG */}
               <svg viewBox="0 0 800 400" className="w-full h-full text-[#114232] opacity-10">
                  <path fill="currentColor" d="M100,100 Q150,50 200,100 T300,120 T400,100 T500,120 T600,100 T700,120 V300 H100 V100 Z" />
               </svg>
               
               {/* Location Markers */}
               <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#114232] rounded-full ring-4 ring-green-100 animate-pulse"></div>
               <div className="absolute top-[40%] right-[30%] w-3 h-3 bg-[#114232] rounded-full ring-4 ring-green-100 animate-pulse delay-75"></div>
               <div className="absolute bottom-[40%] left-[45%] w-3 h-3 bg-[#114232] rounded-full ring-4 ring-green-100 animate-pulse delay-150"></div>
            </div>

            {/* Stats Sidebar/Footer */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">North America</p>
                    <p className="font-bold text-gray-900">85%</p>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-400 mb-1">Europe</p>
                    <p className="font-bold text-gray-900">62%</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
