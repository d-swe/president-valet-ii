import "./LandingPage.css";
import { Button } from "./ui/button";
import { FadeInVert } from "@/transitions";
import arrow from "../assets/arrow.png"

function LandingPage() {
  const sectionScroll = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="flex flex-col items-center pt-40 md:pt-48 lg:py-24 min-h-screen scroll-mt-[100px]" id="home">
        <div className="flex flex-col lg:w-[1000px] md:w-[700px] md:gap-2">
          <FadeInVert duration={1.15}>
            <h1 className="font-cursive text-maintext text-3xl md:text-5xl md:pl-4 lg:text-7xl pl-6"> give your clothes a</h1>
          </FadeInVert>
          <FadeInVert duration={1.25}>
            <h1 className="font-sansserif font-bold text-fresh text-5xl lg:text-8xl text-center pl-10 md:text-7xl md:pt-1"> Fresh Start.</h1>
          </FadeInVert>
          <FadeInVert duration={1.35}>
            <p className="font-sansserif text-maintext mx-auto pl-4 text-xl pt-6 md:pt-1 lg:pl-10 w-[280px] lg:w-[610px] lg:text-2xl md:w-[510px] md:pl-16 md:text-xl">
              With over 20 years of experience, we treat every garment with expert care. Our mission is to make your clothes feel as fresh as the day you bought them.
            </p>
          </FadeInVert>
          <FadeInVert duration={1.45}>
            <div className="flex flex-col items-center pt-10 md:pt-4 md:flex-row gap-4 md:gap-6 lg:w-[535px] mx-auto lg:pt-6 md:w-[380px]">
              <Button size="med" variant="border" className="font-sansserif">
                <a
                  href="#services"
                  className="font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    sectionScroll("#services");
                  }}
                >
                  LEARN MORE
                </a>
              </Button>
              <Button size="med" className="font-sansserif">
                <a
                  href="#contact"
                  className="font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    sectionScroll("#contact");
                  }}
                >
                  CONTACT US
                </a>
              </Button>
            </div>
          </FadeInVert>
        </div>
        <FadeInVert duration={1.5} delay={0.5} offset={-50}>
          <div className="hidden lg:flex flex-row pt-12 pl-96">
            <img src={arrow} className="pt-24 lg:pt-12 lg:w-[200px] md:w-[150px]" />
            <Button variant={"none"} className="bg-transparent font-cursive lg:pl-10 lg:ml-14 lg:pt-14 text-maintext text-3xl hover:text-fresh">
              <a
                href="#choose"
                onClick={(e) => {
                  e.preventDefault();
                  sectionScroll("#whyus");
                }}
              > Why Choose Us?
              </a>
            </Button>
          </div>
        </FadeInVert >
      </section >

    </>
  );
};

export default LandingPage;
