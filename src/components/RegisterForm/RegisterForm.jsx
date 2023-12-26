import { nanoid } from '@reduxjs/toolkit';
import { Container } from 'components/App/App.styled';
import {
  FormBox,
  FormBtn,
  FormInput,
  FormInputBox,
  FormLabel,
} from 'components/AuthNav/AuthNav.styled';

export const RegisterForm = () => {
  const registerUsernameId = nanoid();
  const registerEmailId = nanoid();
  const registerPasswordId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Container>
      <FormBox autoComplete="off" onSubmit={handleSubmit}>
        <FormInputBox>
          <FormLabel htmlFor={registerUsernameId}>Username</FormLabel>
          <FormInput type="text" name="name" id={registerUsernameId} />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={registerEmailId}>Email</FormLabel>
          <FormInput type="email" name="email" id={registerEmailId} />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={registerPasswordId}>Password</FormLabel>
          <FormInput type="password" name="password" id={registerPasswordId} />
        </FormInputBox>
        <FormBtn type="submit">Register</FormBtn>
      </FormBox>
    </Container>
  );
};
