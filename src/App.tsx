import { useState } from 'react'
import NavBar from './components/NavBar'
import pageEnum from './Enums/pageEnum'
import MainHome from './components/homeComponents/MainHome'
import MainCredit from './components/creditComponents/MainCredit'
import MainTransfer from './components/transferComponents/MainTransfer'
import ClientModel from './models/clientModel'

function App() {
  const [page, setPage] = useState<pageEnum>(pageEnum.Home)
  const [client, setClient] = useState<ClientModel>(new ClientModel("yonatan erblich", 550, 443332, -30000))
  return (
    <div className='app'>
      {page == pageEnum.Home && <MainHome client={client}/>}
      {page == pageEnum.Credit && <MainCredit/>}
      {page == pageEnum.Transfer && <MainTransfer/>}
      <NavBar setPage={setPage}/>
    </div>
  )
}

export default App
