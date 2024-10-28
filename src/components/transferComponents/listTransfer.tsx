import ClientModel from "../../models/clientModel"
import TransferItem from "./TransferItem"

interface props{
  client:ClientModel
}
export default function ListTransfer({client}:props) {
  return (
    <div className="page list">
      {client.transfers.map((transfer)=><TransferItem transfer={transfer}/>)}
    </div>
  )
}
