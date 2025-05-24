
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet } from "lucide-react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const recentTrades = [
    { id: 1, asset: "EUR/USD", amount: 25, outcome: "Win", profit: 20, time: "2 mins ago" },
    { id: 2, asset: "BTC/USD", amount: 50, outcome: "Loss", profit: -50, time: "5 mins ago" },
    { id: 3, asset: "GBP/USD", amount: 30, outcome: "Win", profit: 24, time: "8 mins ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-green-400">Binoryx</span> Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Welcome, {user.name}</span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Balance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
              <Wallet className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${user.balance}</div>
              <p className="text-xs opacity-80">Available for trading</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Profit</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$127</div>
              <p className="text-xs opacity-80">+12.5% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
              <ArrowUpRight className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs opacity-80">2 winning, 1 pending</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link to="/dashboard/trading">
            <Button className="w-full h-16 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
              <ArrowUpRight className="mr-2 h-5 w-5" />
              Start Trading
            </Button>
          </Link>
          <Link to="/dashboard/deposit">
            <Button variant="outline" className="w-full h-16">
              <Wallet className="mr-2 h-5 w-5" />
              Deposit Funds
            </Button>
          </Link>
          <Link to="/dashboard/withdraw">
            <Button variant="outline" className="w-full h-16">
              <ArrowDownRight className="mr-2 h-5 w-5" />
              Withdraw
            </Button>
          </Link>
          <Link to="/dashboard/profile">
            <Button variant="outline" className="w-full h-16">
              Profile Settings
            </Button>
          </Link>
        </div>

        {/* Recent Trades */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTrades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${trade.outcome === 'Win' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <div className="font-medium">{trade.asset}</div>
                      <div className="text-sm text-muted-foreground">{trade.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">${trade.amount}</div>
                    <div className={`text-sm ${trade.profit > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {trade.profit > 0 ? '+' : ''}${trade.profit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
