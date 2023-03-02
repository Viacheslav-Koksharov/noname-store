import React, { useRef } from 'react';
import { useUserContext } from '../../context/userContext.js';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
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
} from './RegisterView.styled';
import Button from '../../components/Button';

export default function RegisterView() {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser, signInWithGoogle } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
    navigate('/');
  };
  const submitWithGoogle = () => {
    signInWithGoogle();
    navigate('/');
  };

  return (
    <MainStyled>
      <Form onSubmit={onSubmit} autoComplete="off">
        <Label> Name</Label>
        <ItemContainer>
          <InputContainer>
            <Input
              type="name"
              name="name"
              id="name"
              ref={nameRef}
              placeholder=""
            />
            <IconContext.Provider
              value={{ style: { ...iconStyle, position: 'absolute' } }}
            >
              <FaUserAlt />
            </IconContext.Provider>
          </InputContainer>
        </ItemContainer>
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
          Register
        </Button>
      </Form>
      <Button onClick={submitWithGoogle} style={button}>
        Submit with Google
      </Button>
    </MainStyled>
  );
}
