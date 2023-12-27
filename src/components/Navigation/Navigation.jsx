import { useSelector } from 'react-redux';
import { IoHome } from 'react-icons/io5';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavBox } from './Navigation.styled';
import { LinkStyled } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavBox>
      <LinkStyled to="/">
        Home
        <IoHome />
      </LinkStyled>
      {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
    </NavBox>
  );
};
