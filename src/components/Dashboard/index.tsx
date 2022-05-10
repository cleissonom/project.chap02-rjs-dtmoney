import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { DashboardStyle } from './styles';

export function Dashboard(){
   return(
      <DashboardStyle>
         <Summary />
         <TransactionsTable />
      </DashboardStyle>
   );
}