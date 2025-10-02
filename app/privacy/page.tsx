import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { EMAIL_SUPPORT } from "@/lib/const";



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
            We value your privacy. In this prototype stage:
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="grid gap-8">
            {/* Privacy Practices */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Privacy Practices
              </h2>
              <ul className="text-gray-700 list-disc list-inside space-y-3">
                <li>We only collect your email (for signup or interest)</li>
                <li>Posts disappear after 24 hours (some may stay briefly in logs for testing)</li>
                <li>We don't sell or share your data</li>
                <li>This site uses basic analytics to understand usage</li>
              </ul>
            </section>

            {/* Contact & Future */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact & Future Updates
              </h2>
              <p className="text-gray-700 mb-4">
                For any concerns, contact: {EMAIL_SUPPORT}
              </p>
              <p className="text-gray-700">
                A full Privacy Policy will be published at launch.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}