import styled from 'styled-components'

export const TransactionsTableStyle = styled.section`
   margin-top: 2rem;

   overflow-x: scroll;

   table {
      width: 100%;
      border: 0;
      border-spacing: 0 0.5rem;
      text-align: left;

      thead th {
         color: var(--text-body);
         font-weight: 400;
         padding: 1rem 2rem;
         line-height: 1.5rem;
      }

      tbody tr {
         margin: 0.2rem;
         filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.1));
         border-radius: 0.5rem;
      }

      tbody tr td {
         padding: 1rem 2rem;
         border: none;
         background-color: var(--shape);
         color: var(--text-body);

         &:first-child {
            color: var(---text-title);
         }

         &.highlight-outcome{
            color: var(--red);
         }

         &.highlight-income{
            color: var(--green);
         }
      }
   }
`