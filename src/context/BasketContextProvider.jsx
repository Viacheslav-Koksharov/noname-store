import { useState, createContext } from "react";

const getInitialOrderState = () => {
  const cart = localStorage.getItem("basket");
  return cart ? JSON.parse(cart) : "";
};

const BasketContext = createContext({
  basketItems: [],
  setBasketItems: () => {},
});

const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] =
    useState(getInitialOrderState);

  const sampleBasketContext = {
    basketItems,
    setBasketItems,
  };

  return (
    <BasketContext.Provider value={sampleBasketContext}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContext, BasketProvider };
