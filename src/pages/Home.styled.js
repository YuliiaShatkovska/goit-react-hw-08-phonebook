import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeTitle = styled.h1`
  width: 700px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  color: #c0bfbf;
  box-shadow: 2px 2px 10px #7be8ea;
  border-radius: 8px;
  font-size: 35px;
  margin-top: 50px;
`;

export const HomeText = styled.p`
  padding: 10px;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  color: #c0bfbf;
  box-shadow: 2px 2px 10px #7be8ea;
  border-radius: 8px;
  font-size: 23px;
  margin-top: 50px;
`;

export const HomeLink = styled(NavLink)`
  color: #87b9b3;

  &:hover {
    color: #7be8ea;
  }
`;
