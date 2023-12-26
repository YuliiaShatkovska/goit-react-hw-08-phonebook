import styled from 'styled-components';

export const AuthNavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const FormBox = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`;

export const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormInput = styled.input`
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

export const FormLabel = styled.label`
  text-align: start;
`;

export const FormBtn = styled.button`
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
