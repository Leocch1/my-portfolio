import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MotionDiv } from '@/components/motion';

export default function HeroSection() {
  return (
    <section className="flex flex-grow items-center justify-center bg-black text-[#f3e7d5] p-4 pb-24 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <div className="relative text-center pt-24">
          <MotionDiv 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 justify-center mb-4 z-10"
          >
            <Avatar className="h-[70px] w-[70px] border-2 border-border overflow-hidden bg-white">
              <AvatarImage
                src="genmoji (1).png"
                alt="Leo"
                className="object-contain"
              />
              <AvatarFallback>L</AvatarFallback>
            </Avatar>
            <div className="h-[70px] flex items-center border border-border rounded-full px-4 whitespace-nowrap bg-black text-lg font-medium text-[#f3e7d5]">
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
            className="mt-4 md:mt-8 max-w-xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I create a digital experience that borders on{' '}
            <span className="text-secondary font-bold">efficiency</span>,{' '}
            <span className="text-foreground/90 font-bold">aesthetics</span> and{' '}
            <span className="text-accent font-bold">functionality</span>.
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
