import { Link } from "react-router-dom";
import deluxLogo from "../assets/images/deluxLogo.png";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between align-items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
      <Link to="/" className="text-center drop-shadow-2xl">
        <span className="font-cursive text-5xl ">De Lux</span>
        <span className="block text-xl mt-[-0.8rem]">Nail Spa</span>
      </Link>
      <ul className="hidden xl:flex items-center gap-12 font-semibold textbase">
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Home
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Services
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Online Booking
        </li>
        <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">
          Contact
        </li>
      </ul>
      <div className="relative hidden md:flex items-center justify-center gap-3"></div>
      <i
        className="bx bx-menu xl:hidden block text-2xl cursor-pointer mt-[1rem]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></i>
      <div
        className={`absolute xl:hidden top-24 left-0 w-full
             bg-white flex flex-col items-center gap-6 font-semibold
              text-lg transform transition-transform ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
        style={{ transition: "transformation 0.3s ease, opacity 0.3s ease" }}
      >
        <ul className="w-full">
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Services
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Online Booking
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
