import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeTitle = styled.h1`
  width: 700px;

  text-align: center;
  font-weight: 600;
  color: #c0bfbf;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto;
  justify-content: center;
  border-radius: 8px;
  font-size: 40px;
`;

export const HomeText = styled.p`
  padding: 10px;
  width: 600px;
  margin: 0 auto;
  text-align: center;
  font-weight: 500;
  color: #c0bfbf;

  border-radius: 8px;
  font-size: 23px;
`;

export const HomeLink = styled(NavLink)`
  color: #87b9b3;

  &:hover {
    color: #7be8ea;
  }
`;

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  box-shadow: 2px 1px 15px #7be8ea;
  padding-top: 20px;
  padding-bottom: 20px;
`;
