
export default function Subscribe() {
  return (
    <div className="flex justify-center mb-40">
      <div className="w-[75%] my-5 bg-gray-50 rounded-lg border-8 border-transparent ring-4 ring-white  z-10 absolute">
      <div className="bg-custom-image bg-cover bg-no-repeat bg-center w-[100%] rounded-md p-10">
           <div className="flex flex-col justify-center items-center space-y-3">
            
            <h2 className="font-bold text-4xl text-black">Subscribe to our Newsletter</h2>
            <p className="text-xl text-gray-600">Get the latest updates and news right in your inbox!</p>

            <div className="flex items-center bg-white rounded-2xl overflow-hidden shadow-md my-4">
           <input type="email" placeholder="Enter your email"
             className="bg-transparent px-4 py-2 w-40 md:w-64 text-gray-700 outline-none"
           />
         
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 text-black font-semibold">
               Subscribe
             </button>
             </div>
           </div>
      </div>
    </div>
    </div>
  );
};

