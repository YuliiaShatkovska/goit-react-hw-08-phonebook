import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { loginUser } from '../../redux/auth/operations';
import { Container } from 'components/App/App.styled';
import {
  FormBox,
  FormBtn,
  FormInput,
  FormInputBox,
  FormLabel,
} from 'components/AuthNav/AuthNav.styled';

export const LoginForm = () => {
  const loginEmailId = nanoid();
  const loginPasswordId = nanoid();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(email, password);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    const form = e.currentTarget;
    form.reset();
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <FormBox autoComplete="off" onSubmit={handleSubmit}>
        <FormInputBox>
          <FormLabel htmlFor={loginEmailId}>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            id={loginEmailId}
            onChange={handleChange}
          />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={loginPasswordId}>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id={loginPasswordId}
            onChange={handleChange}
          />
        </FormInputBox>
        <FormBtn type="submit">Log In</FormBtn>
      </FormBox>
    </Container>
  );
};
