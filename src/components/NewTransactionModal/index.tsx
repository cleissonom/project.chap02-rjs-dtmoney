import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/incomes.svg';
import outcomeSVG from '../../assets/outcomes.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { NewTransactionModalStyles, RadioBoxStyle, TransactionTypeStyle } from './styles';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: ()=>void;
}

export function NewTransactionModal ({isOpen, onRequestClose}:NewTransactionModalProps){
   const { createTransaction } = useContext(TransactionsContext)

   const [title, setTitle] = useState('')
   const [value, setValue] = useState(0)
   const [category, setCategory] = useState('')
   const [transictionType, setTransictionType] = useState('outcome')

   function handleCreateNewTransaction(e: FormEvent){
      e.preventDefault()
      createTransaction({
         title,
         value,
         type: transictionType,
         category,
      })
   }

   return (
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction Modal"
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
   >
      <NewTransactionModalStyles
            onSubmit={handleCreateNewTransaction}
         >
         <button type='button' className='close-modal-button' onClick={onRequestClose}>
            <img src={closeSVG} alt="Fechar modal" />
         </button>
         
         <h2>Create a new transaction</h2>

         <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
         <input type="number" placeholder='Value' value={value} onChange={e => setValue(Number(e.target.value))} />

         <TransactionTypeStyle>
            <RadioBoxStyle 
               type="button"
               onClick={() => setTransictionType('income')}
               wasSelected={transictionType === 'income'}
               activeColor="hsl(130, 70%, 90%)"
            >
               <img src={incomeSVG} alt="Outcome icon" />
               <span>Income</span> 
            </RadioBoxStyle>
            <RadioBoxStyle 
               type="button"
               onClick={() => setTransictionType('outcome')}
               wasSelected={transictionType === 'outcome'}
               activeColor="hsl(0, 100%, 90%)"
            >
               <img src={outcomeSVG} alt="Outcome icon" />
               <span>Outcome</span> 
            </RadioBoxStyle>
         </TransactionTypeStyle>
         
         <input type="text" placeholder='Category' name="category" id="category" value={category} onChange={e => setCategory(e.target.value)} />
         <button 
            type='submit' 
            className='submit-modal-button'
         >
            Create transaction
         </button>

      </NewTransactionModalStyles>
   </Modal>
   );
}