import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #c0bfbf;
  box-shadow: 2px 2px 10px #7be8ea;
  border-radius: 5px;
  font-size: 40px;
  margin-top: 50px;
`;

export const HomeText = styled.p`
  padding: 15px;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  color: #c0bfbf;
  box-shadow: 2px 2px 10px #7be8ea;
  border-radius: 20px;
  font-size: 30px;
  margin-top: 50px;
`;

export const HomeLink = styled(NavLink)`
  color: #c0bfbf;
  text-decoration: underline;

  &:hover {
    color: #7be8ea;
  }
`;
