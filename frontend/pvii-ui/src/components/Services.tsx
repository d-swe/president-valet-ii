import { Card, CardContent, CardHeader } from "@/components/ui/card"

function Services() {
  interface ServiceCard {
    header: string;
    description: string;
  }

  const cards: ServiceCard[] = [
    { header: 'Laundry', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
    { header: 'Dry Cleaning', description: 'Items such as: Suits, Blazers, Dresses, Pants, Shorts, Sweaters, Polos, Jackets, Coats, Ties, Scarves, Blouses, etc.' },
    { header: 'Alterations', description: 'We provide a variety of tailoring services but here are a few examples: Hemming, Zipper Replacement, Widening, Button Replacement' },
    { header: 'Household Items', description: 'Keep your home clean and bring in these items: Sheets, Blankets, Comforters, Tableclothes, Curtains, Rugs' },
    { header: 'Same-Day', description: 'In a rush? If you need clothes dry cleaned last minute, we provide same day services if clothes are dropped off before 930am.' },
    { header: 'Spot Removal', description: 'We\'ve proved time and time again, no stain is a match for our experts here at President Valet II. No extra charge and included with our dry cleaning services.' },
    { header: 'Press-Only', description: 'If your clothes don\'t need to be cleaned but want a proper touch up to get those wrinkles out, stop by for our press-only services.' },
    { header: 'Leather Cleaning', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
    // { header: 'Shoe Repair', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
  ];

  return (
    <section id="services" className="flex flex-col items-center h-screen pb-36 bg-background">
      <h1 className="flex justify-center text-6xl pb-20 font-sansserif font-semibold pt-32">Services</h1>
      <div className="grid grid-cols-4 items-center gap-4 w-[62.5rem]">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <Card className="h-[16rem] bg-lightBack border-[.1rem] border-lightBorder rounded-xl shadow-2xl">
              <div className="">
                <CardHeader className="font-sansserif font-bold pl-[1rem] pt-[1rem]">{card.header}</CardHeader>
                <CardContent className="font-sansserif pl-4 pr-1 pt-[1rem]">{card.description}</CardContent>
              </div>
            </Card>
          </div>
        ))}
      </div >
    </section >
  );
}

export default Services
