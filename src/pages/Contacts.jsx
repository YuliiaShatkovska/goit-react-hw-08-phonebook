import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Container } from 'components/App/App.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <Filter />
      {isLoading && !error ? (
        <Loader />
      ) : contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>No contacts added yet</p>
      )}
    </Container>
  );
};

export default Contacts;
