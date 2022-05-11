import incomesSVG from '../../assets/incomes.svg';
import outcomesSVG from '../../assets/outcomes.svg';
import totalSVG from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { SummaryStyle } from "./styles";

export function Summary (){
   const {transactions} = useTransactions()

   const summary = transactions.reduce((accumulator, transaction) => {
      if(transaction.type === 'income'){
         accumulator.incomes += Number(transaction.value)
         accumulator.total += Number(transaction.value)
      } else {
         accumulator.outcomes -= Number(transaction.value)
         accumulator.total -= Number(transaction.value)
      }

      return accumulator
   }, {
      incomes: 0,
      outcomes: 0,
      total: 0
   })

   const formatedTotal = new Intl.NumberFormat('en-US', {style: 'currency' ,currency: 'USD'}).format(summary.total)
   const formatedIncomes = new Intl.NumberFormat('en-US', {style: 'currency' ,currency: 'USD'}).format(summary.incomes)
   const formatedOutcomes = new Intl.NumberFormat('en-US', {style: 'currency' ,currency: 'USD'}).format(summary.outcomes)

   return (
      <SummaryStyle>
         <div>
            <header>
               <p>Incomes</p>
               <img src={incomesSVG} alt="Incomes Icon" />
            </header>
            <strong className='highlight-income'>{formatedIncomes}</strong>
         </div>
         <div>
            <header>
               <p>Outcomes</p>
               <img src={outcomesSVG} alt="Outcomes Icon" />
            </header>
            <strong className='highlight-outcome'>{formatedOutcomes}</strong>
         </div>
         <div className='highlight-background'>
            <header>
               <p>Total</p>
               <img src={totalSVG} alt="Total Icon" />
            </header>
            <strong>{formatedTotal}</strong>
         </div>
      </SummaryStyle>
   );
}