import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MotionSection } from '@/components/motion';

export default function AboutSection() {
  return (
    <MotionSection 
      id="about"
      className="py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-primary/5 p-8">
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline text-primary text-center">About Me</CardTitle>
            <CardDescription className="text-center text-lg mt-2">A glimpse into my journey and passion for technology.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              From a young age, I've been captivated by the power of technology to solve real-world problems. My journey into software development started with a simple "Hello, World!" and has since evolved into a full-fledged passion for creating elegant, efficient, and scalable applications. I thrive in collaborative environments, continuously learning and adapting to new challenges. My goal is to not only write code but to build meaningful products that make a difference.
            </p>
          </CardContent>
          <CardFooter className="bg-muted/30 p-6 flex justify-center">
            <Link href="/about" passHref>
              <Button variant="outline">Read More About My Story</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </MotionSection>
  );
}
