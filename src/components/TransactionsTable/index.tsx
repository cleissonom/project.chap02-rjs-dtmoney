import { TransactionsTableStyle } from './styles';

export function TransactionsTable (){
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
               <tr>
                  <td>WebSite Development</td>
                  <td className='highlight-income'>$10,000</td>
                  <td>Job</td>
                  <td>12/21/2021</td>
               </tr>
               <tr>
                  <td>Rent</td>
                  <td className='highlight-outcome'>- $5,000</td>
                  <td>Bil</td>
                  <td>12/21/2021</td>
               </tr>
            </tbody>
         </table>
      </TransactionsTableStyle>
   );
}