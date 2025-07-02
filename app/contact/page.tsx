"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MotionDiv, MotionButton } from '@/components/motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, type MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { sendEmail } from '@/ai/flows/send-email-flow';

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/leolouise261' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/leo-louise-jimenez-2169a3369/' },
  { name: 'Dribble', href: 'https://dribbble.com/leo-louise-jimenez' },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  organization: z.string().optional(),
  message: z.string().min(1, { message: "Message is required." }),
});

export default function ContactPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
  };

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#101210] text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
             <div className="lg:sticky lg:top-28">
                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg mx-auto lg:mx-0 mb-12 lg:mb-0">
                  <Image
                    src="/leop.jpg"
                    alt="Your Picture"
                    fill
                    className="object-cover"
                    data-ai-hint="professional portrait"
                  />
                </div>
                <div className="hidden lg:block mt-12 space-y-12">
                  <div>
                      <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Contact Details</h4>
                      <a href="mailto:leolouise26@gmail.com" className="text-lg text-foreground/90 hover:text-primary transition-colors">leolouise26@gmail.com</a>
                  </div>
                  <div>
                      <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Socials</h4>
                      <div className="space-y-2">
                          {socialLinks.map((link) => (
                            <MotionDiv
                                key={link.name}
                                whileHover={{ scale: 1.1, x: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="origin-left"
                            >
                                <Link href={link.href} className="block text-lg text-foreground/90 hover:text-primary transition-colors">
                                      {link.name}
                                  </Link>
                              </MotionDiv>
                          ))}
                      </div>
                  </div>
                </div>
            </div>
          </MotionDiv>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-16">
              <h1 className="text-6xl font-bold tracking-tighter mb-4">Let's Connect!</h1>
              <p className="max-w-xl text-muted-foreground text-lg">
                Whether you're looking to collaborate on a project, need a solution to a challenging problem, or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="border-b pb-6" style={{ borderColor: "#bfa27a" }}>
                      <FormLabel className="flex items-baseline gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">01</span>
                          <span className="text-xl font-medium text-foreground/90">What's your name?</span>
                      </FormLabel>
                      <FormControl>
                        <div className="pl-10">
                          <Input placeholder="Dennis Hendry*" {...field} className="bg-transparent border-none text-muted-foreground text-lg p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0" />
                        </div>
                      </FormControl>
                      <FormMessage className="pl-10" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="border-b pb-6" style={{ borderColor: "#bfa27a" }}>
                      <FormLabel className="flex items-baseline gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">02</span>
                          <span className="text-xl font-medium text-foreground/90">What's your email?</span>
                      </FormLabel>
                      <FormControl>
                        <div className="pl-10">
                          <Input placeholder="dennis.hendry@gmail.com*" {...field} className="bg-transparent border-none text-muted-foreground text-lg p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0" />
                        </div>
                      </FormControl>
                      <FormMessage className="pl-10" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem className="border-b pb-6" style={{ borderColor: "#bfa27a" }}>
                      <FormLabel className="flex items-baseline gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">03</span>
                          <span className="text-xl font-medium text-foreground/90">What's the name of your organization?</span>
                      </FormLabel>
                      <FormControl>
                        <div className="pl-10">
                           <Input placeholder="Dennis & Hendry" {...field} className="bg-transparent border-none text-muted-foreground text-lg p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0" />
                        </div>
                      </FormControl>
                      <FormMessage className="pl-10" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="border-b pb-6" style={{ borderColor: "#bfa27a" }}>
                      <FormLabel className="flex items-baseline gap-4 mb-2">
                          <span className="text-sm text-muted-foreground">04</span>
                          <span className="text-xl font-medium text-foreground/90">What's your message?</span>
                      </FormLabel>
                      <FormControl>
                        <div className="pl-10">
                           <Textarea placeholder="Hello! I'd like to discuss..." {...field} className="bg-transparent border-none text-muted-foreground text-lg p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 resize-none" />
                        </div>
                      </FormControl>
                      <FormMessage className="pl-10" />
                    </FormItem>
                  )}
                />


                <div className="flex justify-end pt-6 ">
                    <MotionButton
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-fill-animation rounded-full px-10 py-5 text-lg border-[#bfa27a]"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        animate={{ x: position.x, y: position.y }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                    >
                        <span className="btn-content">
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                    </MotionButton>
                </div>
              </form>
            </Form>
          </MotionDiv>
        </div>
      </main>
      <Footer />
    </div>
  );
}
