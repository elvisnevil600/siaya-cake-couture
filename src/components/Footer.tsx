import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Becky's Bakery</h3>
            <p className="text-background/80">
              Creating beautiful memories, one cake at a time.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a 
                href="#about" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                About Us
              </a>
              <a 
                href="#gallery" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                Our Cakes
              </a>
              <a 
                href="#contact" 
                className="block text-background/80 hover:text-background transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+254 727 252010</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>beckycakes@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Bondo, Siaya County</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Becky's Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
