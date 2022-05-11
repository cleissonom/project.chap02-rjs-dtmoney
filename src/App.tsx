import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
   
   function handleOpenNewTransactionModalOpen (){
      setIsNewTransactionModalOpen(true)
   }

   function handleCloseNewTransactionModalOpen (){
      setIsNewTransactionModalOpen(false)
   }

   return (
      <TransactionsProvider>
         <Header onNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
         <Dashboard />
         <NewTransactionModal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModalOpen} 
         />
      </TransactionsProvider>
   );
}