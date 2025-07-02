import { Code, Server, Database, Wind, Component, Type, Flame, Move } from 'lucide-react';
import { MotionDiv, MotionSection } from '@/components/motion';

const techStack = [
  { name: 'React', icon: <Component className="h-10 w-10 text-primary" /> },
  { name: 'Next.js', icon: <Component className="h-10 w-10 text-primary" /> },
  { name: 'TypeScript', icon: <Type className="h-10 w-10 text-primary" /> },
  { name: 'Node.js', icon: <Server className="h-10 w-10 text-primary" /> },
  { name: 'Tailwind CSS', icon: <Wind className="h-10 w-10 text-primary" /> },
  { name: 'Firebase', icon: <Flame className="h-10 w-10 text-primary" /> },
  { name: 'SQL & NoSQL', icon: <Database className="h-10 w-10 text-primary" /> },
  { name: 'Framer Motion', icon: <Move className="h-10 w-10 text-primary" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export default function TechStackSection() {
  return (
    <MotionSection 
      id="tech-stack" 
      className="py-20 md:py-28 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Technologies I Use</h2>
          <p className="text-lg text-muted-foreground mt-2">My favorite tools and technologies for building applications.</p>
        </div>
        <MotionDiv 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {techStack.map((tech) => (
            <MotionDiv
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center justify-center p-6 bg-card rounded-lg shadow-md border border-transparent hover:border-accent"
            >
              {tech.icon}
              <p className="mt-4 text-sm font-medium text-center">{tech.name}</p>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
