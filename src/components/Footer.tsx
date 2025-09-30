import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Reduce PDF Size</h3>
            <p className="text-muted-foreground">Simple, fast, and secure PDF compression</p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a href="mailto:meltiser@gmail.com" className="hover:text-primary transition-colors">
              meltiser@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Reduce PDF Size. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
