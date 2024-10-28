import { useState } from 'react'
import NavBar from './components/NavBar'
import pageEnum from './Enums/pageEnum'
import MainHome from './components/homeComponents/MainHome'
import MainCredit from './components/creditComponents/MainCredit'
import MainTransfer from './components/transferComponents/MainTransfer'
import ClientModel from './models/clientModel'
import CreditDebit from './models/creditDebit'
import TransferModel from './models/transferModel'

function App() {
  const [page, setPage] = useState<pageEnum>(pageEnum.Home)
  const newclient = new ClientModel("yonatan erblich", 550, 443332, -30000)
  newclient.creditDebits.push(new CreditDebit("super", 300), new CreditDebit("super", 500))
  newclient.transfers.push(new TransferModel(332003, "dgsefsdfsef", 3000, true))
  newclient.transfers.push(new TransferModel(332003, "dgsefsdfsef", 3000, false))
  const [client, setClient] = useState<ClientModel>(newclient)
  return (
    <div className='app'>
      {page == pageEnum.Home && <MainHome client={client}/>}
      {page == pageEnum.Credit && <MainCredit client={client}/>}
      {page == pageEnum.Transfer && <MainTransfer client={client}/>}
      <NavBar setPage={setPage}/>
    </div>
  )
}

export default App
