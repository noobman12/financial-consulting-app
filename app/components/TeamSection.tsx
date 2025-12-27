import React from "react";
import { Image as ImageIcon, User } from "lucide-react";

const teamMembers = [
  {
    name: "Austin Beck",
    role: "Financial Strategy Specialist",
    isActive: false,
  },
  {
    name: "Brooklyn Simmons",
    role: "Risk Management Expert (CFP)",
    isActive: false,
  },
  {
    name: "Operations Team",
    role: "Operations",
    isActive: true,
    bio: "Guiding companies through strategic shifts, scaling operations, and optimizing financial workflows. Skilled in cross-functional leadership and stakeholder engagement to ensure measurable outcomes and sustainable growth.",
    experience: "Contact Us",
  },
  {
    name: "Savannah Nguyen",
    role: "Corporate Finance Advisor (CPA)",
    isActive: false,
  },
  {
    name: "Amélie Laurent",
    role: "Investment Analyst",
    isActive: false,
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 px-4 py-1.5 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#114232]">Our Teams</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Meet Our Finance <br /> Expert Teams
          </h2>
        </div>

        {/* Carousel / Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-8 px-8 md:mx-0 md:px-0">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 transition-all duration-300 ${
                member.isActive ? "w-full md:w-[350px]" : "w-full md:w-[280px]"
              }`}
            >
              {member.isActive ? (
                // Active Card (Jacob Jones style)
                <div className="bg-[#114232] rounded-2xl p-8 h-[500px] flex flex-col text-white relative group cursor-pointer hover:shadow-xl transition-shadow">
                  {/* Avatar/Icon for Active */}
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <User className="w-6 h-6 text-white" />
                     </div>
                     <div>
                        <h3 className="font-bold text-lg">Dedicated Advisors</h3>
                        <p className="text-xs text-gray-300">Expert Team</p>
                     </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm leading-relaxed text-gray-200 mb-auto">
                    {member.bio}
                  </p>
                  
                  {/* Experience Badge */}
                  <div className="mt-6">
                     <span className="inline-block bg-white text-[#114232] text-xs font-bold px-4 py-2 rounded-full">
                        {member.experience}
                     </span>
                  </div>
                  
                  {/* Cursor Mockup */}
                  <div className="absolute top-1/2 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                     {/* Can add cursor icon here if needed */}
                  </div>
                </div>
              ) : (
                // Inactive Card (Image placeholder style)
                <div className="flex flex-col h-full cursor-pointer group">
                  <div className="bg-gray-200 rounded-2xl h-[400px] flex items-center justify-center mb-6 relative overflow-hidden">
                     <ImageIcon className="w-16 h-16 text-white opacity-50" />
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
