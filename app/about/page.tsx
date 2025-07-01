import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MotionDiv } from '@/components/motion';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <Card className="shadow-xl">
          <CardHeader className="bg-primary/5 p-8 md:p-12">
            <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <CardTitle className="text-4xl md:text-5xl font-headline text-primary text-center">My Journey</CardTitle>
            </MotionDiv>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <MotionDiv 
                className="flex justify-center md:col-span-1"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Avatar className="h-48 w-48 border-4 border-primary/20">
                  <AvatarImage src="https://placehold.co/400x400.png" alt="Leo" data-ai-hint="profile picture" />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
              </MotionDiv>
              <MotionDiv 
                className="space-y-6 text-lg text-muted-foreground md:col-span-2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>
                  Hello! I'm Leo, a software developer with a deep-seated passion for technology and design. My journey began with a curiosity for how things work, which quickly led me to the world of programming. I am driven by the challenge of solving complex problems and the satisfaction of creating applications that are both functional and beautiful.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work on a variety of projects, from large-scale enterprise systems to nimble startup applications. This has given me a broad perspective on software architecture and development methodologies. I am a firm believer in lifelong learning and constantly seek to expand my skills and stay abreast of the latest industry trends.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the outdoors, reading about new technologies, or contributing to open-source projects. I believe that a balanced life fuels creativity and innovation. Thank you for visiting my portfolio, and I look forward to the possibility of collaborating with you.
                </p>
              </MotionDiv>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
