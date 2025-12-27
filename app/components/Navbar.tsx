"use client";

import React from "react";
import { LayoutTemplate, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import{ AuthButtons} from "./AuthButtons";
export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900";
  };

  const isServiceActive = pathname.startsWith("/service");

  return (
    <header className="flex items-center justify-between lg:justify-start lg:gap-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
        <div className="bg-lime-400 p-1.5 rounded-md">
          <LayoutTemplate className="w-5 h-5 text-green-900" />
        </div>
        <span>TrustFin</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <Link href="/" className={`${isActive("/")} transition-colors`}>
          Home
        </Link>
        <Link href="/about" className={`${isActive("/about")} transition-colors`}>
          About
        </Link>
        
        {/* Service Dropdown */}
        <div className="relative group">
          <Link href="/service" className={`flex items-center gap-1 ${isServiceActive ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900"} transition-colors`}>
            Services <ChevronDown className="w-4 h-4" />
          </Link>
          <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 z-50">
            <Link href="/service" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              All Services
            </Link>
            <Link href="/service/team" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              Our Team
            </Link>
            <Link href="/service/satisfied-customers" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              Satisfied Customers
            </Link>
            <Link href="/service/case-studies" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              Case Studies
            </Link>
            <Link href="/service/industry-insight" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              Industry Insight
            </Link>
            <Link href="/service/inquiry" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg">
              Inquiry
            </Link>
          </div>
        </div>

        <Link href="/pricing" className={`${isActive("/pricing")} transition-colors`}>
          Pricing
        </Link>
        
        <Link href="/contact" className={`${isActive("/contact")} transition-colors`}>
          Contact
        </Link>
      </nav>

      {/* Right Action Button */}
      <div className="hidden lg:block ml-auto">
        
      </div>
    </header>
  );
};
