import CreditDebit from "../../models/creditDebit"

interface props{
    credit:CreditDebit
}

export default function CreditItem({credit}:props) {
  return (
    <div className="page item">
        <p>Business name: {credit.businessName}</p>
        <p>Amount: {credit.amount}</p>
        <p>Billing date: {credit.created_at.toLocaleString()}</p>
    </div>
  )
}
