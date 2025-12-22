import React from "react";
import { ArrowRight, Wallet, Layers, TrendingUp, PiggyBank, ShieldCheck, Scale, Banknote } from "lucide-react";

export const CoreServiceSection = () => {
  return (
    <section className="py-20 px-8 md:px-12 lg:px-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block bg-white px-4 py-1.5 rounded-full mb-6 shadow-sm border border-gray-100">
            <span className="text-sm font-semibold text-[#105447]">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] leading-tight max-w-3xl text-center">
            Simplifying Finance with<br />Personalized Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex flex-col gap-5 mb-12">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <Wallet className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Personal Finance Management</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <Banknote className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Business Capitalization</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <ShieldCheck className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Credit Counseling</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <TrendingUp className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Investment Trading</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <PiggyBank className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Budgeting Tools</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col items-start gap-6 h-full">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-[0_0_4px_4px_rgba(87,87,87,0.04)]">
                 <Scale className="w-6 h-6 text-[#105447]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-medium text-[#1b1b1b]">Debt Consolidation</h3>
                <p className="text-sm text-[#575757] leading-relaxed">
                  TrustFin mission is to empower individuals and businesses to achieve financial success and stability through innovative solutions and personalized financial guidance.
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* CTA Button */}
        <button className="flex items-center gap-3 bg-[#105447] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0d4238] transition-colors cursor-pointer shadow-lg shadow-[#105447]/20">
          Get Started <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
};
