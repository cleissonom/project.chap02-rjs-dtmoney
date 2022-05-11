import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
      --background: #f0f2f5;
      --red: #e52e4d;
      --green: #33cc95;
      --blue: #5429cc;
      --blue-light: #6933ff;

      --text-title: #363F5F;
      --text-body: #969cb2;

      --shape: #ffffff;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      @media (max-width: 1080px){
         font-size: 93.75%; //15px
      }
      @media (max-width: 720px){
         font-size: 87.5%; // 14px
      }

      overflow: hidden;
   }

   body {
      width: 100vw;
      height: 100vh;

      background-color: var(--background);
      color: var(---text);

      -webkit-font-smoothing: antialiased;
   }

   body, input, textarea, button {
      font-family: Poppins, Arial, Helvetica, sans-serif;
      font-weight: 400;
   }

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }

   button {
      cursor: pointer;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   .react-modal-overlay {
      background-color: rgba(0, 0, 0, 0.5);

      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;

      display: flex;
      align-items: center;
      justify-content: center;
   }
   
   .react-modal-content {
      width: 100%;
      max-width: 576px;

      outline: none;

      background-color: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
   }

   button.close-modal-button {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      height: 3rem;
      border: none;
      background-color: transparent;

      transition: all 200ms;

      &:hover {
         cursor: pointer;
         filter: brightness(0.8);
      }
   }

   button.submit-modal-button {
      width: 100%;
      height: 4rem;
      margin-top: 1.5rem;
      padding: 0 1.5rem;
      color: white;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      background-color: var(--green);
      font-weight: 600;

      transition: all 200ms;

      &:hover {
         cursor: pointer;
         filter: brightness(0.9);
      }
   }
`