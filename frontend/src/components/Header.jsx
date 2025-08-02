import React from "react";
import { Link } from "react-router-dom";
import { Video } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Video className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Meetverse</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="hidden md:inline-flex px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition font-medium">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-lg font-semibold">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
