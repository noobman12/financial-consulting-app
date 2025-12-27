"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(25);
  const [selectedTime, setSelectedTime] = useState<string | null>("09:00 AM");

  // Mock calendar data
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const offset = 2; // Starts on Tuesday for example

  const timeSlots = [
    "08:00 AM", "09:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM",
    "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
         <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-[#114232] uppercase tracking-wide">Appointment</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Easy Appointments for Your <br />
          Convenience and Clarity
        </h2>
      </div>

      <div className="max-w-5xl mx-auto bg-gray-50 rounded-3xl p-6 md:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Calendar */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Select Date</h3>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              {/* Header */}
              <div className="bg-[#114232] text-white rounded-xl p-3 flex justify-between items-center mb-4">
                <button className="p-1 hover:bg-white/10 rounded"><ChevronLeft className="w-4 h-4" /></button>
                <span className="font-semibold text-sm">October 2024</span>
                <button className="p-1 hover:bg-white/10 rounded"><ChevronRight className="w-4 h-4" /></button>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 text-center mb-2">
                {days.map(day => (
                  <div key={day} className="text-xs font-medium text-gray-400 py-2">{day}</div>
                ))}
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-7 text-center gap-y-2">
                {Array.from({ length: offset }).map((_, i) => (
                  <div key={`empty-${i}`}></div>
                ))}
                {dates.map(date => (
                  <button 
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center mx-auto transition-colors ${
                      selectedDate === date 
                        ? "bg-[#a3e635] text-[#114232] font-bold" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4">Select Time</h3>
            
            {/* Timezone Selector Mock */}
            <div className="relative mb-6">
               <div className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white flex items-center justify-between cursor-pointer">
                  <span className="text-sm text-gray-600">All Team (WIB Central Time Indonesia)</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
               </div>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-1 rounded-lg text-xs font-medium border transition-colors ${
                    selectedTime === time
                      ? "bg-[#a3e635] border-[#a3e635] text-[#114232] font-bold"
                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="flex justify-center pt-10">
            <button className="bg-[#114232] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#0d3326] transition-colors">
              Book Appointment
            </button>
        </div>

      </div>
    </section>
  );
};
