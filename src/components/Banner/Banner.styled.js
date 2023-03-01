import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    background-image: linear-gradient(120deg,#a6c0fe,#f68084);
`;

const TextStyled = styled.p`
    margin: 0;
    color: white;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
`;

export { ContainerStyled, TextStyled }