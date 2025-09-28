function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => onAddToCart(product.name)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
