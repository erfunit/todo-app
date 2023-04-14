import darkIcon from "../assets/icons/dark.svg";
import light from "../assets/icons/light.svg";
import { useState } from "react";

const Heading = ({ themeToggler, dark }) => {
  return (
    <div className="w-full mb-10  flex items-center flex-row justify-between">
      <h1 className="text-4xl text-white font-bold">T O D O</h1>
      <button onClick={themeToggler}>
        <img
          src={!dark ? darkIcon : light}
          className={`cursor-pointer hover:bg-white/20 active:scale-95 transition-all rounded-full p-1 ${
            dark ? "-rotate-180" : ""
          }`}
          alt="icon"
        />
      </button>
    </div>
  );
};

export default Heading;
