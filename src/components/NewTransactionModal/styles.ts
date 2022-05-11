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

export const TransactionTypeStyle = styled.div`
   margin-top: 1rem;
   margin-bottom: 1rem;

   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 0.5rem;
`;

interface RadioBoxStyleProps {
   readonly wasSelected: boolean;
}

export const RadioBoxStyle = styled.button<RadioBoxStyleProps>`
      height: 4rem;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${(props)=> props.wasSelected ? '#eee' : 'transparent'};
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;

      transition: all 200ms;

      &:hover {
         filter: brightness(0.9);
      }

      img {
         height: 25px;
         width: 25px;
      }

      span {
         display: inline-block;
         margin-left: 1rem;
         font-size: 1rem;
         font-weight: 400;
         color: var(--text-title);
      }
`