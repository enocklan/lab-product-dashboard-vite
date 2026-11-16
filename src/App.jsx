import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const initialProducts = [
    { id: 1, name: "Laptop", price: "$999", inStock: true },
    { id: 2, name: "Phone", price: "$699", inStock: false },
    { id: 3, name: "Tablet", price: "$499", inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);

  function handleDelete(id) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id)
    );
  }

  return (
    <div className="App">
      <h1 id="header">Product Dashboard</h1>

      <ProductList
        products={products}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;