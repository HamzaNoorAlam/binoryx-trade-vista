
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="text-green-400">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Binoryx, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Trading Risks</h2>
              <p className="text-muted-foreground leading-relaxed">
                Binary options trading involves substantial risk of loss and is not suitable for all investors. Past performance 
                is not indicative of future results. You should never invest money that you cannot afford to lose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old to register an account. You are responsible for maintaining the confidentiality 
                of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Deposits and Withdrawals</h2>
              <p className="text-muted-foreground leading-relaxed">
                All deposits and withdrawals are subject to our verification procedures. Withdrawal requests may take 24-48 hours 
                to process. Additional documentation may be required for verification purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed">
                Users are prohibited from engaging in fraudulent activities, money laundering, or any other illegal activities. 
                Multiple accounts by the same person are not allowed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Binoryx shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use 
                of our platform or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@binoryx.com
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
