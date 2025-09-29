import {
  Clock,
  Users,
  MapPin,
  Share2,
  UserX,
  MessageSquare,
  ThumbsUp,
  Plus,
  User,
  Search,
  MoreHorizontal,
  Globe,
  Home,
  Settings,
  Bell,
  FileText,
  UsersRound,
  Building,
} from "lucide-react";
import { EmailCaptureForm } from "@/components/email-capture-form";
import { MobileNav } from "@/components/mobile-nav";
import { HourglassAnimation } from "@/components/hourglass-animation";
import laptop from "@/public/laptop.png";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | WaitingWall",
  description:
    "A minimalist social space to share what you're waiting for. Post semi-anonymously, connect with friends, and explore local trends.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <HourglassAnimation />
          <div className="text-3xl sm:text-4xl font-bold text-black">
            WaitingWall
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-black">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-black">
            How It Works
          </a>
          <Link href="/admin/auth/login" className="text-gray-700 hover:text-black">
            <button className="bg-white border border-gray-700 text-gray-700 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </Link>
        </nav>
        <MobileNav />
      </header>

      {/* Hero Section */}
      <section className="px-4 py-8 sm:py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
              Share the Wait.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Every wait matters. Share yours, feel lighter. When you're waiting, you're not alone. It's okay to wait. It's okay to feel. It's okay to share. Something new is coming... Want to see it first? A new kind of social wall where every post vanishes in 24 hours. We're opening the doors slowly. Will you be inside?
            </p>
            <div className="space-y-4">
              <EmailCaptureForm className="max-w-md mx-auto lg:mx-0" />
              <p className="text-sm text-gray-500">
                We'll never share your email.
              </p>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="block md:hidden max-w-[300px] mx-auto">
              <div className="bg-gray-100 rounded-2xl p-4 shadow-lg">
                <div className="bg-white rounded-lg p-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Image src={laptop} alt="WaitingWall App Screenshot" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 py-12 sm:py-16 bg-gray-50 rounded-lg mx-4 sm:mx-auto"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {/* Feature 1: 24-Hour Ephemeral */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                24-Hour Ephemeral
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Posts disappear after 24 hours
              </p>
            </div>

            {/* Feature 2: Circles */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                Circles
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Share with your friends
              </p>
            </div>

            {/* Feature 6: Corners */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <UsersRound className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                Corners
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Share thoughts without your name
              </p>
            </div>

            {/* Feature 3: Local & Global Trends */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                Local & Global Trends
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                See what's happening around
              </p>
            </div>

            {/* Feature 4: Shareable Cards */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                Shareable Cards
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Easily share posts elsewhere
              </p>
            </div>

            {/* Feature 5: Semi Anonymity */}
            <div className="text-center space-y-2 p-2 sm:p-1 rounded-md transition duration-300 ease-in-out hover:bg-white hover:shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                <UserX className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black" />
              </div>
              <h3 className="text-xs sm:text-sm lg:text-lg font-semibold text-gray-800">
                Semi Anonymity
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Post without revealing your identity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="px-4 py-12 sm:py-16 bg-white rounded-lg mx-auto"
      >
        <div className="bg-white flex flex-col items-center justify-center px-4 py-8 sm:p-2">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 lg:gap-16 items-start">
            {/* Left Column: How It Works Section */}
            <div className="w-full text-center md:text-left py-8 md:py-12 order-1 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-6 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-12">
                <div className="flex flex-col items-center text-center max-w-[120px] sm:max-w-none">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-2" />
                  <p className="text-xs sm:text-xs text-gray-700 font-medium leading-tight">
                    Sign up and start posting
                  </p>
                </div>
                <div className="text-gray-400 text-xl font-light hidden sm:block">
                  {">"}
                </div>
                <div className="flex flex-col items-center text-center max-w-[120px] sm:max-w-none">
                  <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 mb-2" />
                  <p className="text-xs sm:text-xs text-gray-700 font-medium leading-tight">
                    Like and comment on posts
                  </p>
                </div>
              </div>
              <div className="max-w-4xl text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-6">
                  What People Are Saying
                </h2>
                <div className="space-y-8">
                  <EmailCaptureForm className="max-w-md" />
                </div>
              </div>
            </div>

            {/* Right Column: Mobile Screen Mockups Section */}
            <div className="hidden md:flex flex-col md:flex-row gap-8 w-full py-8 md:py-12 justify-center order-2 md:order-2">
              {/* Left Mobile Screen Mockup */}
              <div className="flex-1 bg-gray-100 rounded-3xl shadow-xl overflow-hidden flex-col max-w-sm mx-auto w-full">
                {/* Top Bar */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Some</h2>
                  <Bell className="w-6 h-6 text-gray-600" />
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Card 1 */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                    </div>
                    <p className="text-sm text-gray-800">
                      Warning for my eating for order
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <div className="flex-1 h-4 bg-gray-200 rounded"></div>
                    </div>
                    <p className="text-sm text-gray-800">
                      Coounnd with your clam-óarore
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Placeholder for more content */}
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex justify-around items-center p-3 border-t border-gray-200 bg-white">
                  <Home className="w-6 h-6 text-gray-800" />
                  <Search className="w-6 h-6 text-gray-400" />
                  <Plus className="w-6 h-6 text-gray-400" />
                  <MessageSquare className="w-6 h-6 text-gray-400" />
                  <User className="w-6 h-6 text-gray-400" />
                </div>
              </div>

              {/* Right Mobile Screen Mockup */}
              <div className="flex-1 bg-gray-100 rounded-3xl shadow-xl overflow-hidden flex flex-col max-w-xs mx-auto w-full h-96 mt-7">
                {/* Top Bar */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Empley
                  </h2>
                  <Settings className="w-6 h-6 text-gray-600" />
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {/* Card 1 */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-800">
                        Gecaues
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">
                      Will shulking ane wise t'nnce
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        4ramo thom
                      </span>
                    </div>
                    <p className="text-sm text-gray-800">
                      4 coor opce sleet ceay to avand
                    </p>
                  </div>

                  {/* Placeholder for more content */}
                  <div className="h-20 bg-gray-100 rounded-lg"></div>
                  <div className="h-20 bg-gray-100 rounded-lg"></div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex justify-around items-center p-3 border-t border-gray-200 bg-white">
                  <User className="w-6 h-6 text-gray-800" />
                  <Search className="w-6 h-6 text-gray-400" />
                  <Plus className="w-6 h-6 text-gray-400" />
                  <Users className="w-6 h-6 text-gray-400" />
                  <MoreHorizontal className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <HourglassAnimation />
              <div className="text-2xl font-bold text-black">WaitingWall</div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-black transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-black transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/faq" className="hover:text-black transition-colors text-xs sm:text-sm">
                FAQ
              </Link>
              <Link href="/investors" className="hover:text-black transition-colors text-xs sm:text-sm flex items-center gap-1">
                <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                Investors
              </Link>
              <Link href="/admin/auth/login" className="hover:text-black transition-colors text-xs sm:text-sm">
                Sign In
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © 2025 WaitingWall. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}