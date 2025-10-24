import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function SocialMedia() {
  return (
    <section id="redes-sociais" className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siga-nos no Instagram
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe nossas novidades, promoções e produtos exclusivos
          </p>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://www.instagram.com/cheiros.echarme/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-gradient-to-br from-accent via-accent/90 to-accent/80 rounded-2xl p-12 hover-elevate transition-all duration-300 text-center max-w-md">
              <div className="bg-background/90 backdrop-blur-sm rounded-full p-8 inline-block mb-6">
                <SiInstagram className="w-20 h-20 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-accent-foreground mb-3">
                @cheiros.echarme
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Visite nosso perfil e descubra mais sobre nossos produtos artesanais
              </p>
              <Button 
                className="bg-background text-accent-foreground border border-background hover:bg-background/90"
                data-testid="button-instagram"
              >
                Seguir no Instagram
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
