import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CakeCard from "./CakeCard";
import { cakes } from "@/data/cakes";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCakes = activeCategory === "all" 
    ? cakes 
    : cakes.filter(cake => cake.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Our Cake Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful custom cakes for every celebration
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">All Cakes</TabsTrigger>
            <TabsTrigger value="birthday">Birthday</TabsTrigger>
            <TabsTrigger value="wedding">Wedding</TabsTrigger>
            <TabsTrigger value="celebration">Celebration</TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCakes.map((cake, index) => (
                <div 
                  key={cake.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CakeCard cake={cake} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
