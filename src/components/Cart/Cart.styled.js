import styled from 'styled-components';

const ListStyled = styled.ul`
  margin: 0 auto;
  width:100%;
`;

const ItemStyled = styled.li`
  display:flex;
  flex-wrap: wrap;
  margin: 0 0 40px 0;
  padding: 40px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);}
`;

const ImageContainerStyled = styled.div`
  width:${(props) => (props.main ? "200px" : "100px")};
  height:${(props) => (props.main ? "200px" : "100px")};
`;

const TextStyled = styled.p`
  display: flex;
  margin: ${(props) => (props.main ? "0 20px 0 0" : "0")};
  width: ${(props) => (props.main ? "30%" : "40%")};
  align-items: center;
  text-align: center;
  font-weight:700;
`;

const PriceStyled = styled.p`
 display: flex;
 width: ${(props) => (props.main ? "100px" : "150px")};
  align-items: center;
  margin-right: 10px;
  text-align: center;
  font-weight:700;
}
`;

const ValueStyled = styled.p`
  display: flex;
  width: ${(props) => (props.main ? "100px" : "150px")};
  align-items: center;
  margin-right: 10px;
  text-align: center;
  font-weight:700;
`;

const ButtonStyled = styled.button`
  display: flex;
  padding: 10px;
  margin: 0;
  color: #708db3;
  font-size: 18px;
  font-weight: 700;
  text-transform: capitalize;
  text-decoration: none;

  &:hover {
    box-shadow: 0 1px 1px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%);
    transform: scale(1.1);
  }
`;

const TotalStyled = styled.p`
  margin-bottom: 30px;
  text-align: center;
  color: #708db3;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
`;

export {
  ListStyled, ItemStyled, ImageContainerStyled, TextStyled, PriceStyled,
  ValueStyled, ButtonStyled, TotalStyled
};
