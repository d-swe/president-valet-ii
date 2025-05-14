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
  fname: z.string().min(2, { message: "First name is required" }).max(20),
  lname: z.string().min(2, { message: "Last name required" }).max(20),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().max(10, { message: "Please enter a valid phone number" }),
  message: z.string().max(500),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("http://localhost:8080/contact", {
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
    <section className="flex flex-col items-center pt-32 h-screen bg-background" id="contact">
      <div className="flex flex-row justify-between w-[1200px] gap-32 rounded-3xl">
        <div>
          <h1 className="text-7xl pt-2 pb-6 text-maintext font-medium">Have questions?</h1>
          <p className="text-maintext text-xl pt-4 pb-14">We'd love to hear from you!
            Whether you have questions about our services or want to inquire about our free pickup and delivery service, we're here to help. Fill out the form or reach out to us via email or phone. </p>
          <div className="flex flex-col gap-6">
            <a href="mailto:presidentvaletii@gmail.com" className="text-fresh text-xl hover:underline">
              presidentvaletii@gmail.com
            </a>
            <a href="tel:+12022445678" className="text-fresh text-xl hover:underline">
              (202) 244 - 5678
            </a>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="text-maintext">
            <div>
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">First Name</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground w-[450px]" placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /></div>
            <div className="pt-4">
              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xl">Last Name</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground" placeholder="Last name" {...field} />
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
                      <Input className="bg-foreground" placeholder="email@example.com" {...field} />
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
                      <Input className="bg-foreground" placeholder="555-5555" {...field} />
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
                        className=" bg-foreground resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button size="med" className="my-10 text-xl text-lightBack" type="submit">SUBMIT</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
