import "./LandingPage.css";
import arrow from "../assets/arrow.png";
import { Button } from "./ui/button";
import FadeInWhenVisible from "@/transitions";

function LandingPage() {
  const sectionScroll = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="px-[200px] pt-[80px] pb-[40px] scroll-mt-[100px]" id="home">
        <div className="home-container">
          <FadeInWhenVisible duration={1}>
            <h1 className="font-cursive text-6xl text-maintext"> give your clothes a</h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible duration={1.15}>
            <h1 className="font-sans font-bold text-8xl pl-[30%] text-fresh"> Fresh Start.</h1>
          </FadeInWhenVisible>
          <FadeInWhenVisible duration={1.25}>
            <p className="text-3xl pl-[30%] text-maintext">
              Breathe life back into your favorite clothes and make it feel like
              you're wearing it for the first time. Let our experts get rid of
              those stubborn stains or tailor the perfect fit to always look your
              best.
            </p>
          </FadeInWhenVisible>
          <div className="pl-[30%] py-6">
            <Button size="default" >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  sectionScroll("#contact");
                }}
              >
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section >

      <FadeInWhenVisible duration={1.5} delay={0.5} yOffset={-50}>
        <div className="choose-title-container">
          <img src={arrow} className="choose-title-img" />
          <div className="choose-title">
            <Button variant={"none"} className="bg-transparent ml-14 mt-6 text-maintext text-3xl hover:text-fresh">
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
      </FadeInWhenVisible >
    </>
  );
};

export default LandingPage;
