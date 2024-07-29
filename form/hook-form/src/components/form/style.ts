import styled from 'styled-components';

export const FormContainer = styled.div``;

export const FormWrapper = styled.div`
  border: 1px solid #e9e9e9;
  padding: 20px;
  border-radius: 12px;

  h2 {
    margin: 0;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 20px;
`;

export const Column = styled.div`
  border: 1px solid red;
`;

export const Row = styled.div``;
