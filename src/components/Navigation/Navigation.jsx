import { IoHome } from 'react-icons/io5';
import { NavBox } from './Navigation.styled';
import { LinkStyled } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  return (
    <NavBox>
      <LinkStyled to="/">
        Home
        <IoHome />
      </LinkStyled>
      <LinkStyled to="/contacts">Contacts</LinkStyled>
    </NavBox>
  );
};
