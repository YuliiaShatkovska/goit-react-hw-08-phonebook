import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { RiContactsBook2Line } from 'react-icons/ri';
import { Container } from 'components/App/App.styled';
import { HomeContainer, HomeLink, HomeText, HomeTitle } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <HomeContainer>
        <HomeTitle>
          Welcome to your Phonebook <RiContactsBook2Line />
        </HomeTitle>

        {!isLoggedIn && (
          <HomeText>
            To see your contacts, please,{' '}
            <HomeLink to="/login">Log In</HomeLink> or{' '}
            <HomeLink to="/register">Sign up</HomeLink>
          </HomeText>
        )}
      </HomeContainer>
    </Container>
  );
}
