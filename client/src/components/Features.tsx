import { Card, CardContent } from "@/components/ui/card";
import { Palette, Heart, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: "Artesanal",
      description: "Cada peça é cuidadosamente criada à mão com atenção aos detalhes"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Utilizamos apenas materiais de alta qualidade em nossos produtos"
    },
    {
      icon: Heart,
      title: "Feito com Amor",
      description: "Dedicação e carinho em cada produto para tornar seu lar especial"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Escolher Cheiro & Charme?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compromisso com a excelência em cada detalhe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="pt-8 pb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                  <feature.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
