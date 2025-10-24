import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import platesImage from "@assets/stock_images/decorative_ceramic_p_60c3b914.jpg";
import candlesImage from "@assets/stock_images/aromatic_scented_can_44127c50.jpg";
import ecobagImage from "@assets/stock_images/pink_canvas_tote_bag_2f51db88.jpg";

export default function PromotionBanner() {
  return (
    <section id="promocao" className="py-16 md:py-24 bg-gradient-to-br from-accent via-accent/90 to-accent/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Sparkles className="absolute top-10 left-10 w-12 h-12" />
        <Sparkles className="absolute bottom-20 right-20 w-8 h-8" />
        <Sparkles className="absolute top-1/2 right-10 w-10 h-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-accent-foreground" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent-foreground">
              Combo Especial
            </h2>
          </div>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Leve os dois produtos e ganhe uma ecobag personalizada!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center hover-elevate">
            <img 
              src={platesImage} 
              alt="Pratos Decorados" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-serif text-xl font-semibold mb-2" data-testid="text-combo-prato">
              Prato Decorado
            </h3>
            <p className="text-muted-foreground line-through">R$ 20,00</p>
          </div>

          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center hover-elevate">
            <img 
              src={candlesImage} 
              alt="Velas Aromáticas" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-serif text-xl font-semibold mb-2" data-testid="text-combo-vela">
              Vela Aromática
            </h3>
            <p className="text-muted-foreground line-through">R$ 20,00</p>
          </div>

          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 text-center hover-elevate border-2 border-accent-foreground/30">
            <img 
              src={ecobagImage} 
              alt="Ecobag Personalizada" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-serif text-xl font-semibold mb-2" data-testid="text-combo-ecobag">
              Ecobag Grátis!
            </h3>
            <p className="text-primary font-semibold">Brinde Exclusivo</p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-background/95 backdrop-blur-sm rounded-lg px-8 py-6 mb-6">
            <p className="text-sm text-muted-foreground mb-2">De R$ 40,00 por apenas</p>
            <p className="text-5xl md:text-6xl font-bold text-accent-foreground" data-testid="text-combo-price">
              R$ 35,00
            </p>
            <p className="text-sm text-muted-foreground mt-2">Economia de R$ 5,00 + Ecobag Grátis</p>
          </div>
          <div>
            <Button 
              size="lg" 
              className="bg-background text-accent-foreground border border-background hover:bg-background/90 text-lg px-8"
              data-testid="button-comprar-combo"
            >
              Aproveitar Promoção
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
