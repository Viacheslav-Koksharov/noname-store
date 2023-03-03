import React, { useContext } from 'react';
import {
  CounterContainer,
  CounterValue,
  ButtonCounter,
  LegendStyle,
} from './Counter.styled';
import { BasketContext } from '../../context/BasketContextProvider';

const Counter = ({ step = 1, id, value }) => {
  const { basketItems, setBasketItems } = useContext(BasketContext);

  function increment(e) {
    const updatedBasket = basketItems.map(item => {
      if (item.id === e.currentTarget.id) {
        item.quantity += step;
      }
      return item;
    });
    setBasketItems(updatedBasket);
  }

  function decrement(e) {
    const updatedBasket = basketItems.map(item => {
      if (item.id === e.currentTarget.id && item.quantity > 1) {
        item.quantity -= step;
      }
      return item;
    });
    setBasketItems(updatedBasket);
  }

  return (
    <CounterContainer id={id}>
      <LegendStyle>Quantity</LegendStyle>
      <ButtonCounter id={id} type="button" onClick={decrement}>
        -
      </ButtonCounter>
      <CounterValue>{value}</CounterValue>

      <ButtonCounter id={id} type="button" onClick={increment}>
        +
      </ButtonCounter>
    </CounterContainer>
  );
};

export default Counter;
