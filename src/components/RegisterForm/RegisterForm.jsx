import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { registerUser } from '../../redux/auth/operations';
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

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    const form = e.currentTarget;

    dispatch(registerUser({ name, email, password }));
    console.log({ name, email, password });

    if (!email || !name || !password) {
      Notiflix.Notify.error('Something went wrong! Try again!');
    }
    Notiflix.Notify.info('Thank you! You have successfully registered!');

    form.reset();

    
  };

  return (
    <Container>
      <FormBox autoComplete="off" onSubmit={handleSubmit}>
        <FormInputBox>
          <FormLabel htmlFor={registerUsernameId}>Username</FormLabel>
          <FormInput
            type="text"
            name="name"
            id={registerUsernameId}
            onChange={handleChange}
            required
          />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={registerEmailId}>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            id={registerEmailId}
            onChange={handleChange}
            required
          />
        </FormInputBox>
        <FormInputBox>
          <FormLabel htmlFor={registerPasswordId}>Password</FormLabel>
          <FormInput
            type="password"
            name="password"
            id={registerPasswordId}
            onChange={handleChange}
            required
          />
        </FormInputBox>
        <FormBtn type="submit">Sign up</FormBtn>
      </FormBox>
    </Container>
  );
};
