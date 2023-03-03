import styled from "styled-components";

const MainStyled = styled.main`
  display: flex;
  width: 100%;
  padding:20px;
  background-color: white;
`;

const SectionStyled = styled.section`
  width: 70%;
  padding: 40px;
`;

const ListStyled = styled.ul`
  margin: 0;
`;

const ItemStyled = styled.li`
  margin-bottom: 20px;
  list-style: none;
`;

const TextStyled = styled.p`
  display: inline-block;
  font-size:22px;
  line-height: 2;
`;

const iconStyle = {
  width: '50px',
  height: '50px',
  color: '#2f66e6'
}

export { MainStyled, SectionStyled, ListStyled, ItemStyled, TextStyled, iconStyle };