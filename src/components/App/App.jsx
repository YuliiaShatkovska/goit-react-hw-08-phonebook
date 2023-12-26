import { Layout } from 'components/Layout/Layout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactsList/ContactsList';
// import Filter from '../Filter/Filter';
// import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
// import { fetchContacts } from '../../redux/contacts/operations';
// import { Container } from './App.styled';
// import Loader from 'components/Loader/Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={'contactPage'} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;

// const App = () => {
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <ContactForm />
//       <Filter />
//       {isLoading && !error && <Loader />}
//       <ContactList />
//     </Container>
//   );
// };

// export default App;
