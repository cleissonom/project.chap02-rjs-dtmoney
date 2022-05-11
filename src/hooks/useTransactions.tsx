import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface TransactionsType {
   id: number,
   title: string,
   value: number,
   type: string,
   category: string,
   createdAt: string
}

type TransactionsInput = Omit<TransactionsType, 'id' | 'createdAt'>

interface TransactionsProviderProps {
   children: ReactNode;
}

interface TransactionsContextData {
   transactions: TransactionsType[],
   createTransaction: (transaction: TransactionsInput) => Promise<void>,
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){
   const [transactions, setTransactions] = useState<TransactionsType[]>([])

   useEffect(()=>{
      api.get('http://localhost:3000/api/transactions')
         .then(response => setTransactions(response.data.transactions))
         .catch(error => console.error(error))
   }, [])

   async function createTransaction (transactionInput: TransactionsInput){
     const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date().toISOString()
     })
     const { transaction } = response.data;

     setTransactions([...transactions, transaction])
   }

   return (
      <TransactionsContext.Provider value={{transactions, createTransaction}}>
         {children}
      </TransactionsContext.Provider>
   );
}

export function useTransactions(){
   const context = useContext(TransactionsContext);

   return context;
}