import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle } from "./styles/global";

createServer({
   models: {
      transaction : Model,
   },
   seeds(server){
      server.db.loadData({
         transactions: [
            {
               id: 1,
               title: 'Salário',
               value: 10000,
               type: 'income',
               category: 'Job',
               createdAt: new Date('2021-09-24 13:32:43'),
            },
            {
               id: 2,
               title: 'Aluguel',
               value: 3000,
               type: 'outcome',
               category: 'bil',
               createdAt: new Date('2021-09-20 12:23:02'),
            }
         ]
      })
   },
   routes(){
      this.namespace = 'api';
      this.get('/transactions', () => {
         return this.schema.all('transaction')
      })
      this.post('/transactions', (schema, request) => {
         const data = JSON.parse(request.requestBody)

         return schema.create('transaction', data)
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