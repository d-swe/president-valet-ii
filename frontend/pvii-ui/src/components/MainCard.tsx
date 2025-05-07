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
    header: "Hate Stains?\nWe Love 'em!",
    description: "Unique stains call for unique solutions. Our experts use experienced methods and custom solutions to get rid of those stubborn stains to travel back in time to when that spill or splatter never happend. Bring in your stain covered garment today to see how we can help remove those stains once and for all."
  },
  {
    header: "Love Your Clothes but\nDon't Love The Fit?",
    description: "It's tough when you find clothes that you love but don't fit quite right. Arms don't fit quite right? Pants too long and left dragging past your shoes? What ever the issue our expert with 20+ years of experience can help you customize your clothes for the best fit, catered to your body."
  },
  {
    header: "Fed Up with\nHarsh Chemicals?",
    description: "Traditional methods of dry cleaning involve harsh chemicals that can leave lingering odors or even irritate the skin. Our business understands the importance of using natural solutions to protect your skin, and eliminate unpleasant chemical odors, while keeping your clothes healthy and long-lasting."
  }
]

export default function MainCard() {
  return (
    <section id="whyus" className="scroll-mt-24">
      <div className="flex flex-row justify-center gap-20 pt-32 pb-52">
        {cardInfo.map((card, index) => (
          <Card key={index} className="w-[400px] h-[500px] border-4 border-button bg-gradient-to-br from-card to-background rounded-3xl">
            <CardHeader className="pt-11">
              <CardTitle style={{ whiteSpace: "pre-line" }} className="mb-3 text-center font-bold text-white text-2xl">{card.header}</CardTitle>
            </CardHeader>
            <CardDescription className="text-xl text-center text-white px-8">{card.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  )
}
