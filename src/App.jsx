import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import PlayerSec from "./PlayerSec"
import Subscribe from "./Subscribe"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {
 
// For Coin Add
const [coin, setCoin] = useState(0)

const handleCoin = (addCoin)=>{
  const updateCoin = coin + addCoin

  setCoin(updateCoin)

  toast.success("Add Money:  "+ `${addCoin}` + " $" )
}



  // For Button(Available, Select)
  const [isactive, setActive] = useState({Available: true})
  
  
  const handleActive =(Stats)=>{
    if(Stats === "Available"){
      setActive({Available: true})
    }
    else{
      setActive({
        Available: false
      })
    }
  }

  // For Select Player

  const [selectPlayer, setSelectPlayer] = useState([])
  const handleSelect = (player) =>{
  
  
   
    const isSelect = selectPlayer.find((plr) => plr.id == player.id)

  

  if (!isSelect) {
      if (coin <player.price) {
        toast.error("Not enough coins to select this player!", { position: "top-center" });
      }
      else if(selectPlayer.length>=6){
        toast.error("You Can't Select More Then 6 Players", { position: "top-center" });
       
        return


      }
  
      else {
        setSelectPlayer([...selectPlayer, player])
        setCoin(coin - player.price)
        toast.success("Congrates! "+` ${player.name}` + " is now in your Team", { position: "top-center" });
     
          
  
      }
    }
    else {
      
      toast.error("Player Already Taken")

    }


   

    console.log(selectPlayer);
  }

  // btn delet
  const handleDelet = (id)=> {
    
    toast.error("Removed Player")
     const delePlayer = selectPlayer.filter((fil) => fil.id !== id)
       setSelectPlayer(delePlayer);
    

  }

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero handleCoin={handleCoin}></Hero>
      <PlayerSec 
      handleDelet={handleDelet}
      selectPlayer={selectPlayer}
      handleSelect={handleSelect}
      handleActive={handleActive}  
      isactive={isactive}></PlayerSec>
      <Subscribe></Subscribe>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App;
