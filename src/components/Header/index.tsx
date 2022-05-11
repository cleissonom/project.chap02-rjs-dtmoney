import logoSVG from '../../assets/logo.svg';
import { Content, HeaderStyle } from './styles';

interface HeaderProps {
   onNewTransactionModalOpen: ()=>void
}

export function Header ({onNewTransactionModalOpen}:HeaderProps){
   return (
      <HeaderStyle>
         <Content>
            <img src={logoSVG} alt="dtmoney Logo" />
            <button 
               type="button"
               onClick={onNewTransactionModalOpen}
            >
               New transaction
            </button>
         </Content>
      </HeaderStyle>
   );
}
