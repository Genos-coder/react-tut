import { products } from "./data";
import ProductSkeleton from "./ProductSkeleton";
import "./task.css";
function ProductPage() {
  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <ProductSkeleton
            key={product.title}
            isInCart={product.isInCart}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            description={product.description}
            quantity={product.quantity}
          />
        );
      })}
    </div>
  );
}
export default ProductPage;
