import Link from "next/link";
// Update the import path below if your Button component is located elsewhere, for example:
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="w-full p-4">
      <header className="container mx-auto max-w-5xl rounded-full bg-card/80 backdrop-blur-sm border shadow-md flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="font-headline text-xl font-bold text-primary">Leocch1</span>
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                About Me
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
