import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/stock_images/elegant_table_settin_b7023f44.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-background/95" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-4">
          Cheiro & Charme
        </h1>
        <p className="text-xl md:text-2xl text-background/90 mb-8 font-light">
          Elegância em Cada Detalhe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('produtos')}
            className="bg-background/90 text-foreground border border-background hover:bg-background"
            data-testid="button-produtos"
          >
            Conheça Nossos Produtos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('promocao')}
            className="bg-primary/20 backdrop-blur-sm text-background border-background/40 hover:bg-primary/30"
            data-testid="button-ver-promocao"
          >
            Ver Promoção Especial
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 text-background mx-auto" />
        </div>
      </div>
    </section>
  );
}
