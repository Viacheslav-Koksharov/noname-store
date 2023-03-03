import styled from "styled-components";

const ContainerStyled = styled.div`
  position: ${(props) => (props.background ? "fixed" : "static")};
  top: ${(props) => (props.background ? "140px" : "0")};
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex ? "space-between" : "none")};
  align-items: ${(props) => (props.flex ? "center" : "none")};
  width: ${(props) => (props.carousel ? "700px" : "100%")};
  height: ${(props) => (props.background ? "700px" : "auto")};
  margin: ${(props) => (props.main ? '120px auto 0' : '0')};
  padding: ${(props) => (props.carousel ? "50px 0" : "0")};
  overflow: ${(props) => (props.carousel ? "hidden" : "visible")};
  background-image: ${(props) => (props.background ? 'url(https://imageio.forbes.com/specials-images/imageserve/637b1d11729a96ce28ea598c/The-Top-10-Tech-Trends-In-2023-Everyone-Must-Be-Ready-For/960x0.jpg?format=jpg&width=960)' : 'none')};
  background-size: ${(props) => (props.background ? 'cover' : 'auto')};
  z-index: ${(props) => (props.background ? "-1" : "0")};
`;

export { ContainerStyled };
