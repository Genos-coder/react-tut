import MySvg from "./MySvg";

function ProductSkeleton({
  title = "",
  imgSrc = "",
  description = "",
  isInCart = "",
  price = "",
  quantity = 0,
}) {
  return (
    <div className="card">
      <img className="card-image" src={imgSrc} alt={title} />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-price">
        <span>Price:</span>
        <span>
          {/* below Intl object convert any number format into currency representation */}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(price)}
        </span>
      </p>
      <div className="card-quantity">
        <p>
          <span>Quantity</span>
          <span>{quantity}</span>
        </p>
        <p className="image-card">{isInCart ? <MySvg /> : null}</p>
      </div>
    </div>
  );
}
export default ProductSkeleton;
