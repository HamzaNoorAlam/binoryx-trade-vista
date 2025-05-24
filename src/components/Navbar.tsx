
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Binoryx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-green-400 transition-colors">Home</Link>
            <Link to="/about" className="text-muted-foreground hover:text-green-400 transition-colors">About</Link>
            <Link to="/faqs" className="text-muted-foreground hover:text-green-400 transition-colors">FAQs</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-green-400 transition-colors">Contact</Link>
            <Link to="/blog" className="text-muted-foreground hover:text-green-400 transition-colors">Blog</Link>
          </div>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Balance: ${user?.balance?.toFixed(2)}
                </span>
                <Button 
                  onClick={() => navigate("/dashboard")}
                  variant="ghost" 
                  className="text-muted-foreground hover:text-green-400"
                >
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="ghost">
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-green-400">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-green-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-muted-foreground hover:text-green-400 transition-colors">Home</Link>
              <Link to="/about" className="text-muted-foreground hover:text-green-400 transition-colors">About</Link>
              <Link to="/faqs" className="text-muted-foreground hover:text-green-400 transition-colors">FAQs</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-green-400 transition-colors">Contact</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-green-400 transition-colors">Blog</Link>
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2 pt-4">
                  <span className="text-sm text-muted-foreground">
                    Balance: ${user?.balance?.toFixed(2)}
                  </span>
                  <Button asChild variant="ghost" className="justify-start">
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                  <Button onClick={handleLogout} variant="ghost" className="justify-start">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4">
                  <Button asChild variant="ghost">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
