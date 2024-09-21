import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function MainCard() {
  return (
    <section id="about">
    <div className="flex flex-row justify-center gap-20 m-40">
    <Card className="w-[350px] h-[400px]">
      <CardHeader>
        <CardTitle className="mb-5">Hate Stains? We Love 'Em!</CardTitle>
        <CardDescription className="text-base">Unique stains call for unique solutions. 
          Our experts use experienced methods and custom solutions to get 
          rid of those stubborn stains to travel back in time to when that 
          spill or splatter never happend. Bring in your stain covered garment 
          today to see how we can help remove those stains once and for all.</CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="mb-5">Fed Up with Harsh Chemicals?</CardTitle>
        <CardDescription className="text-base">Traditional methods of dry cleaning involve harsh 
          chemicals that can leave lingering odors or even irritate the skin. 
          Our business understands the importance of using natural solutions 
          to protect your skin, and eliminate unpleasant chemical odors, while 
          keeping your clothes healthy and long-lasting.</CardDescription>
      </CardHeader>
    </Card>
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="mb-5">Love Your Clothes but Don't Love The Fit?</CardTitle>
        <CardDescription>It's tough when you find clothes that you love but 
          don't fit quite right. Arms don't fit quite right? Pants too long 
          and left dragging past your shoes? What ever the issue our expert 
          with 20+ years of experience can help you customize your clothes 
          for the best fit, catered to your body.</CardDescription>
      </CardHeader>
    </Card>

    </div>
    </section>
  )
}
