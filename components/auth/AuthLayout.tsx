import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="relative rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
          {/* Decorative top accent */}
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"></div>

          {/* Card content */}
          <div className="bg-white/90 backdrop-blur-sm">
            {/* Optional subtle background pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:20px_20px]" />

            {children}

            {/* Footer */}
            <div className="mt-8 text-center text-xs text-gray-500 leading-relaxed">
              <p>
                By continuing, you agree to our{" "}
                <span className="underline underline-offset-2 hover:text-gray-700 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="underline underline-offset-2 hover:text-gray-700 cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Branding (optional) */}
        {/* <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div> */}
      </div>
    </main>
  );
}
