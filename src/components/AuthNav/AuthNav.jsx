import { CiLogin } from 'react-icons/ci';
import { AuthNavBox } from './AuthNav.styled';
import { LinkStyled } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">
        Log In <CiLogin />
      </LinkStyled>
    </AuthNavBox>
  );
};
