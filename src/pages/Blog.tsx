
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      title: "Binary Options Trading Strategies for Beginners",
      excerpt: "Learn the fundamental strategies that every new trader should know to succeed in binary options trading.",
      category: "Strategy",
      date: "December 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Understanding Market Trends and Analysis",
      excerpt: "Discover how to read market trends and use technical analysis to make better trading decisions.",
      category: "Analysis",
      date: "December 12, 2024",
      readTime: "7 min read"
    },
    {
      title: "Risk Management in Trading",
      excerpt: "Essential tips for managing your trading capital and minimizing losses while maximizing profits.",
      category: "Education",
      date: "December 10, 2024",
      readTime: "6 min read"
    },
    {
      title: "Cryptocurrency Trading Opportunities",
      excerpt: "Explore the world of crypto trading and how to capitalize on digital currency movements.",
      category: "Crypto",
      date: "December 8, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading <span className="text-green-400">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest trading insights, strategies, and market analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground hover:text-green-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
