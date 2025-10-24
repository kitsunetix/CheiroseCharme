import candlesImage from "@assets/stock_images/aromatic_scented_can_44127c50.jpg";

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-lg blur-xl" />
            <img 
              src={candlesImage} 
              alt="Sobre Cheiros & Charme" 
              className="relative rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A <span className="text-foreground font-semibold">Cheiros & Charme</span> nasceu do sonho de conquistar 
                uma renda extra através do empreendedorismo autônomo. Somos uma empresa que representa o espírito 
                de quem busca independência financeira através de trabalhos manuais artesanais.
              </p>
              <p>
                Especializados em <span className="text-foreground font-semibold">velas aromáticas</span> com fragrâncias 
                de baunilha e jasmim, e <span className="text-foreground font-semibold">pratos decorados</span> com a técnica 
                de decupagem em estampas exclusivas, oferecemos produtos únicos que trazem elegância e aconchego para qualquer lar.
              </p>
              <p>
                Mais do que uma empresa, somos uma ponte entre empreendedores e clientes, mostrando que é possível 
                transformar talento e dedicação em uma fonte de renda. Cada produto é feito à mão com carinho e atenção 
                aos detalhes, provando que trabalhos informais também podem gerar produtos de alta qualidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
