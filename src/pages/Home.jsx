import { Container } from 'components/App/App.styled';
import { HomeTitle } from './Home.styled';

import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Home() {
  return (
    <Container>
      <HomeTitle>Welcome to your contacts</HomeTitle>

      <LoginForm />
    </Container>
  );
}
