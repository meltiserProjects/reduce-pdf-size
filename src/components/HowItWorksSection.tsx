import { Upload, Settings, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your PDF",
    description: "Click the extension icon and drag & drop your PDF file"
  },
  {
    icon: Settings,
    title: "Automatic Compression",
    description: "Advanced algorithms compress your file in seconds"
  },
  {
    icon: Download,
    title: "Download Result",
    description: "Your compressed PDF downloads automatically"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three simple steps to compress your PDF files
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-white/20">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/40 rounded-full"></div>
                </div>
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-white font-bold flex items-center justify-center text-lg shadow-lg">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/70 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
