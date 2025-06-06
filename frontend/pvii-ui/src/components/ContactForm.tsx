import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }).max(30),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().max(10, { message: "Please enter a valid phone number" }),
  message: z.string().max(500),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://api.presidentvaletii.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const result = await response.json();
      console.log("Formsubmitted sucessfully:", result);

    } catch (error) {
      console.error("Error submitting form:", error)
      console.log(values);
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-32 min-h-screen bg-background scroll-m-24 lg:scroll-m-[-10px]" id="contact">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-between xl:w-[1200px] lg:w-[800px] gap-32 rounded-3xl">
        <div className="md:px-10">
          <h1 className="text-4xl text-center md:text-left md:text-6xl pt-2 pb-6 md:px-4 text-white font-medium">Have questions?</h1>
          <p className="text-white text-lg md:text-xl px-4 pt-4 pb-14">We'd love to hear from you!
            Whether you have questions about our services or want to inquire about our free pickup and delivery service, we're here to help. Fill out the form or reach out to us via email or phone. </p>
          <div className="flex flex-col gap-6 px-4">
            <a href="mailto:presidentvaletii@gmail.com" className="text-fresh text-xl hover:underline">
              presidentvaletii@gmail.com
            </a>
            <a href="tel:+12022445678" className="text-fresh text-xl hover:underline">
              (202) 244 - 5678
            </a>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="text-white px-6 md:px-10 lg:px-0 lg:pt-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Name</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground text-black" placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /></div>
            <div className="pt-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Email</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground text-black" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Phone</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground text-black" placeholder="555-5555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ask us about our free pick up and delivery!"
                        className=" bg-foreground text-black"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button size="sm" className="my-10 text-xl text-lightBack" type="submit">SUBMIT</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
