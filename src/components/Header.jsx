import lightBg from "../assets/lightBg.jpg";
import darkBg from "../assets/darkBg.jpg";

const Header = () => (
  <div className="w-full relative h-[35%] overflow-hidden">
    <div className="h-full w-full  overflow-hidden flex items-center absolute left-0 top-0 bg-gradient-to-br from-[#3710BD] to-[#A42395]">
      <img
        src={lightBg}
        className="opacity-[25%] min-h-[100%] object-cover"
        alt=""
      />
    </div>
  </div>
);
export default Header;
