import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | WaitingWall",
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid gap-8">
            {/* Section 1 */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using WaitingWall, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            {/* Section 2 */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>You must be at least 13 years old to use this service</li>
                <li>You may not use the service for any illegal purpose</li>
                <li>You are responsible for all content you post</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6" />
                3. Content Guidelines
              </h2>
              <p className="text-gray-700 mb-4">
                All content posted on WaitingWall must comply with our community guidelines:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>No hate speech or harassment</li>
                <li>No spam or commercial content</li>
                <li>Respect other users' privacy</li>
                <li>No illegal content</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Modifications</h2>
              <p className="text-gray-700">
                WaitingWall reserves the right to modify or discontinue, temporarily or permanently, the service with or without notice.
              </p>
            </section>

            {/* Contact */}
            <div className="text-center mt-8 p-6 border rounded-lg">
              <p className="text-gray-700">
                Questions about our Terms of Service?{" "}
                <a href="mailto:legal@waitingwall.com" className="text-black font-semibold hover:underline">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}