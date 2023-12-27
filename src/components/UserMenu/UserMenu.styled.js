import styled from 'styled-components';

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const LogOutBtn = styled.button`
  padding: 5px;
  border: none;
  border-radius: 10px;
  border: 1px solid #757473;
  background-color: transparent;
  color: inherit;

  &:hover {
    border-color: #7be8ea;
  }
`;
