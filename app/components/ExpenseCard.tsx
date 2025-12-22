import React from "react";
import { MoreVertical, Image as ImageIcon } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";

// Mock Data for the Chart
const data = [
  { name: "Food", value: 50, color: "#15803d" }, // Dark Green
  { name: "Education", value: 48, color: "#86efac" }, // Light Green
  { name: "Other", value: 33, color: "#f3f4f6" }, // Grey
];

export const ExpenseCard = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      {/* Background Icon Placeholder */}
      <div className="absolute top-1/4 opacity-20">
        <ImageIcon className="w-32 h-32 text-gray-500" />
      </div>

      {/* Floating Card */}
      <div className="bg-white p-6 rounded-3xl shadow-xl w-80 relative z-10 mt-20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-gray-900">Total Expenses</h3>
          <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
        </div>

        {/* Chart */}
        <div className="h-48 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  value="$10.500"
                  position="center"
                  className="text-2xl font-bold fill-gray-900"
                />
                <Label
                  value="Totals"
                  position="center"
                  dy={-20}
                  className="text-xs text-gray-500"
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Custom Central Text Overlay if Label doesn't work perfectly */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xs text-gray-500 mb-1">Totals</span>
            <span className="text-2xl font-bold text-gray-900">$10.500</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-6 px-2">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#15803d]"></div>
              <span className="text-sm font-bold text-gray-900">50%</span>
            </div>
            <span className="text-xs text-gray-500">Food</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#86efac]"></div>
              <span className="text-sm font-bold text-gray-900">48%</span>
            </div>
            <span className="text-xs text-gray-500">Education</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#f3f4f6]"></div>
              <span className="text-sm font-bold text-gray-900">33%</span>
            </div>
            <span className="text-xs text-gray-500">Other</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-6 py-3 border border-gray-100 rounded-xl text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
          More details
        </button>
      </div>
    </div>
  );
};
