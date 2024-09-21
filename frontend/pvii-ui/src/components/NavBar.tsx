import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import logo from "../assets/pvii-logo-ws.png"
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#services",
      label: "Services",
    },
    {
      href: "#pickupdelivery",
      label: "PickupDelivery",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ];

  
export const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <header className="sticky top-0">
        <NavigationMenu className="flex justify-between items-center border-2">
            <NavigationMenuItem className="list-none">
                <NavigationMenuLink href="/">
                <img src={logo} className="w-20 ml-10 border-2"></img>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <nav className="hidden md:flex gap-2">
                {routeList.map((route: RouteProps, i ) => (
                    <a href={route.href} key={i} className="text-white text-lg">{route.label}</a>
                ))}
            </nav>
            <div className="hidden md:flex gap-2">
            <Button>Contact Us
            </Button>

            <ModeToggle />
          </div>
        </NavigationMenu>
        </header>
    );
}