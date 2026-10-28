"use client";

import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Monitor, Server, Smartphone, Zap } from 'lucide-react';
import { MotionDiv, MotionButton } from '../motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const services = [
	{
		icon: <Monitor className="h-8 w-8 text-accent" />,
		title: 'Frontend',
		description:
			'Building responsive, accessible interfaces with React, Next.js and Tailwind CSS.',
	},
	{
		icon: <Server className="h-8 w-8 text-primary" />,
		title: 'Backend & APIs',
		description:
			'Writing server logic, REST APIs and databases with Laravel, Django and MySQL.',
	},
	{
		icon: <Smartphone className="h-8 w-8 text-rose-500" />,
		title: 'Web & Mobile Apps',
		description:
			'Turning ideas into working web apps and cross-platform mobile apps with React Native.',
	},
	{
		icon: <Zap className="h-8 w-8 text-secondary" />,
		title: 'Always Learning',
		description:
			'Growing as a junior developer by picking up new tools and best practices with every project.',
	},
];


export default function AboutSection() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: x * 0.2, y: y * 0.2 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

	return (
		<section
			id="about"
			className="pt-2 pb-6 md:pb-10 text-foreground"
		>
			<div className="mx-0 max-w-none px-0">
				{/* Main Content Row */}
				<div className="px-4 sm:px-8 md:px-12 lg:px-40 mt-16">
					<div className="relative">
						{/* Top: Heading and Description */}
						<div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
							<h2 className="flex-1 text-2xl md:text-3xl font-normal leading-tight tracking-tight mb-8 text-foreground">
								A junior full-stack developer building<br />
								reliable, user-friendly web applications,<br />
								and learning something new<br />
								with every project.
							</h2>
							<div
                                className="text-xs text-foreground/70 max-w-xs text-left mb-8 md:mb-0 px-2 md:px-0"
                            >
                                Solid fundamentals, clean code and a<br />
                                willingness to learn are what I bring<br />
                                to every team.
                            </div>
						</div>
						{/* Green Heading */}
						<div className="text-green-400 text-2xl md:text-4xl font-bold my-8">
							Writing Clean Code<br />
							Shipping Real Projects
						</div>
						{/* Line with circle on the line at the right */}
						<div className="relative flex items-center mb-8 min-h-20">
							<hr className="w-full border-white/10" />
							<div className="absolute right-8 top-1/2 -translate-y-1/2">
								<div className="bg-white/90 rounded-full w-20 h-20 flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.4)] shrink-0">
									<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="none" />
										<path d="M13 3L7 14H12L11 21L17 10H12L13 3Z" stroke="#111310" strokeWidth="2" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
						{/* About Me button and Paragraph */}
						<div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-8">
							<p className="text-xl md:text-2xl text-foreground/90 max-w-2xl">
								I build tailored solutions with a focus on growth,<br />
								innovation, and delivering high-quality results,<br />
								that go beyond expectations.<br />
							</p>
							<div className="flex-shrink-0">
								<Link href="/about" passHref>
									<MotionButton 
                    className="btn-fill-animation rounded-full px-8 py-6 text-lg font-medium shrink-0"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    animate={{ x: position.x, y: position.y }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
                  >
										<span className="btn-content">
											About Me <ArrowRight className="ml-2 h-5 w-5" />
										</span>
									</MotionButton>
								</Link>
							</div>
						</div>
						{/* End Main Content Row */}
					</div>
				</div>
				{/* Services Section */}
				<MotionDiv
					className="mt-16 text-center px-4 md:px-12"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h3 className="text-3xl font-bold text-primary mb-12">WHAT I DO</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((service, index) => (
							<MotionDiv
								key={service.title}
								initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
								whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transitionEnd: { filter: "none" } }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
							>
								<Card className="glass glass-interactive rounded-3xl h-full text-left p-6 hover:-translate-y-1">
									<CardHeader className="p-0">
										{service.icon}
										<CardTitle className="mt-4 text-xl">
											{service.title}
										</CardTitle>
									</CardHeader>
									<CardContent className="p-0 mt-2">
										<p className="text-muted-foreground">
											{service.description}
										</p>
									</CardContent>
								</Card>
							</MotionDiv>
						))}
					</div>
				</MotionDiv>
			</div>
		</section>
	);
}
