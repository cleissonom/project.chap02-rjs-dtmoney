import { useEffect } from 'react';
import { api } from '../../services/api';
import { TransactionsTableStyle } from './styles';

export function TransactionsTable (){
   useEffect(()=>{
      api.get('http://localhost:3000/api/transactions')
         .then(response => console.log(response.data))
         .catch(error => console.error(error))
   }, [])

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
