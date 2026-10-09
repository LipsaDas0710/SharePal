import { products, extraProducts } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ start = 0, end = 4 }) {
  const list = [...products, ...extraProducts].slice(start, end);
  return <div className="product-grid">{list.map((product) => <ProductCard key={product.id} product={product}/>)}</div>;
}
