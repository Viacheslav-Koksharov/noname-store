import { useState, createContext } from "react";

const ProductsContext = createContext({
  filteredProducts: [],
  setFilteredProducts: () => {},
});

const ProductsProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sampleProductsContext = {
    filteredProducts,
    setFilteredProducts,
  };

  return (
    <ProductsContext.Provider value={sampleProductsContext}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
