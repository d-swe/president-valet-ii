import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type cardDetails = {
  header: string,
  description: string
}

const cardInfo: cardDetails[] = [
  {
    // header: "Hate Stains? We Love 'em!",
    header: "Hate stains?\nWe love 'em!",
    description: "Unique stains call for unique solutions. Our experts use experienced methods and custom solutions to get rid of those stubborn stains. Bring in your stain covered garment today to see how we can help remove those stains once and for all."
  },
  {
    header: "Fed up with \nharsh chemicals?",
    description: "Traditional methods of dry cleaning involve harsh chemicals that leaves lingering odors or even irritate the skin. We understand the importance of using natural solutions to protect your skin, to eliminate unpleasant odors - keeping your clothes healthy and long-lasting."
  },
  {
    header: "Love your clothes\n but not the fit?",
    description: "It's tough when you find clothes that you love but don't fit quite right. Our expert with 20+ years of experience can help you customize your clothes for the best fit, catered to your body."
  },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="bg-lightBack h-screen px-44">
      <h1 className="text-center font-sansserif font-bold text-6xl pt-32 pb-16 text-background">Why choose us?</h1>
      <div className="grid grid-cols-3 justify-center gap-4 pt-[3rem] font-sansserif">
        {cardInfo.map((card, index) => (
          <Card key={index} className="w-[500px] pl-6 py-6">
            <CardHeader className="pb-4">
              <CardTitle style={{ whiteSpace: "pre-line" }} className="font-sansserif text-left font-bold text-background text-4xl pl-8">{card.header}</CardTitle>
            </CardHeader>
            <CardDescription className="text-[21px] text-background px-8">{card.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  )
}
