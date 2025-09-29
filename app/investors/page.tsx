import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building, TrendingUp, Users, Globe, Shield } from "lucide-react";
import { RegisterInvestorForm } from "@/components/create-investor";

export const metadata: Metadata = {
  title: "Investors | WaitingWall",
  description: "Investment opportunities in WaitingWall - The future of ephemeral social networking.",
};

const features = [
  {
    icon: Users,
    title: "Growing User Base",
    description: "Rapidly expanding community of authentic users seeking genuine connections."
  },
  {
    icon: Globe,
    title: "Global Potential",
    description: "Scalable platform with potential for worldwide adoption across diverse markets."
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Built with privacy and ephemeral content at its core - meeting modern user expectations."
  },
  {
    icon: TrendingUp,
    title: "Market Position",
    description: "Unique positioning in the social media landscape with focus on authentic, temporary sharing."
  }
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building className="w-10 h-10 text-gray-700" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Invest in WaitingWall</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in building the future of authentic social connectivity. 
            We're creating a space where people can share what matters most - in the moment.
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Invest in WaitingWall?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Opportunity</h3>
                  <p className="text-gray-700 mb-4">
                    The social media landscape is evolving. Users are seeking more authentic, 
                    less permanent ways to connect. WaitingWall addresses this need with our 
                    unique 24-hour ephemeral content model.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-700 mb-4">
                    We believe in creating social spaces that respect user privacy while 
                    fostering genuine connections. Our platform removes the pressure of 
                    permanent digital footprints.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Strategy</h3>
                  <ul className="text-gray-700 list-disc list-inside space-y-2">
                    <li>Expand feature set based on user feedback</li>
                    <li>Strategic partnerships with community platforms</li>
                    <li>Mobile-first approach with planned native apps</li>
                    <li>Monetization through premium features</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-4">
                Ready to learn more about investment opportunities? We'd love to connect 
                and discuss how we can build the future of social media together.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:investors@waitingwall.com" className="text-black hover:underline">
                    investors@waitingwall.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+15551234567" className="text-black hover:underline">
                    +1 (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-gray-50 rounded-lg p-8 sticky top-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Express Interest</h2>
              <p className="text-gray-600">
                Fill out this form and our team will contact you with more details.
              </p>
            </div>
            <RegisterInvestorForm />
            <p className="text-sm text-gray-500 text-center mt-4">
              We respect your privacy and will never share your information with third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}