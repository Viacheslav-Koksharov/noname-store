import { IconContext } from "react-icons";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";

import {
  MainStyled,
  Form,
  ItemContainer,
  Label,
  LabelText,
  Input,
  iconStyle,
  InputContainer,
  button,
} from "./LoginView.styled";
import Button from "../../components/Button";

export default function LoginView() {
  return (
    <MainStyled>
      <Form autoComplete="off">
        <Label>Email</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: "absolute" } }}
            >
              <AiTwotoneMail />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
        <Label>
          Password<LabelText>Must have at least 7 characters</LabelText>
        </Label>
        <ItemContainer>
          <InputContainer>
            <Input type="password" name="password" id="password" />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: "absolute" } }}
            >
              <RiLockPasswordFill />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
        <Button style={button} type="submit">
          Login
        </Button>
      </Form>
    </MainStyled>
  );
}
