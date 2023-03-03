import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextStyled } from "./Description.styled";
import products from "../../mocks/data/products.json";

const Description = () => {
  const { offersId } = useParams();
  const [description, setDescription] = useState();

  useEffect(() => {
    const currentItem = products.find((item) => item.id === offersId);
    setDescription(currentItem);
  }, [offersId]);

  return <TextStyled>{description?.description}</TextStyled>;
};

export default Description;
