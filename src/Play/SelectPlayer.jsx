import PropTypes from 'prop-types';


const SelectPlayer = ({ selectPlayer, handleDelet }) => {
  console.log("Select xz", selectPlayer);

  return (
    <div>
      <h2 className="font-bold text-2xl mb-4">Selected Players ({selectPlayer.length}/6)</h2>
      <div className="">
        {selectPlayer.map((sePlayer) => (
          
        <div key={sePlayer.id} className="p-2  md:mx-8 my-5 border-2 border-gray-300 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <div className="flex ml-2 md:ml-8">
            <div className="mr-3 md:mr-5">
            <img className="h-16 w-16 rounded-2xl" src={sePlayer.url} alt="" />
            </div>
            <div>
              <h3 className='font-bold text-xl'>{sePlayer.name}</h3>
              <p>{sePlayer.battingStyle}</p>
            </div>
            </div>
            <div className="p-4 mr-2 md:mr-10" onClick={() => handleDelet(sePlayer.id)}>
              <button className="border-2 border-orange-600 w-16 h-12 rounded-xl"><i className="fa-solid fa-trash" ></i></button>
            </div>
          </div>
        </div>

        
      ))}
      </div>
    </div>
  );
};

SelectPlayer.propTypes = {
  selectPlayer: PropTypes.element.isRequired
};
SelectPlayer.propTypes = {
  handleDelet: PropTypes.element.isRequired
};


export default SelectPlayer;
