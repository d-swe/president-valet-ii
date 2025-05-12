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
    <section className="flex flex-col items-center pt-52 h-screen bg-background" id="contact">
      <div className="flex flex-row justify-between w-[800px] p-10 bg-lightBack rounded-3xl">
        <div className="pr-10">
          <h1 className="text-4xl pt-2 pb-6 text-background font-medium">Need Help?</h1>
          <p className="text-background text-lg">We'd love to hear from you!
            Whether you have any questions about our services, want to inquire about our pickup and delivery service,
            or any other questions we're here to help. Fill out the form or reach out to us via email or phone. </p>
          <div>PHONE NUMBER HERE</div>
          <div>EMAIL HERE</div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="text-background">
            <div>
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input className="bg-foreground w-[350px]" placeholder="First name" {...field} />
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
                    <FormLabel>Last Name</FormLabel>
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
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Phone</FormLabel>
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
                    <FormLabel>Message</FormLabel>
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
            <Button size="med" className="my-10 text-lightBack" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
