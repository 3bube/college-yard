
import { FaKey } from "react-icons/fa";

const GetRoomButton = () =>{


    return(
        <div className="w-full mt-4 text-black text-xl">
            <button className='bg-[#A3FE35] w-full py-3 flex items-center justify-center gap-2'>
            <FaKey className="bg-[#222] text-white h-8 w-8 p-2 rounded-full" size={30}/> Get Room
            </button>
        </div>
    );

}

export default GetRoomButton;