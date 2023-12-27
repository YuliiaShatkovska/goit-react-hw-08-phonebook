import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Container } from 'components/App/App.styled';
import { HomeLink, HomeText, HomeTitle } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <HomeTitle>Welcome to your contacts</HomeTitle>

      {!isLoggedIn && (
        <HomeText>
          To see your contacts, please, <HomeLink to="/login">Log In</HomeLink>{' '}
          or <HomeLink to="/register">Sign up</HomeLink>
        </HomeText>
      )}
    </Container>
  );
}
