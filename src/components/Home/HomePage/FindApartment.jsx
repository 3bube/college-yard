import { Navigate } from "react-router-dom";
import logo from '/logo3.png';

const FindApartment = () =>{

    const handleFindApartment = () => {
        navigate('/find-apartment'); // Adjust the path as per your routing setup
      };

    return(
        <div className="p-5 flex flex-col items-center mt-4">
        <div className="bg-black rounded-lg px-6 py-5 w-full max-w-md text-center">
            <div className="bg-[#272727] rounded-lg px-6 py-4">
            <div className="flex flex-row items-center justify-center mb-4 gap-2 ">
                <img className="bg-white rounded-full p-2" src={logo} alt="" />
                <div className="flex flex-col items-left text-left">
                <h2 className="text-lg font-semibold ">Welcome to the College Yard</h2>
                <p className="text-gray-400 mb-4 text-sm">Find a student apartment that suits & get into the college yard space</p>
                </div>
            
          </div>
          
          <button 
            onClick={handleFindApartment}
            className="bg-[#A3FE35] text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300 inline-flex text-lg"
          >
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8976 23.6246C5.33796 23.6246 0 18.3262 0 11.8123C0 5.29842 5.33796 0 11.8976 0C18.4572 0 23.7951 5.29971 23.7951 11.8123C23.7951 18.3249 18.4585 23.6246 11.8976 23.6246ZM11.8976 4.03387C7.57697 4.03387 4.06299 7.52396 4.06299 11.8123C4.06299 16.1006 7.57827 19.5907 11.8976 19.5907C16.2168 19.5907 19.7334 16.1006 19.7334 11.8123C19.7334 7.52396 16.2181 4.03387 11.8976 4.03387ZM23.9486 20.1061C22.8857 21.6251 21.5392 22.9323 19.9858 23.9565L27.0788 31L31 27.1082L23.9486 20.1061Z" fill="#272727"/>
</svg>Find Apartment
</button>
            </div>
        </div>
      </div>
    );
} 

export default FindApartment;