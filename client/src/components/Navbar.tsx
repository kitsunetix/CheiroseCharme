import { Link } from "wouter";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2"
              data-testid="link-home"
            >
              <Sparkles className="w-6 h-6 text-accent-foreground" />
              <span className="font-serif text-xl font-bold text-foreground">
                Cheiros & Charme
              </span>
            </button>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-produtos"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-sobre"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('redes-sociais')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-redes"
            >
              Instagram
            </button>
          </div>

          <Button
            onClick={() => scrollToSection('promocao')}
            variant="default"
            data-testid="button-promocao"
          >
            Ver Promoção
          </Button>
        </div>
      </div>
    </nav>
  );
}
