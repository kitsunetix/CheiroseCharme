import ProductCard from '../ProductCard';
import platesImage from "@assets/stock_images/decorative_ceramic_p_60c3b914.jpg";

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        image={platesImage}
        title="Pratos Decorados"
        description="Pratos artesanais com pinturas exclusivas e acabamento premium"
        price="R$ 20,00"
        featured
      />
    </div>
  );
}
