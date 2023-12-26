import { nanoid } from '@reduxjs/toolkit';
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

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Container>
      <FormBox autoComplete="off" onSubmit={handleSubmit}>
        <FormInputBox>
          <FormLabel htmlFor={loginEmailId}>Email</FormLabel>
          <FormInput type="email" name="email" id={loginEmailId} />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={loginPasswordId}>Password</FormLabel>
          <FormInput type="password" name="password" id={loginPasswordId} />
        </FormInputBox>
        <FormBtn type="submit">Log In</FormBtn>
      </FormBox>
    </Container>
  );
};
