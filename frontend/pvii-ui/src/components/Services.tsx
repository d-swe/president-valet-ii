import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { FadeInHoriz } from "@/transitions";
import washingmachine from "../assets/washing-machine.png"
import blanket from "../assets/blanket.png"
import press from "../assets/press.png"
import quick from "../assets/quick.png"
import stain from "../assets/stain.png"
import scissors from "../assets/scissors.png"
import cow from "../assets/cow.png"
import shirt from "../assets/shirt.png"

function Services() {
  interface ServiceCard {
    header: string;
    description: string;
    icon: string;
  }

  const cards: ServiceCard[] = [
    { header: 'Laundry', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.', icon: washingmachine },
    { header: 'Dry Cleaning', description: 'Items such as: Suits, Blazers, Dresses, Pants, Shorts, Sweaters, Polos, Jackets, Coats, Ties, Scarves, Blouses, etc.', icon: shirt },
    { header: 'Alterations', description: 'We provide a variety of tailoring services but here are a few examples: Hemming, Zipper, Widening, Buttons, etc.', icon: scissors },
    { header: 'Household Items', description: 'Keep your home clean and bring in these items: Sheets, Blankets, Comforters, Tableclothes, Curtains, Rugs.', icon: blanket },
    { header: 'Spot Removal', description: 'We\'ve proved time and time again, no stain is a match for our experts here at President Valet II. No extra charge and included with our dry cleaning services.', icon: stain },
    { header: 'Same-Day', description: 'In a rush? If you need clothes dry cleaned last minute, we provide same day services if clothes are dropped off before 930am.', icon: quick },
    { header: 'Press-Only', description: 'If your clothes don\'t need to be cleaned but want a proper touch up to get those wrinkles out, stop by for our press-only services.', icon: press },
    { header: 'Leather Cleaning', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.', icon: cow },
    // { header: 'Shoe Repair', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
  ];

  return (
    <section id="services" className="flex flex-col items-center min-h-screen pb-36 bg-background">
      <h1 className="flex justify-center text-6xl pb-20 font-sansserif font-semibold pt-32">Services</h1>
      <div className="grid grid-cols-4 items-center gap-12 w-[1500px]">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <FadeInHoriz delay={index * .25} duration={0.7}>
              <Card className="w-[350px] h-[190px]">
                <div className="flex flex-row ml-4 mt-4 justify-start items-center ">
                  <img src={card.icon} className="w-[40px] h-[40px]" />
                  <CardHeader className="font-sansserif font-bold text-2xl pl-[1rem] align-middle">{card.header}</CardHeader>
                </div>
                <CardContent className="font-sansserif pl-4 pr-1 pt-[1rem] text-[18px]">{card.description}</CardContent>
              </Card>
            </FadeInHoriz>
          </div>
        ))}
      </div >
    </section >
  );
}

export default Services
