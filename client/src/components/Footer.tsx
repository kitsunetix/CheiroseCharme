import { Sparkles } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
              <span className="font-serif text-xl font-bold text-foreground">
                Cheiro & Charme
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Elegância e aconchego em cada detalhe. Transformando sua casa em um lar.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-produtos"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-sobre"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-accent/20 p-3 rounded-full hover-elevate transition-all"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-accent-foreground" />
              </a>
              <a 
                href="#" 
                className="bg-accent/20 p-3 rounded-full hover-elevate transition-all"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5 text-accent-foreground" />
              </a>
              <a 
                href="#" 
                className="bg-accent/20 p-3 rounded-full hover-elevate transition-all"
                aria-label="WhatsApp"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Cheiro & Charme. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
