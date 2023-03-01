import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import {
  FooterStyled,
  TitleStyled,
  Container,
  ListStyled,
  ItemStyled,
  LinkStyled,
  StaticLinkStyled,
  TextStyled,
} from "./Footer.styled";
import "../../index.css";

const Footer = () => {
  return (
    <FooterStyled>
      <TitleStyled>FOLLOW US</TitleStyled>
      <Container>
        <ListStyled>
          <ItemStyled key="facebook">
            <LinkStyled
              href="https://www.facebook.com/"
              aria-label="facebook"
              target="blank"
            >
              <FaFacebook className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="linkedin">
            <LinkStyled
              href="https://www.linkedin.com/"
              aria-label="linkedin"
              target="blank"
            >
              <FaLinkedin className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="instagram">
            <LinkStyled
              href="https://www.instagram.com/"
              aria-label="instagram"
              target="blank"
            >
              <FaInstagram className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="twitter">
            <LinkStyled
              href="https://twitter.com/"
              aria-label="twitter"
              target="blank"
            >
              <FaTwitter className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
          <ItemStyled key="pinterest">
            <LinkStyled
              href="https://www.pinterest.com/"
              aria-label="pinterest"
              target="blank"
            >
              <FaPinterest className="IconStyle" />
            </LinkStyled>
          </ItemStyled>
        </ListStyled>
        <ListStyled staticLinks>
          <ItemStyled>
            <StaticLinkStyled to={`/`}>customer service</StaticLinkStyled>
            <StaticLinkStyled to={`/`}>privacy policy</StaticLinkStyled>
            <StaticLinkStyled to={`/`}>terms and conditions</StaticLinkStyled>
          </ItemStyled>
        </ListStyled>
      </Container>
      <TextStyled>QQQQQQQQQQQ</TextStyled>
    </FooterStyled>
  );
};

export default Footer;
