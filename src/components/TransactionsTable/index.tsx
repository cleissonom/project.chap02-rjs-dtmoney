import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { TransactionsTableStyle } from './styles';

export function TransactionsTable (){
   const {transactions} = useContext(TransactionsContext)

   return (
      <TransactionsTableStyle>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Value</th>
                  <th>Category</th>
                  <th>Date</th>
               </tr>
            </thead>

            <tbody>
               {transactions.map(transaction => {
                  const formatedValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(transaction.value)
                  const formatedDate = new Intl.DateTimeFormat('en-US').format(new Date(transaction.createdAt))

                  return (
                     <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={`highlight-${transaction.type}`}>{formatedValue}</td>
                        <td>{transaction.category}</td>
                        <td>{formatedDate}</td>
                     </tr>                     
                  );
               })}
            </tbody>
         </table>
      </TransactionsTableStyle>
   );
}
