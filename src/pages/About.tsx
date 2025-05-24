
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-green-400">Binoryx</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing binary options trading with cutting-edge technology, 
              transparent practices, and unwavering commitment to trader success.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize financial trading by providing accessible, secure, and profitable 
                binary options trading opportunities for traders worldwide. We believe everyone 
                deserves the chance to participate in financial markets.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading binary options platform, known for innovation, 
                transparency, and exceptional trader experience. We're building the future 
                of online trading.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500K+</div>
              <div className="text-muted-foreground">Active Traders</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">190+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Awards</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>

          {/* Regulation & Security */}
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Regulated & Secure</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Binoryx is regulated by international financial authorities and employs 
              bank-level security measures to protect your funds and personal information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-background border border-border px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">SSL Encrypted</span>
              </div>
              <div className="bg-background border border-border px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">CFTC Regulated</span>
              </div>
              <div className="bg-background border border-border px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">Segregated Funds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
