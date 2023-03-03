import styled from "styled-components";
import { breakpoints } from "../../helpers/variables";

const { main } = breakpoints;

const MainStyled = styled.main`
  height: 100%;
  text-align: center;
`;

const SectionStyled = styled.section`
  display: ${(props) => (props.flex || props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex || props.flex ? "space-around" : "flex-start")};
  align-items: ${(props) => (props.flex || props.flex ? "center" : "flex-start")};
  margin-bottom: 200px;
  padding: 0 20px;
  background: white;

@media screen and (min-width: ${main.tablet}px){
  display: ${(props) => (props.flex || props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex || props.flex ? "space-around" : "flex-start")};
  align-items: ${(props) => (props.flex || props.flex ? "center" : "flex-start")};
  margin-bottom: 200px;
  padding: ${(props) => (props.flex || props.flex ? "0 150px" : "20px 0")};
  background: white;}
`;

const TaglineStyled = styled.h1`
margin: 10px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;

@media screen and (min-width: ${main.tablet}px){
margin: 20px 20px 40px;
  font-size: 22px;
  font-weight: 500;
 }
`;

const TextStyled = styled.p`
  margin: 0;
  padding: 5px 0;
  color: ${(props) => (props.accent ? "#708db3" : "auto")};
  font-size: ${(props) => (props.accent ? "16px" : "12px")};
  line-height: 1.4;
  font-style: ${(props) => (props.accent ? "italic" : "normal")};

@media screen and (min-width: ${main.tablet}px){
  width: 65%;
  margin: 0 auto 30px;
  font-size: ${(props) => (props.accent ? "22px" : "18px")};
  }
`;

export { MainStyled, SectionStyled, TaglineStyled, TextStyled };
