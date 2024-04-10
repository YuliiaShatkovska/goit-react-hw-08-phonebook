import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 288px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 727px;
    padding: 20px;
  }

  /* @media screen and (min-width: 1280px) {
    max-width: 1230px;
    padding: 25px;
  } */
`;
