import Details from './Details'
import ClientModel from '../../models/clientModel'

interface props{
  client:ClientModel
}

export default function HomeainHome({client}:props) {
  return (
    <div className='home page'>
      <h1>Home</h1>
      <hr style={{width:"80%"}}/>
      <br />
      <Details client={client}/>
    </div>
  )
}
