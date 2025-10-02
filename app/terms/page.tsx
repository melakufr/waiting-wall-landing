

import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { EMAIL_SUPPORT,EFFECTIVE_DATE } from "@/lib/const";



export const metadata: Metadata = {
  title: "Terms & Conditions | WaitingWall",
  description: "Terms and conditions for using WaitingWall service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effective: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid gap-8">
            {/* Welcome Section */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Welcome to WaitingWall (Prototype)
              </h2>
              <p className="text-gray-700 mb-4">
                By using this site, you agree to the following terms and conditions:
              </p>
            </section>

            {/* Content Guidelines */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Content & Usage
              </h2>
              <ul className="text-gray-700 list-disc list-inside space-y-3">
                <li>Posts last 24 hours only</li>
                <li>You may post anonymously or with a username</li>
                <li>Do not post harmful, offensive, or illegal content</li>
                <li>This is an experimental version — features may change anytime</li>
                <li>WaitingWall is not responsible for user content</li>
              </ul>
            </section>

            {/* Consequences */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Platform Misuse
              </h2>
              <p className="text-gray-700">
                If you misuse the platform, we may remove your posts or block your access.
              </p>
            </section>

            {/* Contact */}
            <div className="text-center mt-8 p-6 border rounded-lg">
              <p className="text-gray-700">
                Questions about our Terms & Conditions?{" "}
                <span className="text-black font-semibold">
                  Contact us: {EMAIL_SUPPORT}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}