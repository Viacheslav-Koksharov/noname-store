import { useContext } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
// import { placeOrder } from '../../redux/auth/auth-operations';
import { BasketContext } from '../../context/BasketContextProvider';
import { getTotal } from '../../helpers/getTotal';
import { MainStyled, button, CartTitle, LinkStyled } from './CartView.styled';
import Cart from '../../components/Cart/Cart';
import Button from '../../components/Button';

const CartView = () => {
  const { basketItems } = useContext(BasketContext);
  // const dispatch = useDispatch();
  const placeOrder = createAsyncThunk(
    'auth/placeOrder',
    async (order, thunkAPI) => {
      try {
        setTimeout(() => {
          window.localStorage.setItem('basket', '[]');
        }, 500);
        window.localStorage.setItem('orders', JSON.stringify(order));
        return order;
      } catch (error) {
        return thunkAPI.rejectWithValue('error');
      }
    },
  );
  const order = {
    items: basketItems,
    total: getTotal(basketItems),
  };

  return (
    <MainStyled>
      <CartTitle>Please Check Your Order!</CartTitle>
      <Cart main />
      <LinkStyled to={`/account`}>
        <Button style={button} onClick={() => placeOrder(order)}>
          Check out order
        </Button>
      </LinkStyled>
    </MainStyled>
  );
};

export default CartView;
