import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {
   const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
   
   function handleOpenNewTransactionModalOpen (){
      setIsNewTransactionModalOpen(true)
   }

   function handleCloseNewTransactionModalOpen (){
      setIsNewTransactionModalOpen(false)
   }

   return (
      <>
         <Header onNewTransactionModalOpen={handleOpenNewTransactionModalOpen}/>
         <Dashboard />
         <NewTransactionModal 
            isOpen={isNewTransactionModalOpen} 
            onRequestClose={handleCloseNewTransactionModalOpen} 
         />
      </>
   );
}