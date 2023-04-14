import dark from "../assets/icons/dark.svg";
import light from "../assets/icons/light.svg";
import { useState } from "react";

const Heading = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full mb-10  flex items-center flex-row justify-between">
      <h1 className="text-4xl text-white font-bold">T O D O</h1>
      <img
        onClick={() => {
          setDarkMode((pre) => !pre);
        }}
        src={darkMode ? dark : light}
        className={`cursor-pointer hover:bg-white/20 active:scale-95 transition-all rounded-full p-1 ${
          !darkMode ? "-rotate-180" : ""
        }`}
        alt="icon"
      />
    </div>
  );
};

export default Heading;
