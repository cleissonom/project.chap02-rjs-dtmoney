import logoSVG from '../../assets/logo.svg';
import { Content, HeaderStyle } from './styles';

export function Header (){
   return (
      <HeaderStyle>
         <Content>
            <img src={logoSVG} alt="dtmoney Logo" />
            <button type="button">Nova transação</button>
         </Content>
      </HeaderStyle>
   );
}