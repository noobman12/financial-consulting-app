import Link from 'next/link'
import { LayoutTemplate, Mail } from "lucide-react";

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
        <div className="flex justify-center mb-6">
            <div className="bg-lime-100 p-4 rounded-full">
                <Mail className="w-10 h-10 text-[#114232]" />
            </div>
        </div>
        
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
            Check your email
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
            We've sent you a confirmation link. Please check your email to verify your account.
        </p>
        
        <div className="mt-8">
            <Link 
                href="/login"
                className="font-medium text-[#114232] hover:text-[#0d3326] hover:underline"
            >
                Back to login
            </Link>
        </div>
      </div>
    </div>
  )
}