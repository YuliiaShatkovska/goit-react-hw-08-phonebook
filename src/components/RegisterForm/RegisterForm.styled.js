import styled from 'styled-components';

export const RegisterFormBox = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

export const RegisterFormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RegisterFormInput = styled.input`
  padding: 10px;
  outline: transparent;
  background-color: transparent;
  border: none;
  border: 1px solid #757473;
  border-radius: 10px;
  color: #c0bfbf;

  &:hover {
    border-color: #7be8ea;
  }
`;

export const RegisterFormLabel = styled.label`
  text-align: start;
`;

export const RegisterFormBtn = styled.button`
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  border: 1px solid #757473;
  background-color: transparent;
  color: inherit;
  min-width: 100px;

  &:hover {
    border-color: #7be8ea;
  }
`;
