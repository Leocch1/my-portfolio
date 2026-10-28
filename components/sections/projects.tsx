
"use client";

import { useState, useEffect, type MouseEvent } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MotionDiv, MotionSection, MotionButton } from '@/components/motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from "next/navigation";
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const projectsData = [
	{
		title: 'alagaco',
		year: '2026',
		category: 'Web Development',
		tech: 'Next.js, React',
		description: 'Website for an all-in-one platform connecting households with verified local care and home-service providers.',
		link: 'https://alagaco.com/',
		image: '/alagaco.png',
        hint: 'care services platform'
	},
	{
		title: 'alagaco App',
		year: '2026',
		category: 'Mobile Development',
		tech: 'React Native, JavaScript',
		description: 'Android and iOS app for finding and booking verified local care and home-service providers.',
		link: 'https://play.google.com/store/apps/details?id=com.alagaco.app',
		image: '/alagaco-app.png',
        hint: 'mobile app screens'
	},
	{
		title: 'Sagwan',
		year: '2026',
		category: 'Full-Stack Development',
		tech: 'Next.js, React, Sanity, Resend, Xendit',
		description: 'Maritime community app connecting seafarers with shipyards, manning agencies, vendors and professionals on shore.',
		link: 'https://sagwan.app/',
		image: '/sagwan.png',
        hint: 'maritime community app'
	},
	{
		title: 'Project Northstar',
		year: '2026',
		category: 'Web Development',
		tech: 'Next.js, React',
		description: 'Onboard training platform that helps maritime schools manage and mentor their cadets at sea.',
		link: 'https://www.theprojectnorthstar.com/',
		image: '/northstar.png',
        hint: 'maritime training platform'
	},
	{
		title: 'My Global Connection',
		year: '2026',
		category: 'Web Development',
		tech: 'Next.js, React',
		description: 'Employer of Record and recruitment website for companies hiring talent in the Philippines.',
		link: 'https://myglobeconnect.com/en',
		image: '/myglobalconnection.png',
        hint: 'global hiring website'
	},
	{
		title: 'PixelTech',
		year: '2026',
		category: 'Web Development',
		tech: 'Next.js, React',
		description: 'Website for a creative lab offering business IT solutions, from web and mobile apps to design and branding.',
		link: 'https://pixeltechph.com/',
		image: '/pixeltech.png',
        hint: 'business it solutions website'
	},
	{
		title: 'Tote&Tale',
		year: '2025',
		category: 'Full-Stack Development',
		tech: 'Next.js, Typescript, Sanity, Clerk, Stripe',
		description: 'A modern e-commerce platform for bag enthusiast.',
		link: 'https://totentale.vercel.app/',
		image: '/totentale1.png',
        hint: 'ecommerce platform'
	},
	{
		title: 'CvSU Enrollment System',
		year: '2024',
		category: 'Full-Stack Development',
		tech: 'Laravel, PHP, MySQL, Bootstrap',
    description: 'Enrollment System for Cavite State University.',
		link: 'https://github.com/Leocch1/enrollment-system',
		image: '/cvsu.png',
        hint: 'enrollment system'
	},
];

const colorStyles = [
	{ bg: 'bg-primary', text: 'text-primary-foreground' }, // Purple
	{ bg: 'bg-yellow-400', text: 'text-yellow-900' }, // Yellow
	{ bg: 'bg-sky-400', text: 'text-sky-900' }, // Light Blue
];

const CustomCursorIcon = ({ className }: { className?: string }) => (
	<svg
		width="24"
		height="36"
		viewBox="0 0 24 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={cn(className)}
		style={{ width: '24px', height: '36px' }}
	>
		<path d="M0.339844 0.99983L23.3398 15.9998L11.8398 18.9998L9.33984 35.4998L0.339844 0.99983Z" fill="#0ea5e9" />
	</svg>
);

