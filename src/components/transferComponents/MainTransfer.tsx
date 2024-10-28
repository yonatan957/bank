import ClientModel from "../../models/clientModel"
import ListTransfer from "./listTransfer"

interface props{
  client:ClientModel
}

export default function MainTransfer({client}:props) {
  return (
    <div className='transfer page'>
      <h1>Transfers</h1>
      <hr style={{width:"75%"}} />
      <br />
      <ListTransfer client={client}/>
    </div>
  )
}
