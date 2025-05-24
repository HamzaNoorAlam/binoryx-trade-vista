
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, DollarSign, Globe, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Fast Execution",
      description: "Lightning-fast trade execution with minimal latency for optimal trading experience"
    },
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "Bank-level security with SSL encryption and regulated trading environment"
    },
    {
      icon: TrendingUp,
      title: "90% Payout",
      description: "Industry-leading payout rates up to 90% on successful binary options trades"
    },
    {
      icon: DollarSign,
      title: "Low Minimum",
      description: "Start trading with just $10 minimum deposit and $1 minimum trade amount"
    },
    {
      icon: Globe,
      title: "Multiple Assets",
      description: "Trade forex, cryptocurrencies, commodities, and stock indices all in one platform"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade anywhere, anytime with our fully responsive mobile-optimized platform"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-green-400">Binoryx</span>?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience professional trading with cutting-edge technology, competitive payouts, and exceptional support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-colors">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
