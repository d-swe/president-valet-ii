import { useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import logo from "../assets/pvii-logo-ws.png"
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "motion/react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#whyus",
    label: "WHY CHOOSE US",
  },
  {
    href: "#services",
    label: "OUR SERVICES",
  },
  {
    href: "#pickup",
    label: "PICKUP & DELIVERY",
  },
  // {
  //   href: "#about",
  //   label: "ABOUT US",
  // },
];

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navbarControl = () => {
    if (window.scrollY > prevScroll) {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
    setPrevScroll(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarControl)
    return () => window.removeEventListener("scroll", navbarControl)
  }, [prevScroll])

  const sectionScroll = (href: string) => {
    setActiveTab(href);
    const section = document.getElementById(href.replace("#", ""));
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.45 }}
        className="hidden lg:flex flex-col items-center sticky top-0 z-10 bg-background h-[6.25rem] shadow-md">
        <NavigationMenu className="flex justify-between items-center w-full font-sansserif mt-4">
          <NavigationMenuItem className="list-none ml-10 mr-[5.8rem]">
            <NavigationMenuLink href="#home">
              <img onClick={(e) => { e.preventDefault(); sectionScroll("#home") }} src={logo} className="w-[2.5rem] py-[.8rem] hover:scale-110 transition duration-300"></img>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="flex gap-12">
            {routeList.map((route: RouteProps, i) => (
              <NavigationMenuItem
                key={route.href}
                className={`${activeTab === route.href ? "underline decoration-2 decoration-button underline-offset-[8px]" : ""} 
              text-white text-[1.1rem] font-medium list-none hover:underline hover:decoration-button transition delay-100 duration-300 ease-in-out hover:-translate-y-[7px] hover:decoration-2 hover:underline-offset-[8px] duration-700"`}
              >
                <a href={route.href} onClick={(e) => { e.preventDefault(); sectionScroll(route.href) }} key={i}>{route.label}</a>
              </NavigationMenuItem>
            ))}
          </div>
          <div className="hidden md:flex mr-10">
            <Button size="sm" className="text-md font-sansserif">
              <a href="#contact" onClick={(e) => { e.preventDefault(); sectionScroll("#contact") }} >CONTACT US</a>
            </Button>
          </div>
        </NavigationMenu>
      </motion.header >

      <nav className="lg:hidden bg-background px-6 py-4 shadow-md fixed w-full z-50">
        <div className="flex justify-between items-center px-4">
          <img onClick={(e) => { toggleMenu(); e.preventDefault(); sectionScroll("#home") }} src={logo} className="w-[2.5rem] py-[.8rem] hover:scale-110 transition duration-300"></img>


          <button className="bg-background z-50" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background shadow-lg">
            <ul className="flex flex-col text-center items-center pb-10 font-medium text-lg font-sansserif space-y-6">
              {routeList.map((route: RouteProps, i) => (
                <li>
                  <NavigationMenuItem
                    key={route.href}
                    className={`${activeTab === route.href ? "underline decoration-2 decoration-button underline-offset-[8px]" : ""} 
              text-white text-[1.1rem] font-medium list-none "`}
                  >
                    <a href={route.href} onClick={(e) => { toggleMenu(); e.preventDefault(); sectionScroll(route.href) }} key={i}>{route.label}</a>
                  </NavigationMenuItem>
                </li>
              ))}
              <li>
                <NavigationMenuItem
                  className={`${activeTab === "#contact" ? "underline decoration-2 decoration-button underline-offset-[8px]" : ""} 
              text-white text-[1.1rem] font-medium list-none "`}
                >
                  <a href="#contact" onClick={(e) => { toggleMenu(); e.preventDefault(); sectionScroll("contact") }}>CONTACT US</a>
                </NavigationMenuItem>
              </li>
            </ul>
          </div >
        )}
      </nav >
    </>
  );
}
