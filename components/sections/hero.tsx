import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MotionDiv } from '@/components/motion';

export default function HeroSection() {
  return (
    <section className="flex flex-grow items-center justify-center bg-background text-foreground p-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative text-center">
          <MotionDiv 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10"
          >
            <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-border">
              <AvatarImage src="https://placehold.co/100x100.png" alt="Leo" data-ai-hint="avatar memoji" />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div className="text-sm md:text-base border border-border rounded-full px-4 py-2 whitespace-nowrap bg-background">
              Hello, I'm Leo
            </div>
          </MotionDiv>

          <h1 className="font-extrabold tracking-tighter text-5xl sm:text-6xl md:text-8xl space-y-1 md:space-y-2">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <span className="text-primary">DIGITAL</span>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-secondary">EXPERIENCE</span>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <span className="text-foreground/90">DESIGNER</span>
            </MotionDiv>
            
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <span className="text-accent">& DEVELOPER.</span>
            </MotionDiv>
          </h1>

          <MotionDiv
            className="mt-16 md:mt-24 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I create a digital experience that borders on{' '}
            <span className="text-secondary font-medium">efficiency</span>,{' '}
            <span className="text-foreground/90 font-medium">aesthetics</span> and{' '}
            <span className="text-accent font-medium">functionality</span>.
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
