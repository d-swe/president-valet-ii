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
      <section className="flex flex-col items-center pt-[70px] pl-[10%] pb-[2.5px] min-h-screen scroll-mt-[100px] pr-[10%]" id="home">
        <div className="flex flex-row">
          <div className="flex flex-col w-[1000px] home-container">
            <FadeInVert duration={1.15}>
              <h1 className="font-cursive text-7xl text-maintext z-50"> give your clothes a</h1>
            </FadeInVert>
            <FadeInVert duration={1.25}>
              <h1 className="font-sansserif font-bold text-9xl pt-[1%] pl-[21%] text-fresh"> Fresh Start.</h1>
            </FadeInVert>
            <FadeInVert duration={1.35}>
              <p className="font-sansserif text-2xl pl-[21.9%] text-maintext">
                With over 20 years of experience, we treat every garment with expert care. Our mission is to make your clothes<br /> feel as fresh as the day you bought them.
              </p>
            </FadeInVert>
            <FadeInVert duration={1.45}>
              <div className="flex flex-row gap-6 pl-[21.9%] pt-6">
                <Button size="med" variant="border" className="font-sansserif">
                  <a
                    href="#about"
                    className="font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      sectionScroll("#about");
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
        </div>
        <FadeInVert duration={1.5} delay={0.5} offset={-50}>
          <div className="choose-title-container pt-[18%]">
            <img src={arrow} className="choose-title-img" />
            <div className="choose-title">
              <Button variant={"none"} className="bg-transparent font-cursive ml-14 mt-6 text-maintext text-3xl hover:text-fresh">
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
          </div>
        </FadeInVert >
      </section >

    </>
  );
};

export default LandingPage;
