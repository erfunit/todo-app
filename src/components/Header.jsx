import lightBg from "../assets/lightBg.jpg";
import darkBg from "../assets/darkBg.jpg";

const Header = () => (
  <div className="w-full relative h-[35%] overflow-hidden">
    <div className="h-full w-full bg-gradient-to-br overflow-hidden flex items-center absolute left-0 top-0 from-[#3710BD] to-[#A42395]">
      <img
        src={darkBg}
        className="opacity-[25%] min-h-[100%] object-cover"
        alt=""
      />
    </div>
  </div>
);
export default Header;
