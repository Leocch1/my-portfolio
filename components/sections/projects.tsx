import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MotionDiv, MotionSection } from '@/components/motion';

const projects = [
  {
    title: 'Project Alpha',
    description: 'An innovative e-commerce platform with a focus on user experience and performance.',
    image: 'https://placehold.co/600x400.png',
    hint: 'software project',
    tags: ['React', 'Next.js', 'Stripe'],
    link: '/projects#alpha',
  },
  {
    title: 'Project Beta',
    description: 'A data visualization dashboard for analyzing complex datasets with interactive charts.',
    image: 'https://placehold.co/600x400.png',
    hint: 'data dashboard',
    tags: ['Vue.js', 'D3.js', 'Node.js'],
    link: '/projects#beta',
  },
  {
    title: 'Project Gamma',
    description: 'A social networking app designed to connect like-minded individuals in local communities.',
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile app',
    tags: ['Flutter', 'Firebase', 'GraphQL'],
    link: '/projects#gamma',
  },
];

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <MotionSection 
      id="projects" 
      className="py-20 md:py-28 bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} data-ai-hint={project.hint} />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                       <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={project.link} passHref>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            </MotionDiv>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/projects" passHref>
            <Button size="lg">See All Projects</Button>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
