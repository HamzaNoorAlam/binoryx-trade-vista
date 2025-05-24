
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, CreditCard, Smartphone } from "lucide-react";
import { toast } from "sonner";

const Deposit = () => {
  const { user, logout } = useAuth();
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !method) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Deposit request submitted successfully!");
      setAmount("");
      setMethod("");
      setIsLoading(false);
    }, 2000);
  };

  if (!user) {
    return null;
  }

  const paymentMethods = [
    { id: "jazzcash", name: "JazzCash", icon: Smartphone },
    { id: "easypaisa", name: "EasyPaisa", icon: Smartphone },
    { id: "btc", name: "Bitcoin (BTC)", icon: CreditCard },
    { id: "eth", name: "Ethereum (ETH)", icon: CreditCard },
    { id: "usdt", name: "USDT", icon: CreditCard },
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
            <h1 className="text-2xl font-bold">Deposit Funds</h1>
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
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2 h-5 w-5" />
                Make a Deposit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDeposit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount (minimum $1)"
                    min="1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Payment Method</label>
                  <Select value={method} onValueChange={setMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      {paymentMethods.map((pm) => (
                        <SelectItem key={pm.id} value={pm.id}>
                          <div className="flex items-center">
                            <pm.icon className="mr-2 h-4 w-4" />
                            {pm.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Submit Deposit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Payment Methods Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="bg-card/50">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <method.icon className="mr-2 h-5 w-5 text-green-400" />
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {method.id.includes('cash') ? 'Mobile wallet payment' : 'Cryptocurrency payment'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
