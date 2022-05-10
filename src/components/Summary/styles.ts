import styled from 'styled-components';

export const SummaryStyle = styled.section`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-gap: 2rem;
   margin-top: -7rem;
   border-radius: 0.5rem;

   overflow-x: scroll;

   div {
      background-color: var(--shape);
      padding: 1.5rem 2rem;
      border-radius: 0.5rem;
      margin: 0.3rem;

      color: var(--text-title);

      min-width: 20rem;
      filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.1));

      header {
         display: flex;
         align-items: center;
         justify-content: space-between;
      }

      strong {
         display: inline-block;

         margin-top: 1rem;
         font-size: 2rem;
         font-weight: 500;
         line-height: 3rem;

         @media (max-width: 1140px){
            font-size: 1.5rem;
         }

         &.highlight-outcome {
            color: var(--red);
         }

         &.highlight-income {
            color: var(--green);
         }
      }

      &.highlight-background {
         background-color: var(--green);
         color: white;
      }
   }
`