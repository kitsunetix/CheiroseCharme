import ProductCard from "./ProductCard";
import platesImage from "@assets/stock_images/decorative_ceramic_p_60c3b914.jpg";
import candlesImage from "@assets/stock_images/aromatic_scented_can_44127c50.jpg";

export default function Products() {
  const products = [
    {
      image: platesImage,
      title: "Pratos Decorados",
      description: "Pratos artesanais com pinturas exclusivas e acabamento premium. Perfeitos para decoração ou uso especial em ocasiões memoráveis.",
      price: "R$ 20,00",
      featured: true
    },
    {
      image: candlesImage,
      title: "Velas Aromáticas",
      description: "Velas aromáticas com fragrâncias exclusivas que transformam qualquer ambiente em um espaço acolhedor e relaxante.",
      price: "R$ 20,00",
      featured: true
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa coleção exclusiva de produtos artesanais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
