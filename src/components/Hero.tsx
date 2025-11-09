import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cake.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    gallerySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground">
              Becky's Bakery
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Crafting beautiful, delicious cakes for every celebration in Bondo, Siaya County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToGallery}
                className="text-lg shadow-soft hover:shadow-hover transition-all"
              >
                View Our Cakes
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="Beautiful pink rose birthday cake by Becky's Bakery" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-soft-pink/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
