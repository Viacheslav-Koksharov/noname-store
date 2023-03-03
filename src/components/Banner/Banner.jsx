import { ContainerStyled, TextStyled } from './Banner.styled';

const Banner = ({ text }) => {
  return (
    <ContainerStyled>
      <TextStyled>{text}</TextStyled>
    </ContainerStyled>
  );
};

export default Banner;
