import { FaShower, FaToilet, FaSink } from 'react-icons/fa';
import { CgSmartHomeHeat } from "react-icons/cg";

const bathroomIcons = {
    'Shower': <FaShower size={30} />,
    'Heater': <CgSmartHomeHeat size={30}/>,
    'W/C': <FaToilet size={30} />,
    'Sink': <FaSink size={30} />
}

const BathroomCard = () => (
    <div
    style={{background: 'linear-gradient(to bottom, #c6c9c1, #c2d7a4, #bbe486, #b1f163, #a3fe35)'}}
     className="text-black py-3 px-2 rounded-lg flex flex-col w-full">
      <h3 className="text-lg font-normal mb-4 text-left">Bathroom & Convenience</h3>
      <div className="grid grid-cols-4 gap-8 p-3">
      {Object.entries(bathroomIcons).map(([name, icon]) => (
        <div key={name} className="flex flex-col items-center">
          <div className="mb-2">{icon}</div>
          <span className="text-xs whitespace-nowrap">{name}</span>
        </div>
      ))}
    </div>
    </div>
  );

  export default BathroomCard;