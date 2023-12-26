import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  /* border-bottom: 1px solid #c0bfbf; */
  box-shadow: 1px 2px 10px #c0bfbf;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: #7be8ea;
  }
`;
