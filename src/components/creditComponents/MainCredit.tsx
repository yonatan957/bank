import ClientModel from "../../models/clientModel"
import ListCredit from "./ListCredit"

interface props{
  client:ClientModel
}

export default function MainCredit({client}:props) {
  return (
    <div className='credit page'>
      <h1>Credit billes</h1>
      <hr style={{width:"75%"}} />
      <br />
      <ListCredit client={client}></ListCredit>
    </div>
  )
}
