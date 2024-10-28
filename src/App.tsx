import { useState } from 'react'
import NavBar from './components/NavBar'
import pageEnum from './Enums/pageEnum'
import MainHome from './components/homeComponents/MainHome'
import MainCredit from './components/creditComponents/MainCredit'
import MainTransfer from './components/transferComponents/MainTransfer'

function App() {
  const [page, setPage] = useState<pageEnum>(pageEnum.Home)
  return (
    <div className='app'>
      {page == pageEnum.Home && <MainHome/>}
      {page == pageEnum.Credit && <MainCredit/>}
      {page == pageEnum.Transfer && <MainTransfer/>}
      <NavBar setPage={setPage}/>
    </div>
  )
}

export default App
