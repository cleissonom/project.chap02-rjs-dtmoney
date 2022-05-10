import styled from "styled-components";

export const HeaderStyle = styled.header`
   background-color: var(--blue);
`

export const Content = styled.div`
   max-width: 75vw;
   margin: 0 auto;

   padding: 2rem 1rem 10rem;

   display: flex;
   align-items: center;
   justify-content: space-between;

   button {
      font-size: 1rem;
      color: #fff;
      background-color: var(--blue-light);

      height: 3rem;

      border: 0;
      padding: 0.75rem 2rem;
      border-radius: 0.25rem;  

      transition: all 200ms;

      &:hover {
         cursor: pointer;
         filter: brightness(1.15);
      }
   }

   @media (max-width: 568px) {
      max-width: 100vw;
   }

   @media (max-width: 380px) {
      flex-direction: column;
      gap: 2rem;
   }
`