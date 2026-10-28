import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AmbientBackground from "@/components/ambient-background";

export const metadata = {
  title: "Leocchi | Personal Website",
  description: "Portfolio of Leocchi - Junior Full-Stack Developer",
  icons: {
    icon: "/genmoji2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="/genmoji2.png" />
      </head>
      <body className="font-body antialiased">
        <AmbientBackground className="fixed inset-0 -z-10" intensity={0.7} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
