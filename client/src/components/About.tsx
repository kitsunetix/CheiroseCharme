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
              alt="Sobre Cheiro & Charme" 
              className="relative rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A <span className="text-foreground font-semibold">Cheiro & Charme</span> nasceu da paixão por criar 
                produtos que transformam ambientes comuns em espaços extraordinários. Cada peça é 
                pensada para adicionar elegância e aconchego ao seu lar.
              </p>
              <p>
                Nossos pratos decorados são verdadeiras obras de arte funcionais, perfeitos para 
                decoração ou uso especial. Já nossas velas aromáticas são cuidadosamente desenvolvidas 
                com fragrâncias exclusivas que criam atmosferas únicas.
              </p>
              <p>
                Acreditamos que os pequenos detalhes fazem toda a diferença. Por isso, cada produto 
                é criado artesanalmente com dedicação, qualidade e muito carinho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
