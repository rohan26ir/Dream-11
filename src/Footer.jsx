import logo from "./assets/logo.png";


export default function Footer() {
  return (
    <div className="">
      <div className="bg-[#060919] pt-56 md:pt-10 ">
        <img className="mx-auto py-20" src={logo} alt="" />
        <div className="grid grid-cols-1 md:grid-cols-3  gap-3 mx-4 md:mx-20 p-5 text-white">
          <div>
            <h3 className="font-bold text-xl">Home</h3>
            <p className="text-gray-400">We are a passionate team <br />dedicated to providing the best <br />services to our customers.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Quick Links</h3>
            <ol className="text-gray-400">
              <li>Home</li>
              <li>Service</li>
              <li>About</li>
              <li>Contact</li>
            </ol>
          </div>
          <div>
            <h3 className="font-bold text-xl">Subscribe</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the <br />latest updates.</p>
          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md my-4 ">
           <input type="email" placeholder="Enter your email"
             className="bg-transparent px-4 py-2 w-[10000%] text-gray-700 outline-none"
           />
         
            <button className="px-6 w-[100%] py-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 text-black font-bold">
               Subscribe
             </button>
             </div>
            <div>

            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-500 text-center p-5">
          <p className="text-gray-400">@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
