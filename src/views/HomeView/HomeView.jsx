import { useRef, useEffect } from "react";
import {
  MainStyled,
  SectionStyled,
  TaglineStyled,
  TextStyled,
} from "./HomeView.styled";
import Carousel from "../../components/Carousel";

const HomeView = ({ tagline, message, conditions }) => {
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      window.scrollTo({ top: -50, behavior: "smooth" });
    }
  }, []);

  return (
    <MainStyled ref={topRef}>
      <SectionStyled>
        <TaglineStyled>{tagline}</TaglineStyled>
        <TextStyled accent>{message}</TextStyled>
        <TextStyled>{conditions}</TextStyled>
      </SectionStyled>
      <SectionStyled flex>
        <Carousel />
      </SectionStyled>
    </MainStyled>
  );
};

export default HomeView;
