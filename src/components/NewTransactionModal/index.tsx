import Modal from 'react-modal';
import closeSVG from '../../assets/close.svg';
import { NewTransactionModalStyles } from './styles';

Modal.setAppElement('#root')

interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: ()=>void;
}

export function NewTransactionModal ({isOpen, onRequestClose}:NewTransactionModalProps){
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
         {/* <input type="checkbox" name="income" id="income" />
         <input type="checkbox" name="outcome" id="outcome" /> */}
         <input type="text" placeholder='Category' name="category" id="category" />
         <button type='submit' className='submit-modal-button'>Create transaction</button>

      </NewTransactionModalStyles>
   </Modal>
   );
}