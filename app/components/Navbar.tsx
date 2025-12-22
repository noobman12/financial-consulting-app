"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900";
  };

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
          About Us
        </Link>
        <Link href="/service" className={`${isActive("/service")} transition-colors`}>
          Service
        </Link>
        <Link href="/pricing" className={`${isActive("/pricing")} transition-colors`}>
          Pricing
        </Link>
        <Link href="/industry-insight" className={`${isActive("/industry-insight")} transition-colors`}>
          Industry Insight
        </Link>

      </nav>
    </header>
  );
};
