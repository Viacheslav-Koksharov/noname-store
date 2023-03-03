import { useState, useEffect, useContext } from 'react';
import { useUserContext } from '../../context/userContext.js';
// import { useSelector } from "react-redux";
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import {
  MainStyled,
  GoBackButton,
  ProductContainer,
  ImageContainerStyled,
  button,
  TextContainerStyled,
  TitleStyled,
  BrandStyle,
  List,
  LinkItem,
  AlertStyle,
} from './ProductItem.styled';
import products from '../../mocks/data/products.json';
import { BasketContext } from '../../context/BasketContextProvider';
// import authSelectors from "../../redux/auth/auth-selectors";
import Button from '../Button/Button';
import CustomModal from '../CustomModal';

const getInitialBasketState = () => {
  const cart = localStorage.getItem('basket');
  return cart ? JSON.parse(cart) : [];
};

const ProductItem = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { loading } = useUserContext();
  const [product, setProduct] = useState();
  const [items, setItems] = useState(getInitialBasketState);
  const { setBasketItems } = useContext(BasketContext);
  const { offersId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cart = localStorage.getItem('basket');
    if (cart) {
      setItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(items));
    setBasketItems(items);
  }, [items, setBasketItems]);

  useEffect(() => {
    const currentItem = products.find(({ id }) => id === offersId);
    setProduct(currentItem);
  }, [offersId]);

  function handleSubmit() {
    if (loading) {
      const itemIndex = items.findIndex(({ id }) => id === offersId);

      const item = product;
      if (itemIndex < 0) {
        if (item) {
          item.quantity = 1;
        }
        setItems([...items, item]);
      } else {
        alert('Product is on the Basket');
      }
    }
  }

  function handleClick() {
    navigate('/offers');
  }

  return (
    <>
      <MainStyled>
        <GoBackButton onClick={handleClick}> Go Back</GoBackButton>
        <ProductContainer>
          <ImageContainerStyled>
            <img src={product?.image} alt={product?.name} />
          </ImageContainerStyled>
          <TextContainerStyled>
            <TitleStyled>{product?.name}</TitleStyled>
            <TitleStyled>{product?.price}</TitleStyled>
            <BrandStyle>Manufacturer: {product?.manufacturer}</BrandStyle>
            <CustomModal>
              <p>Go ahead</p>
            </CustomModal>
            <Button
              style={button}
              aria-label="add to cart"
              onClick={handleSubmit}
            >
              add to cart
            </Button>
            {!loading && (
              <AlertStyle>
                You can't add this product to the cart.
                <br />
                Please login or register
              </AlertStyle>
            )}
          </TextContainerStyled>
        </ProductContainer>
        <List>
          <LinkItem to={'description'}>Description</LinkItem>
          <LinkItem to={'params'}>All Tech Specs</LinkItem>
        </List>
        <Outlet />
      </MainStyled>
    </>
  );
};

export default ProductItem;
