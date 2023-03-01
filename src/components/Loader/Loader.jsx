import { BallTriangle } from "react-loader-spinner";
import { ContainerStyled, SpinnerStyled } from "./Loader.styled";

const Loader = ({ ariaLabel, height, width, radius, color }) => {
  return (
    <>
      <ContainerStyled>
        <SpinnerStyled>
          <BallTriangle
            ariaLabel={ariaLabel}
            height={height}
            width={width}
            radius={radius}
            color={color}
          />
        </SpinnerStyled>
      </ContainerStyled>
    </>
  );
};

export default Loader;
