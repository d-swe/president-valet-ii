import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import logo from "../assets/pvii-logo-ws.png"
import { Button } from "./ui/button";

function Footer() {
  interface RouteProps {
    href: string;
    label: string;
  }
  const routeList: RouteProps[] = [
    {
      href: "#whyus",
      label: "Why Choose Us",
    },
    {
      href: "#services",
      label: "Our Services",
    },
    {
      href: "#pickup",
      label: "Pickup & Delivery",
    },
    {
      href: "#contact",
      label: "Contact Us",
    },
  ];

  const sectionScroll = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer id="footer" className="bg-background text-maintext">
      <hr className="border-lightBorder" />

      <div className="flex flex-row justify-between items-center font-sansserif">
        <div className="w-1/3 m-16 text-white text-xl">
          <p className="text-center">Store Hours</p>
          <div className="flex flex-row justify-center gap-20 font-light">
            <div>
              <p>Mon:</p>
              <p>Tue:</p>
              <p>Wed:</p>
              <p>Thu:</p>
              <p>Fri:</p>
              <p>Sat:</p>
              <p>Sun:</p>
            </div>
            <div>
              <p>7am - 7pm</p>
              <p>7am - 7pm</p>
              <p>7am - 7pm</p>
              <p>7am - 7pm</p>
              <p>7am - 7pm</p>
              <p>8am - 5pm</p>
              <p>Closed</p>
            </div>
          </div>
        </div>

        <NavigationMenu className="justify-between items-center w-full font-thin">
          <div className="flex flex-col gap-6">
            {routeList.map((route: RouteProps, i) => (
              <NavigationMenuItem
                key={route.href}
                className="text-white text-center text-xl list-none hover:text-fresh">
                <a href={route.href} onClick={(e) => { e.preventDefault(); sectionScroll(route.href) }} key={i}>{route.label}</a>
              </NavigationMenuItem>
            ))}
          </div>
        </NavigationMenu>

        <div className="w-1/3 h-[250px] m-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6205.487599206981!2d-77.08375792342802!3d38.95268097171235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c99534159c15%3A0x2105c9f792403de2!2sPresident%20Valet%20II!5e0!3m2!1sen!2sus!4v1748218535285!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="President Valet II Location"
          ></iframe>
        </div>
      </div>
      <div className="py-4 text-center text-md font-sansserif font-thin">
        President Valet II ©
      </div>
    </footer>
  );
}

export default Footer;
