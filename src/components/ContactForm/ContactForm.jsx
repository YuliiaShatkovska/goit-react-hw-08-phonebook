// import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Title } from '../Title/Title';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import {
  ContactErrorMessage,
  ContactFormBtn,
  ContactFormContainer,
  ContactInput,
  InputContainer,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const initialValues = {
  name: '',
  number: '',
  email: '',
};

const ContactForm = () => {
  const formNameId = nanoid();
  const numberId = nanoid();
  const emailId = nanoid();

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const onHandleSubmit = ({ name, number, email }, { resetForm }) => {
    const sameName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (sameName) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number, email }));

    Notiflix.Notify.info(`
    The contact ${name} has been successfully added!`);

    resetForm();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmit}
        validationSchema={schema}
      >
        <ContactFormContainer>
          <InputContainer>
            <label htmlFor={formNameId}>Name</label>
            <ContactInput
              id={formNameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Alice"
            />

            <ContactErrorMessage name="name" component="div" />
          </InputContainer>

          <InputContainer>
            <label htmlFor={numberId}>Number</label>
            <ContactInput
              id={numberId}
              type="tel"
              name="number"
              placeholder="+380"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
            <ContactErrorMessage name="number" component="p" />
          </InputContainer>

          <InputContainer>
            <label htmlFor={emailId}>Email</label>
            <ContactInput
              id={emailId}
              type="email"
              name="email"
              placeholder="example@mail.com"
            />
            <ContactErrorMessage name="number" component="p" />
          </InputContainer>
          <ContactFormBtn type="submit">Add contact</ContactFormBtn>
        </ContactFormContainer>
      </Formik>
    </>
  );
};

export default ContactForm;
