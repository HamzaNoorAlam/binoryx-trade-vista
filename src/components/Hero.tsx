
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, Play } from "lucide-react";

const Hero = () => {
  const [price, setPrice] = useState(1.2534);
  const [isRising, setIsRising] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.0010;
      setPrice(prev => {
        const newPrice = prev + change;
        setIsRising(change > 0);
        return Math.max(1.2000, Math.min(1.3000, newPrice));
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Trade </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Binary Options
              </span>
              <span className="text-white"> & Forex</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join millions of traders on Binoryx. Start with as little as $10 and earn up to 90% profit 
              on successful trades. Fast execution, real-time charts, and professional tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-green-500/25"
              >
                Start Trading Now
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-green-400 px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">90%</div>
                <div className="text-sm text-slate-400">Max Profit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$10</div>
                <div className="text-sm text-slate-400">Min Deposit</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </div>
          </div>

          {/* Live Trading Preview */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">EUR/USD</h3>
                <div className={`flex items-center space-x-2 ${isRising ? 'text-green-400' : 'text-red-400'}`}>
                  {isRising ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  <span className="font-mono text-xl">{price.toFixed(5)}</span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="h-32 bg-slate-900 rounded-lg mb-4 flex items-end justify-center p-2">
                <div className="flex items-end space-x-1 h-full w-full max-w-xs">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 rounded-t transition-all duration-300 ${
                        Math.random() > 0.5 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ height: `${Math.random() * 80 + 20}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Trade Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold">
                  <ArrowUp className="mr-2 h-5 w-5" />
                  UP
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  DOWN
                </Button>
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm text-slate-400">Investment: $50 • Payout: 85%</div>
                <div className="text-sm text-green-400">Potential Profit: $42.50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
