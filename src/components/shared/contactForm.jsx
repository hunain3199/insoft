'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaMobile, FaMobileAlt } from 'react-icons/fa';

import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/Elements/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Elements/form';
import { Input } from '@/components/ui/Elements/input';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/Elements/radio-group';
import { Textarea } from '@/components/ui/Elements/textarea';
import { Earth, Mail } from 'lucide-react';

const FormSchema = z.object({
  firstName: z.string().min(3, {
    message: 'first name must be at least 3 characters.',
  }),
  lastName: z.string().min(3, {
    message: 'last name  must be at least 3 characters.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'phone  must be at least 10 numbers.',
  }),
  email: z.string().min(10, {
    message: 'email must be at least 10 characters.',
  }),
  type: z.enum(
    ['webDesign', 'appDesign', 'blockChain', 'graphicDesign', 'others'],
    {
      required_error: 'You need to select a notification type.',
    }
  ),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
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
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className="rounded-[20px] sm:rounded-[40px] lg:rounded-[80px] bg-primary-foreground p-10">
      <div className="flex items-center xl:items-start justify-center sm:gap-10 gap-3 max-xl:flex-col-reverse">
        <div className="bg-primary sm:rounded-[20px] rounded-[10px]   sm:px-14 px-7 py-4 mb-3 sm:mb-0  sm:py-8  xl:min-h-[770px] w-full xl:w-auto">
          <h1 className="translate-[0.48px] text-[14px] sm:text-[18px] font-bold leading-[160%] text-white md:text-[24px]">
            Contact Information
          </h1>
          <p className="translate-[0.32px] text-[12px] sm:text-[14px] leading-[160%]  text-[#ffffff99] md:text-[16px]">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <ul className="mt-5 sm:mt-9 flex flex-col justify-start gap-2.5 sm:gap-5">
            <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
              <div className="p-1  rounded-full bg-primary-foreground">
                <FaMobileAlt className="text-primary" size={20} />
              </div>{' '}
              +00000000000
            </li>
            <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
              <div className="p-1  rounded-full bg-primary-foreground">
                <Mail className="text-primary" size={20} />
              </div>{' '}
              +00000000000
            </li>
            <li className="flex items-center justify-start  gap-2.5 sm:gap-5">
              <div className="p-1  rounded-full bg-primary-foreground">
                <Earth className="text-primary" size={20} />
              </div>{' '}
              +00000000000
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:pt-7 w-full">
          <Form {...form} className={''}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 grid-col-1 gap-5 ">
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
              </div>{' '}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mt-5">
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
                  <FormItem className="mt-5">
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
              <Button type="submit" className="mt-5">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
