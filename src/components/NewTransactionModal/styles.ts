import styled from 'styled-components';

export const NewTransactionModalStyles = styled.form`
   width: 100%;

   h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
   }

   input {
      height: 4rem;
      width: 100%;
      padding: 0 1.5rem;
      border-radius: 0.25rem;

      border: 1px solid #d7d7d7;  
      background-color: #e7e9ee;

      font-weight: 400;
      font-size: 1rem;

      & + input {
         margin-top: 1rem;
      }

      &::placeholder {
         color: var(--text-body);
      }

      &:focus {
         outline: 2px solid #d7d7d7;
         outline-offset: 2px;
      }
   }
`;