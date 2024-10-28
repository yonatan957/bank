import ClientModel from "../../models/clientModel"

interface props{
  client:ClientModel
}

export default function Details({client}:props) {
  return (
    <div className="Details page">
      <p style={{textAlign:"center"}}>Name: {client.name}</p>
      <p>Branch: {client.branch}</p>
      <p>Account Number: {client.accountNumber}</p>
      <h1>Balance: {client.balance + (client.balance < 0? " 😥": " 😉")}</h1>
    </div>
  )
}
