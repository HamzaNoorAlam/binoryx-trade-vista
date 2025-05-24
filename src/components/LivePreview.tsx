
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

const LivePreview = () => {
  const [trades, setTrades] = useState([
    { pair: "EUR/USD", amount: 50, type: "UP", payout: 85, status: "won", profit: 42.5 },
    { pair: "GBP/JPY", amount: 25, type: "DOWN", payout: 80, status: "won", profit: 20 },
    { pair: "BTC/USD", amount: 100, type: "UP", payout: 90, status: "lost", profit: -100 },
  ]);

  const assets = [
    { name: "EUR/USD", price: 1.2534, change: "+0.0012", positive: true },
    { name: "GBP/USD", price: 1.3845, change: "-0.0023", positive: false },
    { name: "USD/JPY", price: 149.34, change: "+0.45", positive: true },
    { name: "BTC/USD", price: 43250, change: "+125", positive: true },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Live Trading <span className="text-blue-400">Environment</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            See real-time trades and market movements. Join thousands of active traders making profits daily
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Assets */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Assets</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">{asset.name}</div>
                      <div className="text-sm text-slate-400">Payout: 85%</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-white">{asset.price}</div>
                      <div className={`text-sm ${asset.positive ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 px-3">
                        <ArrowUp className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700 px-3">
                        <ArrowDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Trades */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Recent Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trades.map((trade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <div>
                      <div className="font-semibold text-white">{trade.pair}</div>
                      <div className="text-sm text-slate-400">
                        ${trade.amount} • {trade.type} • {trade.payout}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${trade.status === 'won' ? 'text-green-400' : 'text-red-400'}`}>
                        {trade.status === 'won' ? `+$${trade.profit}` : `-$${Math.abs(trade.profit)}`}
                      </div>
                      <div className={`text-sm px-2 py-1 rounded text-xs ${
                        trade.status === 'won' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                      }`}>
                        {trade.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h3>
            <p className="text-slate-300 mb-6">
              Join over 100,000+ traders who trust Binoryx for their binary options and forex trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4">
                Create Free Account
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-green-400 px-8 py-4">
                Try Demo Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
