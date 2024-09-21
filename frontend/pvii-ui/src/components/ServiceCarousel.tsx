import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function ServiceCarousel() {
  interface ServiceCard {
    header: string;
    description: string;
  }

  const cards: ServiceCard[] = [
    { header : 'Laundry', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
    { header : 'Dry Cleaning', description: 'Items such as: Suits, Blazers, Dresses, Pants, Shorts, Sweaters, Polos, Jackets, Coats, Ties, Scarves, Blouses, etc.' },
    { header : 'Alterations', description: 'We provide a variety of tailoring services but here are a few examples: Hemming, Zipper Replacement, Widening, Button Replacement' },
    { header : 'Household Items', description: 'Keep your home clean and bring in these items: Sheets, Blankets, Comforters, Tableclothes, Curtains, Rugs' },
    { header : 'Same-Day', description: 'In a rush? If you need clothes dry cleaned last minute, we provide same day services if clothes are dropped off before 930am.' },
    { header : 'Leather Cleaning', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
    { header : 'Spot Removal', description: 'We\'ve proved time and time again, no stain is a match for our experts here at President Valet II. No extra charge and included with our dry cleaning services.' },
    { header : 'Press-Only', description: 'If your clothes don\'t need to be cleaned but want a proper touch up to get those wrinkles out, stop by for our press-only services.' },
    { header : 'Shoe Repair', description: 'Bring in your essentials you depend on day after day such as: Dress Shirts, Pants, T-Shirts, Ladies Shirts, any many more.' },
  ];
  
  return (
    <section id="services">
      <div className="flex justify-center mt-10">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="-ml-1">
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-[300px] h-[300px]">
                    <CardHeader className="text-2xl font-semibold">{card.header}</CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-xl">
                        {card.description}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default ServiceCarousel