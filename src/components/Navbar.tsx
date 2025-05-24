
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Binoryx
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Home</a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">About</a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Features</a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Contact</a>
            <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">FAQ</a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-green-400 hover:bg-slate-800">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-green-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Home</a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">About</a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Features</a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">Contact</a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">FAQ</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-slate-300 hover:text-green-400 hover:bg-slate-800">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
