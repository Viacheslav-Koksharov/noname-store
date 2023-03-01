import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
    padding: 20px;
    margin: 0;
    background-color: white;
    border-top: 1px solid #708db3;
`;

const TitleStyled = styled.p`
    margin-bottom: 10px;
    color: #708db3;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
`;
const Container = styled.div`
display: flex;
  justify-content: space-between;
  align-items:center;
`;
const ListStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left:10px;
    width: 350px;`;

const ItemStyled = styled.li``;

const LinkStyled = styled.a`
    display: inline-block;

    :hover {
        transform: scale(1.1);
    }
`;

const StaticLinkStyled = styled(Link)`
    display: inline-block;
    padding: 5px;
    color: #708db3;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;

    :hover {
        transform: scale(1.1);
    }
`;

const TextStyled = styled.p`
    margin-top: 20px;
    color: #708db3;
    font-size: 10px;
    font-weight: 500;
`;

export { FooterStyled, TitleStyled, Container, ListStyled, ItemStyled, LinkStyled, StaticLinkStyled, TextStyled };