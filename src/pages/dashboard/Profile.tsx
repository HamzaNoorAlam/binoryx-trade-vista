
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Upload, Shield } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const { user, logout } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setIsLoading(false);
    }, 1500);
  };

  const handleFileUpload = (type: string) => {
    toast.info(`${type} upload functionality will be implemented`);
  };

  if (!user) {
    return null;
  }

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
            <h1 className="text-2xl font-bold">Profile Settings</h1>
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
            {/* Profile Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* KYC Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Account Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">Identity Document</div>
                      <div className="text-sm text-muted-foreground">Upload passport or national ID</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleFileUpload('ID')}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">Proof of Address</div>
                      <div className="text-sm text-muted-foreground">Utility bill or bank statement</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleFileUpload('Address')}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium">Selfie Verification</div>
                      <div className="text-sm text-muted-foreground">Photo holding your ID</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleFileUpload('Selfie')}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="text-sm text-yellow-600 dark:text-yellow-400">
                    <strong>Verification Status:</strong> Pending
                    <br />
                    Complete verification to increase withdrawal limits and access premium features.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Account Settings */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-card/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-500">${user.balance}</div>
                    <div className="text-sm text-muted-foreground">Account Balance</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-500">Basic</div>
                    <div className="text-sm text-muted-foreground">Account Type</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-500">Dec 2024</div>
                    <div className="text-sm text-muted-foreground">Member Since</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
