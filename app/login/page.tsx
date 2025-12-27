import { login, signup } from '../auth/actions'
import Link from 'next/link'
import { LayoutTemplate } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 font-bold text-2xl text-gray-900 mb-6">
            <div className="bg-lime-400 p-2 rounded-lg">
                <LayoutTemplate className="w-6 h-6 text-green-900" />
            </div>
            <span>TrustFin</span>
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/signup" className="font-medium text-[#114232] hover:text-[#0d3326]">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#114232] sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-3 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#114232] sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              formAction={login}
              className="group relative flex w-full justify-center rounded-full bg-[#114232] px-3 py-3 text-sm font-semibold text-white hover:bg-[#0d3326] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114232] shadow-lg shadow-green-900/20 transition-all"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}