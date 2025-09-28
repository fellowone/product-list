import './App.css';
import React, { useState } from "react";
import products from "./products";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import SortOptions from "./components/SortOptions";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortKey, setSortKey] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => category ? p.category === category : true)
    .sort((a, b) => sortOrder === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]);

  function handleAddToCart(name) {
    console.log(`Added to cart: ${name}`);
  }

  return (
    <div>
      <header>
        <h1>Product Listing</h1>
      </header>
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter
        categories={[...new Set(products.map(p => p.category))]}
        selected={category}
        onChange={setCategory}
      />
      <SortOptions
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSortChange={(key, order) => {
          setSortKey(key);
          setSortOrder(order);
        }}
      />
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
