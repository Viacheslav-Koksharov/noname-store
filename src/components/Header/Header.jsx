import { HeaderStyled } from "./Header.styled";
import Banner from "../Banner";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <HeaderStyled>
      <Banner />
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
