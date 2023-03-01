import React from "react";
import { NavigationStyled, ListStyled, LinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ListStyled>
        <LinkStyled aria-label={"/"} to={`/`}>
          Home
        </LinkStyled>
        <LinkStyled aria-label={"login"} to={`/login`}>
          Login
        </LinkStyled>
        <LinkStyled aria-label={"register"} to={`/register`}>
          Register
        </LinkStyled>
      </ListStyled>
    </NavigationStyled>
  );
};

export default Navigation;
