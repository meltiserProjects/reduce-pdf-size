import { Button } from "@/components/ui/button";
import { Download, Chrome } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Compressing PDFs Today
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join over 1,200 weekly users who trust Reduce PDF Size for fast, secure compression
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a 
                href="https://chromewebstore.google.com/detail/reduce-pdf-size/mgpodjlmecklbjmnchmlcfdohhpceejo?hl=en&utm_source=website&utm_medium=cta_button&utm_campaign=extension_download&utm_content=add_to_chrome_bottom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              <span>1,760+ Installs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">★★★★★</span>
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Chrome className="w-5 h-5" />
              <span>Chrome Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
