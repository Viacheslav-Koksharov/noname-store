import { ContainerStyled } from './Container.styled.js';

const Container = ({ children, main, background, carousel, flex }) => {
  return (
    <ContainerStyled
      main={main}
      background={background}
      carousel={carousel}
      flex={flex}
    >
      {children}
    </ContainerStyled>
  );
};

export default Container;
