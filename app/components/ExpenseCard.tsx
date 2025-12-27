import React from "react";
import { MoreVertical, Image as ImageIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

// Mock Data for the Chart matching the visual proportions and legend
const data = [
  { name: "Food", value: 50, color: "#114232" }, // Brand Dark Green
  { name: "Education", value: 48, color: "#a3e635" }, // Brand Lime Green
  { name: "Other", value: 33, color: "#f3f4f6" }, // Light Grey
];

export const ExpenseCard = () => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-900 text-lg">Total Expenses</h3>
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      {/* Chart Container */}
      <div className="h-64 w-full relative flex items-center justify-center">
        
        {/* Inner Dashed Circle Background - Subtle visual aid */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-40 h-40 rounded-full border border-dashed border-gray-200"></div>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={95}
              paddingAngle={5}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              stroke="none"
              cornerRadius={10} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Central Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-sm font-medium text-gray-400 mb-1">Totals</span>
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">$10.500</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between mt-6 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-lg font-bold text-gray-900">{item.value}%</span>
            </div>
            <span className="text-xs text-gray-400 font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="w-full mt-8 py-4 border border-gray-100 rounded-2xl text-sm font-bold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
        More details
      </button>
    </div>
  );
};
