import { useRef, useEffect } from "react";
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
    label: "Why Choose Us?",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#pickup",
    label: "Free Pick-up & Delivery",
  },
  // {
  //   href: "#about",
  //   label: "About",
  // },
];

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState("");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showNavbar, setShowNavbar] = useState(true)
  const [prevScroll, setPrevScroll] = useState(0)

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     threshold: 0.5
  //   };
  //
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         setActiveTab(entry.target.id);
  //       }
  //     })
  //   }, observerOptions);
  //
  //   Object.values(sectionRefs.current).forEach((ref) => {
  //     if (ref) {
  //       observer.observe(ref);
  //     }
  //   });
  //
  //   return () => {
  //     Object.values(sectionRefs.current).forEach((ref) => {
  //       if (ref) {
  //         observer.unobserve(ref);
  //       }
  //     });
  //   };
  // }, []);

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
  }

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : "-100%" }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-10">
      <NavigationMenu className="flex justify-between items-center bg-background">
        <div className="pr-10">
          <NavigationMenuItem className="list-none">
            <NavigationMenuLink href="#home">
              <img onClick={(e) => { e.preventDefault(); sectionScroll("#home") }} src={logo} className="w-14 ml-24 py-4 hover:scale-110 transition duration-300"></img>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
        <div className="flex gap-12">
          {routeList.map((route: RouteProps, i) => (
            <NavigationMenuItem
              key={route.href}
              className={`${activeTab === route.href ? "underline decoration-4 decoration-button underline-offset-[10px]" : ""} 
              text-maintext text-xl list-none hover:underline hover:decoration-button transition delay-100 duration-300 ease-in-out hover:-translate-y-2 hover:decoration-4 hover:underline-offset-[10px] duration-700"`}
            >
              <a href={route.href} onClick={(e) => { e.preventDefault(); sectionScroll(route.href) }} key={i}>{route.label}</a>
            </NavigationMenuItem>
          ))}

        </div>
        <div className="hidden md:flex gap-8 mr-10">
          <Button variant="default" size="med" className="hover:text-maintext">
            <a href="#contact" onClick={(e) => { e.preventDefault(); sectionScroll("#contact") }} >Contact Us</a>
          </Button>

          {/* <ModeToggle /> */}
        </div>
      </NavigationMenu>
    </motion.header >
  );
}
