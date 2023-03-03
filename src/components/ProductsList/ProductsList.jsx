import { useState, useEffect, useContext } from 'react';
import {
  ListContainer,
  InputRadio,
  ListStyled,
  ItemStyled,
  LinkStyled,
  ImageContainerStyled,
  TextStyled,
  button,
} from './ProductsList.styled';
import { ProductsContext } from '../../context/ProductsContextProvider';
import products from '../../mocks/data/products.json';
import Button from '../Button/Button';
import ScrollButton from '../ScrollTopButton';

const ProductsList = ({ cost }) => {
  const imagePerPage = 6;
  const [visibleProducts, setVisibleProducts] = useState(products);
  const { filteredProducts } = useContext(ProductsContext);
  const [next, setNext] = useState(imagePerPage);
  const [sort, setSort] = useState();

  useEffect(() => {
    setVisibleProducts(products);
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setVisibleProducts(filteredProducts);
    }
  }, [filteredProducts]);

  if (sort === 'less') {
    visibleProducts?.sort((a, b) => a.price.slice(1) - b.price.slice(1));
  }
  if (sort === 'more') {
    visibleProducts?.sort((a, b) => b.price.slice(1) - a.price.slice(1));
  }
  if (sort === 'reit') {
    visibleProducts?.sort((a, b) => b.reit - a.reit);
  }

  const handleMoreImage = () => {
    setNext(next + imagePerPage);
    scrollTo();
  };

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <ListContainer>
        <InputRadio
          type="radio"
          value="less"
          name="filter"
          onChange={e => {
            setSort(e.target.value);
          }}
        />
        less price
        <InputRadio
          type="radio"
          value="more"
          name="filter"
          onChange={e => {
            setSort(e.target.value);
          }}
        />
        more price
        <InputRadio
          type="radio"
          value="reit"
          name="filter"
          onChange={e => {
            setSort(e.target.value);
          }}
        />
        reit level
        <ListStyled>
          {visibleProducts
            ?.slice(0, next)
            ?.map(({ id, image, name, price }) => (
              <ItemStyled key={id}>
                <LinkStyled to={`/offers/${id}`}>
                  <ImageContainerStyled>
                    <img src={image} alt={name} />
                  </ImageContainerStyled>
                  <TextStyled>{name}</TextStyled>
                  <TextStyled cost={cost}>{price}</TextStyled>
                  <Button style={button} aria-label="add to cart">
                    see more
                  </Button>
                </LinkStyled>
              </ItemStyled>
            ))}
          {next < visibleProducts?.length && (
            <Button
              style={button}
              aria-label="load more"
              onClick={handleMoreImage}
            >
              Load more
            </Button>
          )}
        </ListStyled>
        <ScrollButton />
      </ListContainer>
    </>
  );
};

export default ProductsList;
