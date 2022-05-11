import { useState } from 'react';
import Modal from 'react-modal';
import closeSVG from '../../assets/close.svg';
import incomeSVG from '../../assets/incomes.svg';
import outcomeSVG from '../../assets/outcomes.svg';
import { NewTransactionModalStyles, RadioBoxStyle, TransactionTypeStyle } from './styles';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: ()=>void;
}

export function NewTransactionModal ({isOpen, onRequestClose}:NewTransactionModalProps){
   const [transictionType, setTransictionType] = useState('outcome')

   return (
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="New Transaction Modal"
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
   >
      <NewTransactionModalStyles>
         <button type='button' className='close-modal-button' onClick={onRequestClose}>
            <img src={closeSVG} alt="Fechar modal" />
         </button>
         
         <h2>Create a new transaction</h2>

         <input type="text" placeholder='Title' />
         <input type="number" placeholder='Value' name="value" id="value" />
         <TransactionTypeStyle>
            <RadioBoxStyle 
               type="button"
               onClick={() => setTransictionType('income')}
               wasSelected={transictionType === 'income'}
            >
               <img src={incomeSVG} alt="Outcome icon" />
               <span>Income</span> 
            </RadioBoxStyle>
            <RadioBoxStyle 
               type="button"
               onClick={() => setTransictionType('outcome')}
               wasSelected={transictionType === 'outcome'}
            >
               <img src={outcomeSVG} alt="Outcome icon" />
               <span>Outcome</span> 
            </RadioBoxStyle>
         </TransactionTypeStyle>
         <input type="text" placeholder='Category' name="category" id="category" />
         <button type='submit' className='submit-modal-button'>Create transaction</button>

      </NewTransactionModalStyles>
   </Modal>
   );
}