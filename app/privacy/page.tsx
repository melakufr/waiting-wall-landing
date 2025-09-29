import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Database, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | WaitingWall",
  description: "How we protect and handle your data at WaitingWall.",
};

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8 text-gray-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal data.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid gap-8">
            {/* Data Collection */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6" />
                Data We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect minimal data to provide and improve our service:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Account information (email, username)</li>
                <li>Content you post (automatically deleted after 24 hours)</li>
                <li>Device and usage data for analytics</li>
                <li>Location data (optional, for local trends)</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                How We Use Your Data
              </h2>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes</li>
                <li>To provide customer support</li>
                <li>To gather analysis for service improvement</li>
                <li>To monitor usage of the service</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6" />
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="text-gray-700 list-disc list-inside space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify or update your personal data</li>
                <li>Delete your account and associated data</li>
                <li>Restrict or object to our processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            {/* Ephemeral Nature */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ephemeral Content</h2>
              <p className="text-gray-700">
                All user posts are automatically deleted after 24 hours. This is a core feature of WaitingWall 
                designed to protect your privacy and encourage authentic sharing.
              </p>
            </section>

            {/* Contact */}
            <div className="text-center mt-8 p-6 border rounded-lg">
              <p className="text-gray-700">
                For privacy-related questions, contact our Data Protection Officer at{" "}
                <a href="mailto:privacy@waitingwall.com" className="text-black font-semibold hover:underline">
                  privacy@waitingwall.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}