import pageEnum from "../Enums/pageEnum"

interface props{
  setPage:(pageEnum:pageEnum) => void
}

export default function NavBar({setPage}:props) {
  return (
    <div className="NavBar">
      <button onClick={()=>{setPage(pageEnum.Credit)}}>Credit</button>
      <button onClick={()=>{setPage(pageEnum.Home)}}>Home</button>
      <button onClick={()=>{setPage(pageEnum.Transfer)}}>Transfers</button>
    </div>
  )
}
