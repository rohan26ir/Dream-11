import logo from "./assets/logo.png";
import coinImg from "./assets/Currency.png";

export default function Navbar({coin}) {

  // console.log(coin);
  return (
    <div className="flex justify-between mx-3 md:mx-20 my-5">
      <div>
        <img className="h-14 w-14" src={logo} alt="Logo" />
      </div>
      <div className="flex justify-center items-center space-x-4 ">
        <div className="hidden md:block">
        <ul className="flex justify-center items-center space-x-5 p-4">
          <li className="px-4 py-2 cursor-pointer">Home</li>
          <li className="px-4 py-2 cursor-pointer">Fixture</li>
          <li className="px-4 py-2 cursor-pointer">Teams</li>
          <li className="px-4 py-2 cursor-pointer">Schedules</li>
        </ul>
        </div>
        <div className="flex border-2 border-gray-600 rounded-lg w-full px-4 py-1 ml-10 gap-2 font-bold">
          <div>
          ${coin} Coin 
          </div>
          <div>
          <img src={coinImg} alt="" /></div>
          </div>
      </div>
    </div>
  );
};
