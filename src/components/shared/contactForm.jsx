"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaMobile, FaMobileAlt } from "react-icons/fa";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Earth, Mail } from "lucide-react";

const FormSchema = z.object({
  firstName: z.string().min(3, {
    message: "first name must be at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "last name  must be at least 3 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "phone  must be at least 10 numbers.",
  }),
  email: z.string().min(10, {
    message: "email must be at least 10 characters.",
  }),
  type: z.enum(
    ["webDesign", "appDesign", "blockChain", "graphicDesign", "others"],
    {
      required_error: "You need to select a notification type.",
    }
  ),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  const onSubmit = (data) => {
    // console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="md:flex flex-wrap w-full md-p-16 p-6 bg-primary-foreground rounded-2xl ">
      <div className="md:w-2/5 bg-primary text-primary-foreground md:p-16 p-6 rounded-2xl space-y-2  ">
        <h1 className="scroll-m-20 text-primary-foreground  tracking-tight ">
          Contact Information
        </h1>
        <p className="leading-6 [&:not(:first-child)]:mt-2 text-primary-foreground/50 ">
          Fill up the form and our Team will get back to you within 24 hours.
        </p>
        <ul className="space-y-5 text-primary-foreground py-10">
          <li className="flex  items-center gap-2">
            <div className="p-1  rounded-full bg-primary-foreground">
              <FaMobileAlt className="text-primary" size={20} />
            </div>{" "}
            +00000000000
          </li>
          <li className="flex  items-center gap-2">
            <div className="p-1  rounded-full bg-primary-foreground">
              <Mail className="text-primary" size={20} />
            </div>{" "}
            +00000000000
          </li>
          <li className="flex  items-center gap-2">
            <div className="p-1  rounded-full bg-primary-foreground">
              <Earth className="text-primary" size={20}  />
            </div>{" "}
            +00000000000
          </li>
        </ul>
      </div>

      <div className="md:w-3/5 px-10 py-10 w-full">
        <div className="space-x-3  ">
          <Form {...form} className={""}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <div className="grid md:grid-cols-2 grid-col-1 gap-2 ">
                {/* first Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Andrew" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Last Name */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="bravo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* phoneNumber*/}
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>{" "}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>What service do you need&#63;</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="webDesign" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Web Design
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="appDesign" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            App Design
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="blockChain" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Blockchain
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="graphicDesign" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Graphic Design
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="others" />
                          </FormControl>
                          <FormLabel className="font-normal">Others</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can <span>@mention</span> other users and
                      organizations.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
