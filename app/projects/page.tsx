import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MotionDiv } from '@/components/motion';
import { Github } from 'lucide-react';

const detailedProjects = [
  {
    id: 'alpha',
    title: 'Project Alpha',
    description: 'An innovative e-commerce platform built with a modern tech stack to provide a seamless shopping experience. It features real-time inventory management, a secure checkout process with Stripe integration, and a personalized recommendation engine.',
    image: 'https://placehold.co/800x450.png',
    hint: 'e-commerce website',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'beta',
    title: 'Project Beta',
    description: 'A powerful data visualization dashboard that transforms raw data into insightful, interactive charts and graphs. It allows users to create custom reports, filter complex datasets, and share their findings with team members.',
    image: 'https://placehold.co/800x450.png',
    hint: 'dashboard analytics',
    tags: ['Vue.js', 'D3.js', 'Python', 'Flask', 'MongoDB'],
    liveLink: '#',
    repoLink: '#',
  },
   {
    id: 'gamma',
    title: 'Project Gamma',
    description: 'A cross-platform social networking application designed to foster local community engagement. Features include event creation, real-time chat, user profiles, and a map-based discovery tool to find nearby activities and friends.',
    image: 'https://placehold.co/800x450.png',
    hint: 'social network',
    tags: ['Flutter', 'Firebase', 'GraphQL', 'Dart'],
    liveLink: '#',
    repoLink: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-headline text-primary">My Work</h1>
          <p className="text-lg text-muted-foreground mt-2">Here's a closer look at some of the projects I'm proud of.</p>
        </MotionDiv>
        <div className="space-y-16">
          {detailedProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image src={project.image} alt={project.title} fill style={{objectFit: 'cover'}} data-ai-hint={project.hint} />
                </div>
                <div className="p-8 flex flex-col">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardContent>
                  <div className="mt-6 flex gap-4">
                     <Link href={project.liveLink} passHref>
                        <Button>View Live</Button>
                    </Link>
                    <Link href={project.repoLink} passHref>
                        <Button variant="outline"><Github className="mr-2 h-4 w-4" /> Source Code</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
