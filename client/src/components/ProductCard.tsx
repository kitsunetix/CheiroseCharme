import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

export default function ProductCard({ 
  image, 
  title, 
  description, 
  price,
  featured = false 
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        {featured && (
          <Badge 
            className="absolute top-4 right-4 bg-accent text-accent-foreground"
            data-testid="badge-destaque"
          >
            Destaque
          </Badge>
        )}
      </div>
      <CardHeader>
        <h3 className="font-serif text-2xl font-semibold text-foreground" data-testid="text-product-title">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4" data-testid="text-product-description">
          {description}
        </p>
        <p className="text-3xl font-bold text-accent-foreground" data-testid="text-product-price">
          {price}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-accent text-accent-foreground border border-accent-border hover:bg-accent"
          data-testid="button-add-cart"
        >
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}
