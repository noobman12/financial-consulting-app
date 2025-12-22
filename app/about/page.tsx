import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CTASection } from "../components/CTASection";
import { SatisfiedCustomersSection } from "../components/SatisfiedCustomersSection";
import { OurHistorySection } from "../components/OurHistorySection";
import { CoreServiceSection } from "../components/CoreServiceSection";
import { 
  Rocket, 
  Share2, 
  Award, 
  Clock,
  Image as ImageIcon,
  Plus,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowRightLeft,
  CreditCard,
  MoreVertical
} from "lucide-react";
import { TeamSection } from "../components/TeamSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <div className="px-8 md:px-12 lg:px-20 py-6">
        <Navbar />
      </div>

      {/* Hero Text */}
      <section className="pt-10 pb-20 px-8 md:px-12 lg:px-20 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Building a Stronger Financial Foundation for a Brighter Tomorrow
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Our mission is to empower individuals and businesses by providing the tools, insights, and strategies necessary for sustainable financial growth.
        </p>
      </section>

      {/* Main Content Split */}
      <section className="px-8 md:px-12 lg:px-20 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Visuals */}
          <div className="w-full lg:w-1/2 relative min-h-[600px] flex items-center justify-center">
            
            {/* Main Gray Background */}
            <div className="w-[85%] h-[500px] bg-gray-200 rounded-3xl relative flex items-center justify-center">
               <ImageIcon className="w-20 h-20 text-white/50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <Plus className="w-10 h-10 text-white fill-white" strokeWidth={4} />
               </div>
            </div>

            {/* Floating Element: My Balance (Top Left) */}
            <div className="absolute top-0 left-0 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 w-64 z-10">
              <p className="text-xs font-semibold text-gray-500 mb-1">My Balance</p>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl font-bold text-gray-900">$8,171.32</h3>
                <span className="text-[10px] font-bold text-[#114232] bg-green-50 px-1.5 py-0.5 rounded">+ 6,2%</span>
                <span className="text-[10px] text-gray-400">Compare to last month</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#114232] text-white text-xs font-medium py-2 rounded-lg hover:bg-[#0d3326] transition-colors">
                  Send Money
                </button>
                <button className="flex-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Request money
                </button>
              </div>
            </div>

            {/* Floating Element: My Card (Bottom Right/Center) */}
            <div className="absolute -bottom-10 right-0 md:right-10 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 w-72 z-20">
              <div className="flex justify-between items-center mb-3">
                 <h4 className="font-bold text-gray-900 text-sm">My card</h4>
                 <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              
              {/* Credit Card Visual */}
              <div className="bg-[#114232] rounded-xl p-4 mb-5 relative overflow-hidden text-white shadow-lg">
                <div className="flex justify-between items-start mb-6">
                   <div className="w-8 h-5 bg-yellow-500/80 rounded"></div>
                   <MoreVertical className="w-4 h-4 text-white/50" />
                </div>
                <div className="mb-4">
                   <p className="font-mono text-lg tracking-widest">8763 2736 9873 0329</p>
                </div>
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-[10px] text-white/70 uppercase mb-0.5">Card Holder</p>
                      <p className="text-xs font-medium">Bessie Copper</p>
                   </div>
                   <div className="flex items-end gap-4">
                      <div>
                        <p className="text-[10px] text-white/70 uppercase mb-0.5">Expired</p>
                        <p className="text-xs font-medium">10/28</p>
                      </div>
                      <span className="text-lg font-bold italic">VISA</span>
                   </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between px-2">
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Transfer</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                       <ArrowDownLeft className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Receive</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                       <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Top Up</span>
                 </div>
                 <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                       <ArrowRightLeft className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-medium">Swap</span>
                 </div>
              </div>
            </div>

          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-gray-100 px-3 py-1 rounded text-xs font-semibold text-[#114232] mb-4">
              About Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-10 leading-tight">
              Simplifying Finance with Personalized Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Mission & Vision */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#114232]">
                   <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission & Vision</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>

              {/* Card 2: Leadership Team */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#114232]">
                   <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership Team</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our leadership team is composed of visionary thinkers and industry experts who are committed to guiding the company with integrity, innovation, and excellence.
                </p>
              </div>

              {/* Card 3: Awards & Recognition */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#114232]">
                   <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Awards & Recognition</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Over the years, our dedication to innovation, transparency, and client satisfaction has earned us numerous awards and accolades from leading industry organizations.
                </p>
              </div>

              {/* Card 4: Company Timeline */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4 text-[#114232]">
                   <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Company Timeline</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Our journey in the finance industry is a story of growth, innovation, and dedication to delivering exceptional financial solutions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SatisfiedCustomersSection />

      <OurHistorySection />

      <CoreServiceSection />

      <TeamSection />

      <CTASection />
      <Footer />
    </div>
  );
}
