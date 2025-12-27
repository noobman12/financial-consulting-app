"use client";

import React from "react";
import Link from "next/link";

export const AuthButtons = () => {
  return (
    <div className="flex justify-end gap-4">
      <Link href="#">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200 shadow-sm">
          Login
        </button>
      </Link>
      <Link href="#">
        <button className="bg-[#114232] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0d3326] transition-colors cursor-pointer shadow-sm">
          Sign Up
        </button>
      </Link>
    </div>
  );
};