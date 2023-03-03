import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListStyled } from "./Params.styled";
import products from "../../mocks/data/products.json";

const Specs = () => {
  const { offersId } = useParams();
  const [product, setProduct] = useState();
  const [params, setParams] = useState([]);

  useEffect(() => {
    const product = products.find(({ id }) => id === offersId);
    setProduct(product);
  }, [product, offersId]);

  useEffect(() => {
    const nutrients = product?.specs;
    if (nutrients) {
      const items = Object.entries(nutrients);
      setParams(items);
    }
  }, [product]);

  return (
    <ListStyled>
      {params &&
        params.map(([key, value]) => (
          <li key={key}>{`${key} : ${value}`}</li>
        ))}
    </ListStyled>
  );
};

export default Specs;
