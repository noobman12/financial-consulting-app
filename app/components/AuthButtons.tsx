"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { signout } from "@/app/auth/actions";

export const AuthButtons = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (loading) {
    return <div className="h-10 w-20 bg-gray-100 rounded-full animate-pulse"></div>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700 hidden md:block">
          {user.email?.split('@')[0]}
        </span>
        <button 
          onClick={() => signout()}
          className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200 shadow-sm"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-end gap-4">
      <Link href="/login">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer border border-gray-200 shadow-sm">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-[#114232] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0d3326] transition-colors cursor-pointer shadow-sm">
          Sign Up
        </button>
      </Link>
    </div>
  );
};