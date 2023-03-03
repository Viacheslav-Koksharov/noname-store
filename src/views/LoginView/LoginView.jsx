import React, { useRef } from 'react';
import { useUserContext } from '../../context/userContext.js';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiTwotoneMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

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
  buttonGoogle,
} from './LoginView.styled';
import Button from '../../components/Button';

export default function LoginView() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, signInWithGoogle } = useUserContext();

  const onSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
    navigate('/offers');
  };

  const submitWithGoogle = () => {
    signInWithGoogle();
    navigate('/offers');
  };

  return (
    <MainStyled>
      <Form onSubmit={onSubmit} autoComplete="off">
        <Label>Email</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="email"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="example@mail.com"
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: 'absolute' } }}
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
            <Input type="password" name="password" id="password" ref={psdRef} />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: 'absolute' } }}
            >
              <RiLockPasswordFill />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
        <Button style={button} type="submit">
          Login
        </Button>
      </Form>
      <Button onClick={submitWithGoogle} style={buttonGoogle}>
        Log with Google
      </Button>
    </MainStyled>
  );
}