export default function ProjectsSection() {
	const [hoveredProject, setHoveredProject] = useState<(typeof projectsData)[0] | null>(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [cursorStyle, setCursorStyle] = useState(colorStyles[0]);
	const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
	const router = useRouter();

	useEffect(() => {
		const handleMouseMove = (event: globalThis.MouseEvent) => {
			setMousePosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (isHovering) {
			document.body.classList.add('cursor-none-important');
		} else {
			document.body.classList.remove('cursor-none-important');
		}
		// Clean up on unmount
		return () => document.body.classList.remove('cursor-none-important');
	}, [isHovering]);

	const handleMouseEnter = (project: (typeof projectsData)[0]) => {
		setHoveredProject(project);
		setIsHovering(true);
		const randomStyle = colorStyles[Math.floor(Math.random() * colorStyles.length)];
		setCursorStyle(randomStyle);
	};

	const handleMouseLeave = () => {
		setHoveredProject(null);
		setIsHovering(false);
	};

	const handleButtonMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		setButtonPosition({ x: x * 0.1, y: y * 0.1 });
	};

	const handleButtonMouseLeave = () => {
		setButtonPosition({ x: 0, y: 0 });
	};

	return (
		<MotionSection
			id="projects"
			className={cn(
				'py-20 md:py-28 relative',
				isHovering ? 'cursor-none' : 'cursor-default' // Hide cursor when hovering projects
			)}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 mt-2"> {/* Move title up a little with mt-2 */}
					<h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-2 lg:-ml-16">My Projects</h2>
					<div className="relative flex items-center -mx-12 sm:-mx-16 lg:-mx-24">
						<hr className="w-full border-t border-white/10" />
						<div className="absolute right-8 top-1/2 -translate-y-1/2">
							<Button variant="ghost" size="icon" className="glass w-16 h-16 rounded-full">
								<Briefcase className="h-6 w-6 text-foreground" />
							</Button>
						</div>
					</div>
				</div>

				<div>
					{/* Desktop View */}
					<div className="hidden lg:block">
						{projectsData.map((project) => (
							<Link
								key={project.title}
								href={project.link}
								className="group block"
								onMouseEnter={() => handleMouseEnter(project)}
								onMouseLeave={handleMouseLeave}
								target={project.link.startsWith('http') ? "_blank" : undefined} // Open external links in new tab
								rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined} // Security best practice
							>
								<div className="flex justify-between items-center py-12 border-b border-white/10 transition-colors duration-300 group-hover:bg-white/[0.04] -mx-12 sm:-mx-16 lg:-mx-24 px-12 sm:px-16 lg:px-24">
									<div>
										<h3 className="text-2xl md:text-4xl font-semibold text-foreground/90 group-hover:text-primary transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-x-[100px]">{project.title}</h3>
										<p className="text-muted-foreground mt-1 transition-transform duration-300 group-hover:translate-x-[100px]">{project.year}</p>
									</div>
									<div className="text-right hidden md:block">
										<p className="text-lg text-foreground/90 transition-transform duration-300 group-hover:-translate-x-[100px]">{project.category}</p>
										<p className="text-sm text-muted-foreground transition-transform duration-300 group-hover:-translate-x-[100px]">{project.tech}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
					
					{/* Mobile & Tablet Grid View */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
						{projectsData.map((project, index) => (
							<Link
								key={project.title}
								href={project.link}
								target={project.link.startsWith('http') ? '_blank' : undefined}
								rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
								className="block group h-full"
							>
								<Card className="glass glass-interactive rounded-3xl overflow-hidden h-full flex flex-col">
									<div className="relative aspect-[4/3] w-full overflow-hidden">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-300"
											data-ai-hint={project.hint}
										/>
									</div>
									<div className="p-4 flex-grow flex flex-col">
										<div className="flex justify-between items-start gap-4">
											<h3 className="text-xl font-semibold text-foreground/90">
												{project.title}
											</h3>
											<p className="text-sm text-muted-foreground flex-shrink-0">
												{project.year}
											</p>
										</div>
										<p className="text-sm text-muted-foreground mt-1">
											{project.tech}
										</p>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
				
				<div className="text-center mt-12">
					<MotionButton
						className="btn-fill-animation rounded-full px-8 py-6 text-lg font-medium"
						onClick={() => {
							router.push("/projects");
							window.scrollTo({ top: 0, behavior: "instant" });
						}}
						onMouseMove={handleButtonMouseMove}
						onMouseLeave={handleButtonMouseLeave}
						animate={{ x: buttonPosition.x, y: buttonPosition.y }}
						transition={{ type: 'spring', stiffness: 400, damping: 10, mass: 0.5 }}
					>
						<span className="btn-content">
							Load More <ArrowRight className="ml-2 h-5 w-5" />
						</span>
					</MotionButton>
				</div>
			</div>

			<MotionDiv
				className="fixed top-0 left-0 pointer-events-none z-50 hidden lg:block"
				animate={{
					x: mousePosition.x,
					y: mousePosition.y,
					opacity: isHovering ? 1 : 0,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
			>
				<CustomCursorIcon className="absolute drop-shadow-[0_2px_4px_rgba(14,165,233,0.6)]" />
				{hoveredProject && (
					<div className={`absolute top-10 left-10 min-w-[250px] p-3 ${cursorStyle.bg} ${cursorStyle.text} rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)]`}>
						<h4 className="font-bold text-base">{hoveredProject.title}</h4>
						<p className="text-sm opacity-90">{hoveredProject.description}</p>
					</div>
				)}
			</MotionDiv>
		</MotionSection>
	);
}
