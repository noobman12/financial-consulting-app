import React from "react";
import { Facebook, Linkedin, Twitter, Sparkles } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-8 md:px-12 lg:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-20">
          {/* Logo Column */}
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[#a3e635] rounded flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#114232]" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-gray-900">TrustFin</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Press</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link href="/service" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Personal Finance</Link></li>
                <li><Link href="/service" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Investment Planning</Link></li>
                <li><Link href="/service" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Business Advisory</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Guides</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">FAQs</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Support</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Contact Support</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Status</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-[#114232] text-sm transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 TrustFin, All right reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-[#114232] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#114232] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#114232] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
