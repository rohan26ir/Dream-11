import PropTypes from 'prop-types';


const Player = ({player, handleSelect}) => {

 
// console.log(handleSelect);
  


  const {name, url, team, role, battingStyle, price,} = player;
  return (
    <div>
      {/*  */}
      <div className="">
        <div className="border-2 border-gray-300 p-4 rounded-lg">
          <img className="h-48 w-full rounded-lg" src={url} alt="" />
          <h2 className="text-xl font-bold my-4"><i className="fa-solid fa-user mr-2"></i>{name}</h2>
          <div className="flex justify-between">
            <div className="text-gray-400"><i className="fa-solid fa-flag"></i> {team}</div>
            <div className="px-3 py-1 bg-gray-300 rounded-lg">{role}</div>
          </div>
          <div className="divider"></div>
          <h3 className="font-bold">Rating</h3>
          <div className="flex justify-between my-4">
            <div className="font-bold">{battingStyle}</div>
            <div>{battingStyle}</div>
          </div>
          <div className="flex justify-between my-2">
            <div className="font-bold">Price: ${price}</div>
            <div className="px-3 py-1 rounded-lg cursor-pointer border-2 border-gray-500 hover:bg-gray-300"
            onClick={() => handleSelect(player)}
            >Choose Player</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.element.isRequired
};
Player.propTypes = {
  handleSelect: PropTypes.element.isRequired
};


export default Player;