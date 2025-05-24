
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowDownRight, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Withdraw = () => {
  const { user, logout } = useAuth();
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [accountDetails, setAccountDetails] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !method || !accountDetails) {
      toast.error("Please fill all fields");
      return;
    }

    if (parseFloat(amount) > user.balance) {
      toast.error("Insufficient balance");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Withdrawal request submitted for review!");
      setAmount("");
      setMethod("");
      setAccountDetails("");
      setIsLoading(false);
    }, 2000);
  };

  if (!user) {
    return null;
  }

  const withdrawalRequests = [
    { id: 1, amount: 500, method: "JazzCash", status: "Pending", date: "2024-12-15" },
    { id: 2, amount: 250, method: "Bitcoin", status: "Completed", date: "2024-12-14" },
    { id: 3, amount: 100, method: "EasyPaisa", status: "Completed", date: "2024-12-13" },
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
            <h1 className="text-2xl font-bold">Withdraw Funds</h1>
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
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Withdrawal Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowDownRight className="mr-2 h-5 w-5" />
                  Request Withdrawal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWithdraw} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                    <Input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      min="10"
                      max={user.balance}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Available: ${user.balance}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Withdrawal Method</label>
                    <Select value={method} onValueChange={setMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select withdrawal method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jazzcash">JazzCash</SelectItem>
                        <SelectItem value="easypaisa">EasyPaisa</SelectItem>
                        <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                        <SelectItem value="usdt">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Account Details</label>
                    <Input
                      value={accountDetails}
                      onChange={(e) => setAccountDetails(e.target.value)}
                      placeholder={method?.includes('cash') ? 'Phone number' : 'Wallet address'}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Submit Withdrawal Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Withdrawal History */}
            <Card>
              <CardHeader>
                <CardTitle>Withdrawal History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {withdrawalRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {request.status === 'Completed' ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <Clock className="h-5 w-5 text-yellow-500" />
                        )}
                        <div>
                          <div className="font-medium">${request.amount}</div>
                          <div className="text-sm text-muted-foreground">{request.method}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          request.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                        }`}>
                          {request.status}
                        </div>
                        <div className="text-xs text-muted-foreground">{request.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
