import ClientModel from "../../models/clientModel"
import CreditItem from "./CreditItem"

interface props{
  client:ClientModel
}

export default function ListCredit({client}:props) {
  return (
    <div className="page list">
      {client.creditDebits.map((creditDebit)=><CreditItem key={creditDebit.creditDebitId} credit={creditDebit}/>)}
    </div>
  )
}
