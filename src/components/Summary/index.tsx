import incomesSVG from '../../assets/incomes.svg';
import outcomesSVG from '../../assets/outcomes.svg';
import totalSVG from '../../assets/total.svg';
import { SummaryStyle } from "./styles";

export function Summary (){
   return (
      <SummaryStyle>
         <div>
            <header>
               <p>Incomes</p>
               <img src={incomesSVG} alt="Incomes Icon" />
            </header>
            <strong className='highlight-income'>$10,000.00</strong>
         </div>
         <div>
            <header>
               <p>Outcomes</p>
               <img src={outcomesSVG} alt="Outcomes Icon" />
            </header>
            <strong className='highlight-outcome'>- $5,000.00</strong>
         </div>
         <div className='highlight-background'>
            <header>
               <p>Total</p>
               <img src={totalSVG} alt="Total Icon" />
            </header>
            <strong>$5,000.00</strong>
         </div>
      </SummaryStyle>
   );
}