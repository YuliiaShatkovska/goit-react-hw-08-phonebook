import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  max-width: 100%;
  box-shadow: 1px 2px 10px #c0bfbf;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #7be8ea;
  }
`;
