import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from "./styles/global";

createServer({
   routes(){
      this.namespace = 'api';
      this.get('/transactions', () => {
         return [
            {
               id: 1, 
               title: 'Pizza', 
               amount: 50,
               type: 'Food',
               value: 'outcome',
               createdAt: new Date()
            }
         ]
      })
   }
})

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <App />
      <GlobalStyle />
   </React.StrictMode>
);