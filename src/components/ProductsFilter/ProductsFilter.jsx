import { useEffect, useState, useContext } from 'react';
import {
  ContainerStyled,
  TitleStyled,
  ListFilterStyled,
  ListImageStyled,
  ItemFilterStyled,
  ItemImageStyled,
  button,
} from './ProductsFilter.styled';
import { ProductsContext } from '../../context/ProductsContextProvider';
import ImageCategory from '../../images/aside_category.jpg';
import photo1 from '../../images/aside_photo1.jpg';
import photo2 from '../../images/aside_photo2.jpg';
import photo3 from '../../images/aside_photo3.jpg';
import photo4 from '../../images/aside_photo4.jpg';
import products from '../../mocks/data/products.json';
import Container from '../Container';
import Button from '../Button';

const ProductsFilter = () => {
  const [categories, setCategories] = useState([]);
  const { setFilteredProducts } = useContext(ProductsContext);
  const images = [photo1, photo2, photo3, photo4];

  useEffect(() => {
    let allCategories = [];

    for (const product of products) {
      if (!allCategories.includes(product.category)) {
        allCategories.push(product.category);
      }
    }
    setCategories(allCategories);
  }, []);

  const onButtonClick = e => {
    const filteredItems = products.filter(
      ({ category }) => category === e.currentTarget.id,
    );

    e.currentTarget.id !== 'all'
      ? setFilteredProducts(filteredItems)
      : setFilteredProducts(products);
  };

  return (
    <>
      <ContainerStyled>
        <TitleStyled>Category</TitleStyled>
        <ListFilterStyled>
          {
            <>
              {categories.map(category => (
                <ItemFilterStyled key={category}>
                  <Button id={category} style={button} onClick={onButtonClick}>
                    {category}
                  </Button>
                </ItemFilterStyled>
              ))}
              <ItemFilterStyled>
                <Button id="all" style={button} onClick={onButtonClick}>
                  All products
                </Button>
              </ItemFilterStyled>
            </>
          }
        </ListFilterStyled>
        <Container>
          <img src={ImageCategory} alt="dog" />
        </Container>
      </ContainerStyled>
      <ListImageStyled>
        {images.map(image => (
          <ItemImageStyled key={image}>
            <img src={image} alt="animal food" />
          </ItemImageStyled>
        ))}
      </ListImageStyled>
    </>
  );
};

export default ProductsFilter;
