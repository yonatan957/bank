import TransferModel from "../../models/transferModel"

interface props{
    transfer:TransferModel
}

export default function TransferItem({transfer}:props):JSX.Element {
  return (
    <div className="page transferItem">
    <div className="page item">
        <p>{transfer.is_it_acceptance? `Recived from accont ${transfer.account}`: `Send to accont ${transfer.account}`}</p>
        <p>Amount: {transfer.amount}</p>
        <p>Transfer date: {transfer.created_at.toLocaleString()}</p>
    </div>
    <div>{transfer.is_it_acceptance? "⬇️":"⬆️"}</div>
    </div>
  )
}
