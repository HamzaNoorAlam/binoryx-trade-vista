
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUp, ArrowDown, Clock } from "lucide-react";
import { toast } from "sonner";

const Trading = () => {
  const { user, logout } = useAuth();
  const [amount, setAmount] = useState("10");
  const [timeframe, setTimeframe] = useState("30");
  const [selectedAsset, setSelectedAsset] = useState("EUR/USD");
  const [countdown, setCountdown] = useState(0);
  const [isTradeActive, setIsTradeActive] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isTradeActive && countdown === 0) {
      // Simulate trade result
      const isWin = Math.random() > 0.4; // 60% win rate for demo
      const profit = isWin ? parseFloat(amount) * 0.8 : -parseFloat(amount);
      
      toast.success(
        isWin 
          ? `Trade Won! Profit: +$${profit.toFixed(2)}` 
          : `Trade Lost! Loss: $${Math.abs(profit).toFixed(2)}`
      );
      setIsTradeActive(false);
    }
  }, [countdown, isTradeActive, amount]);

  const handleTrade = (direction: 'up' | 'down') => {
    if (parseFloat(amount) > user.balance) {
      toast.error("Insufficient balance");
      return;
    }

    setIsTradeActive(true);
    setCountdown(parseInt(timeframe));
    toast.info(`Trade placed: ${direction.toUpperCase()} on ${selectedAsset}`);
  };

  if (!user) {
    return null;
  }

  const assets = [
    { symbol: "EUR/USD", price: "1.0875", change: "+0.12%" },
    { symbol: "GBP/USD", price: "1.2634", change: "-0.08%" },
    { symbol: "USD/JPY", price: "148.92", change: "+0.34%" },
    { symbol: "BTC/USD", price: "43,250", change: "+2.45%" },
    { symbol: "ETH/USD", price: "2,580", change: "+1.89%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Trading</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Balance: ${user.balance}</span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{selectedAsset} Chart</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-2">
                      {assets.find(a => a.symbol === selectedAsset)?.price}
                    </div>
                    <div className="text-green-400">
                      {assets.find(a => a.symbol === selectedAsset)?.change}
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                      TradingView Chart Integration Area
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trading Panel */}
          <div className="space-y-6">
            {/* Asset Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {assets.map((asset) => (
                    <Button
                      key={asset.symbol}
                      variant={selectedAsset === asset.symbol ? "default" : "outline"}
                      className="w-full justify-between"
                      onClick={() => setSelectedAsset(asset.symbol)}
                    >
                      <span>{asset.symbol}</span>
                      <div className="text-right">
                        <div className="text-sm">{asset.price}</div>
                        <div className={`text-xs ${asset.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {asset.change}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trade Setup */}
            <Card>
              <CardHeader>
                <CardTitle>Place Trade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    max={user.balance}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time Frame</label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 seconds</SelectItem>
                      <SelectItem value="15">15 seconds</SelectItem>
                      <SelectItem value="30">30 seconds</SelectItem>
                      <SelectItem value="60">1 minute</SelectItem>
                      <SelectItem value="300">5 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {countdown > 0 && (
                  <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                    <Clock className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
                    <div className="text-2xl font-bold text-yellow-500">{countdown}s</div>
                    <div className="text-sm text-muted-foreground">Trade in progress...</div>
                  </div>
                )}

                {!isTradeActive && (
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleTrade('up')}
                      className="bg-green-500 hover:bg-green-600 text-white h-16"
                    >
                      <ArrowUp className="mr-2 h-6 w-6" />
                      UP
                    </Button>
                    <Button
                      onClick={() => handleTrade('down')}
                      className="bg-red-500 hover:bg-red-600 text-white h-16"
                    >
                      <ArrowDown className="mr-2 h-6 w-6" />
                      DOWN
                    </Button>
                  </div>
                )}

                <div className="text-center text-sm text-muted-foreground">
                  Potential Profit: ${(parseFloat(amount) * 0.8).toFixed(2)} (80%)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
