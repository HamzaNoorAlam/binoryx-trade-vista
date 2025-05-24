
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is binary options trading?",
      answer: "Binary options trading is a financial instrument where you predict whether the price of an asset will rise or fall within a specific time frame. If your prediction is correct, you earn a fixed payout."
    },
    {
      question: "What is the minimum deposit?",
      answer: "You can start trading with as little as $1. This makes our platform accessible to traders of all experience levels."
    },
    {
      question: "How fast can I withdraw my funds?",
      answer: "Withdrawals are typically processed within 24-48 hours after approval. The actual time may vary depending on your payment method."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including JazzCash, EasyPaisa, bank transfers, and major cryptocurrencies like Bitcoin, Ethereum, and USDT."
    },
    {
      question: "Is the platform regulated?",
      answer: "Yes, Binoryx operates under international financial regulations and maintains the highest security standards to protect your funds and personal information."
    },
    {
      question: "What trading timeframes are available?",
      answer: "We offer flexible trading timeframes ranging from 5 seconds to 5 minutes, allowing you to choose the duration that suits your trading strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-green-400">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about trading on Binoryx
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-foreground hover:text-green-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQs;
