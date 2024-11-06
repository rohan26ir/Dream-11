import banner from "./assets/banner-main.png";
import PropTypes from 'prop-types';

export default function Hero ({handleCoin}) {


  return (
    <div className="mx-4 md:mx-20 my-5 bg-black rounded-lg">
      <div className="bg-custom-image bg-cover bg-no-repeat bg-center w-full rounded-lg p-10">
           <div className="flex flex-col justify-center items-center space-y-3">
            <img src={banner} alt="" />
            <h2 className="font-bold text-2xl md:text-4xl text-center text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-xl text-center md:block text-gray-600">Beyond Boundaries Beyond Limits</p>

            <button className="px-3 py-2 rounded-lg font-bold bg-yellow-400 hover:bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 ring-yellow-400 ring-2 border-4 border-black"
            onClick={()=> handleCoin(20000)}
            >Claim Free Credit</button>
           </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handleCoin: PropTypes.element.isRequired
};
