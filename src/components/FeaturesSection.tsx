import { Zap, FileCheck, Lock, Wifi, Download, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Compression",
    description: "Reduce PDF size with one click. Compress documents in just seconds."
  },
  {
    icon: FileCheck,
    title: "Quality Retention",
    description: "Keep documents clear and readable. Maintain high-quality resolution after compression."
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Compress locally, no file uploads. Your files stay on your device."
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "No internet? No problem. Reduce document volume anytime, anywhere."
  },
  {
    icon: Download,
    title: "One-Click Download",
    description: "Your compressed PDF downloads automatically. Simple and hassle-free."
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "No data stored online. Complete privacy and security guaranteed."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Main Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful compression tools that work seamlessly in your browser
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
