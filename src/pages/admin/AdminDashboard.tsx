
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, TrendingUp, AlertCircle } from "lucide-react";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  // Check if user is admin
  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground">You don't have permission to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", balance: 1500, status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", balance: 850, status: "Active" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", balance: 2200, status: "Suspended" },
  ];

  const deposits = [
    { id: 1, user: "John Doe", amount: 500, method: "JazzCash", status: "Pending" },
    { id: 2, user: "Jane Smith", amount: 200, method: "Bitcoin", status: "Approved" },
  ];

  const trades = [
    { id: 1, user: "John Doe", asset: "EUR/USD", amount: 50, outcome: "Win", profit: 40 },
    { id: 2, user: "Jane Smith", asset: "BTC/USD", amount: 100, outcome: "Loss", profit: -100 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-green-400">Binoryx</span> Admin
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground">Admin: {user.name}</span>
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs opacity-80">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
              <DollarSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125,430</div>
              <p className="text-xs opacity-80">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Platform Profit</CardTitle>
              <TrendingUp className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$15,680</div>
              <p className="text-xs opacity-80">+25% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Trades</CardTitle>
              <AlertCircle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">148</div>
              <p className="text-xs opacity-80">Real-time count</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                      <div className="text-sm">Balance: ${user.balance}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                        {user.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Deposit Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Deposit Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deposits.map((deposit) => (
                  <div key={deposit.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">{deposit.user}</div>
                      <div className="text-sm text-muted-foreground">${deposit.amount} via {deposit.method}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={deposit.status === 'Approved' ? 'default' : 'secondary'}>
                        {deposit.status}
                      </Badge>
                      {deposit.status === 'Pending' && (
                        <Button variant="outline" size="sm">
                          Approve
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Trades */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${trade.outcome === 'Win' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <div className="font-medium">{trade.user}</div>
                      <div className="text-sm text-muted-foreground">{trade.asset} - ${trade.amount}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{trade.outcome}</div>
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

export default AdminDashboard;
