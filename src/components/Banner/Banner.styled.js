import styled from "styled-components";

const ContainerStyled = styled.div`
    display: flex;
    padding: 3px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    background-image: linear-gradient(120deg,#2f66e6,#50f45e);
`;

const TextStyled = styled.p`
    margin: 0;
    color: white;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`;

export { ContainerStyled, TextStyled }