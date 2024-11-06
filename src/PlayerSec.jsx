import PropTypes from 'prop-types';


import Allplayers from "./Play/Allplayers";
import SelectPlayer from "./Play/SelectPlayer";






const PlayerSec = ({handleActive, isactive, handleSelect, selectPlayer, handleDelet}) => {
 
  // console.log("Player Length: ", Player);

  // console.log("Player Section", player);
   // For Select player

//  const [selectPlayer, setSelectPlayer] = useState([])
//  const handleSelect = (player) =>{
//   console.log(player);
//  }

 
  return (
    <div className="mx-4 md:mx-20 my-10">
      <div className="flex justify-between items-center">
        <div>
          {/* <h2 className="font-bold text-2xl">Available Players</h2> */}
        </div>
        <div className="flex gap-3">
          <button className={`${isactive.Available ? "bg-lime-400 btn": "btn"}`} onClick={()=> handleActive("Available")}>Available</button>
          <button className={`${isactive.Available? "btn" : "bg-lime-400 btn"}`} onClick={()=> handleActive("Selected")}>Selected {selectPlayer.length}</button>
        </div>

        
      </div>
      <div>
         
          {isactive.Available ? <Allplayers handleSelect={handleSelect}></Allplayers> : <SelectPlayer
          handleDelet={handleDelet}
          selectPlayer={selectPlayer}
          ></SelectPlayer>}
        </div>
    </div>
  );
};

PlayerSec.propTypes = {
   handleActive: PropTypes.element.isRequired
};
PlayerSec.propTypes = {
   isactive: PropTypes.element.isRequired
};

export default PlayerSec;