import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Cake } from "@/data/cakes";

interface CakeCardProps {
  cake: Cake;
}

const CakeCard = ({ cake }: CakeCardProps) => {
  // Dynamic import helper
  const getCakeImage = (imageName: string) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  const categoryColors = {
    birthday: "bg-primary",
    wedding: "bg-accent",
    celebration: "bg-secondary"
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-hover transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={getCakeImage(cake.image)}
          alt={`${cake.name} - Custom cake by Becky's Bakery`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <Badge 
          className={`absolute top-4 right-4 ${categoryColors[cake.category]} text-white capitalize`}
        >
          {cake.category}
        </Badge>
      </div>
      <CardContent className="p-6 space-y-2">
        <h3 className="font-playfair text-xl font-semibold text-foreground">
          {cake.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {cake.description}
        </p>
        {cake.price && (
          <p className="text-primary font-semibold text-lg pt-2">
            {cake.price}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CakeCard;
