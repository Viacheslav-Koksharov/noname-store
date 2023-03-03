import styled from "styled-components";

const MainStyled = styled.main`
  height: 100%;
  text-align: center;
`;

const SectionStyled = styled.section`
  display: ${(props) => (props.flex || props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex || props.flex ? "space-around" : "flex-start")};
  align-items: ${(props) => (props.flex || props.flex ? "center" : "flex-start")};
  margin-bottom: 200px;
  padding: ${(props) => (props.flex || props.flex ? "0 150px" : "20px 0")};
  background: white;
`;

const TaglineStyled = styled.h1`
  margin: 20px 20px 40px;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
`;

const TextStyled = styled.p`
  margin: 0 auto 30px;
  padding: 5px 0;
  width: 65%;
  color: ${(props) => (props.accent ? "#708db3" : "auto")};
  font-size: ${(props) => (props.accent ? "22px" : "18px")};
  line-height: 1.4;
  font-style: ${(props) => (props.accent ? "italic" : "normal")};
`;

export { MainStyled, SectionStyled, TaglineStyled, TextStyled };
