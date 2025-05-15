import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/pvii-logo-ws.png"

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background px-6 py-4 shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center">
        <img src={logo} className="w-[40px]"></img>

        <button className="bg-background z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-lg font-sansserif">
            <li><a href="#whyus" onClick={toggleMenu}>WHY CHOOSE US</a></li>
            <li><a href="#services" onClick={toggleMenu}>SERVICES</a></li>
            <li><a href="#pickup" onClick={toggleMenu}>PICKUP & DELIVERY</a></li>
            <li><a href="#contact" onClick={toggleMenu}>CONTACT US</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MobileNavBar;
