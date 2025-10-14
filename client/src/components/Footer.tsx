import { Sparkles } from "lucide-react";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
              <span className="font-serif text-xl font-bold text-foreground">
                Cheiros & Charme
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
                  onClick={() => document.getElementById('redes-sociais')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  data-testid="link-footer-instagram"
                >
                  Instagram
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/cheiros.echarme/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/20 p-3 rounded-full hover-elevate transition-all"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer do Projeto Escolar */}
        <div className="border-t border-border pt-8 pb-6">
          <div className="bg-accent/10 rounded-lg p-6 mb-6">
            <p className="text-sm text-muted-foreground text-center">
              <span className="font-semibold text-foreground">📚 Projeto Educacional:</span> Este site foi criado como parte da Feira Cultural da 
              <span className="font-semibold text-foreground"> Escola Pinheiro Guimarães</span>, com o tema "Trabalho e Formas de Adquirir Renda Extra". 
              Não se trata de uma empresa real, mas sim de um projeto acadêmico desenvolvido pelos alunos.
            </p>
          </div>

          {/* Placeholder para Logo da Escola */}
          <div className="flex justify-center mb-6">
            <div className="bg-muted/30 border-2 border-dashed border-border rounded-lg p-8 text-center w-64 h-32 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Logo da Escola<br/>Pinheiro Guimarães<br/>
                <span className="text-xs">(substituir imagem depois)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Cheiros & Charme - Projeto Escolar
          </p>
        </div>
      </div>
    </footer>
  );
}
