import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Player from './Player';

const Allplayers = ({handleSelect}) => {

  const [players, setPlayers] = useState([]);

  useEffect(()=> {
    fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
  } ,[])

  
  // 

  return (
    <div className='mb-36 '>
          <h2 className="font-bold text-2xl mb-4">Available Players </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl'>
      {
        players.map(player => <Player
        player={player}
        key={player.id}
        handleSelect={handleSelect}
        ></Player>)
      }
      </div>
    </div>
  );
};

Allplayers.propTypes = {
  handleSelect: PropTypes.element.isRequired
};

export default Allplayers;