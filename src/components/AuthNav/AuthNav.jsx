import { CiLogin } from 'react-icons/ci';
import { LinkStyled } from 'components/AppBar/AppBar.styled';
import { AuthNavBox } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavBox>
      <LinkStyled to="/register">Sign up</LinkStyled>
      <LinkStyled to="/login">
        Log In <CiLogin />
      </LinkStyled>
    </AuthNavBox>
  );
};
