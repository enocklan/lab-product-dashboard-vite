function ProductCard({ product, onDelete }) {
  return (
    <div className={product.inStock ? "productCard" : "outOfStockClass"}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button onClick={() => onDelete(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default ProductCard;