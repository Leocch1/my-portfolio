"use client";

import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Component, Palette, PenTool, Zap } from 'lucide-react';
import { MotionDiv, MotionButton } from '../motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const services = [
	{
		icon: <PenTool className="h-8 w-8 text-accent" />,
		title: 'UI & UX',
		description:
			'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
	},
	{
		icon: <Component className="h-8 w-8 text-primary" />,
		title: 'Web & Mobile App',
		description:
			'Transforming ideas into exceptional web and mobile app experiences.',
	},
	{
		icon: <Palette className="h-8 w-8 text-rose-500" />,
		title: 'Design & Creative',
		description:
			'Crafting visually stunning design that connects deeply with your audience.',
	},
	{
		icon: <Zap className="h-8 w-8 text-secondary" />,
		title: 'Development',
		description:
			'Bringing your vision to life with the latest technology and design trends.',
	},
];

const XIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" stroke="#111310" strokeWidth="2" strokeLinecap="round"/></svg>
)
const BehanceIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><text x="4" y="18" fontSize="13" fill="#111310" fontFamily="Arial" fontWeight="bold">Bē</text></svg>
)
const GithubIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" fill="#111310"/></svg>
)
const LinkedinIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="8" width="4" height="12" fill="#111310"/><rect x="4" y="4" width="4" height="4" fill="#111310"/><rect x="10" y="12" width="4" height="8" fill="#111310"/><path d="M14 12c0-2.21 1.79-4 4-4s4 1.79 4 4v8h-4v-8" stroke="#111310" strokeWidth="2"/></svg>
)
const DribbbleIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#111310" strokeWidth="2"/><path d="M2 12h20M12 2c2.5 3.5 5 7 5 10s-2.5 6.5-5 10" stroke="#111310" strokeWidth="2"/></svg>
)
const DiscordIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="6" stroke="#111310" strokeWidth="2"/><circle cx="8.5" cy="12" r="1.5" fill="#111310"/><circle cx="15.5" cy="12" r="1.5" fill="#111310"/></svg>
)
const FacebookIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#111310" fillOpacity="0.05"/>
        <path d="M15.5 8.5H14V7.5C14 7.22 14.22 7 14.5 7H15.5V5H14.5C13.12 5 12 6.12 12 7.5V8.5H11V10.5H12V19H14V10.5H15.5L16 8.5H14Z" fill="#111310"/>
    </svg>
);
const InstagramIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#111310" fillOpacity="0.05"/>
        <rect x="4" y="4" width="16" height="16" rx="5" stroke="#111310" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="#111310" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1" fill="#111310"/>
    </svg>
);

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
			className="pt-2 pb-6 md:pb-10 bg-[#101210] text-[#f3e7d5]" 
		>
			<hr
				className="border-[#bfa27a] mb-1 w-full"
				style={{ position: 'relative', top: '-0.50rem' }}
			/>
			<div className="mx-0 max-w-none px-0">
				{/* Top Row: Tagline, Socials, and Email */}
				<div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-4 md:px-12 mb-8">
					{/* Left: Tagline */}
					<div className="flex-shrink-0 justify-self-start">
						<span className="block text-xs md:text-sm text-[#f3e7d5] font-normal">// Design, Code,<br />Engage</span>
					</div>

					{/* Center: Socials */}
					<div className="justify-self-center">
						<div className="social-icons-container flex gap-2 bg-transparent px-3 py-1 rounded-full border border-[#bfa27a]/40 w-fit shadow transition-all duration-300 ease-in-out" style={{ background: "#181a17" }}>
							<a href="https://x.com/leolouise261" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 md:w-12 md:h-12"><XIcon/></a>
							<a href="https://www.facebook.com/hiddenbladesueeeee" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 hidden md:flex"><FacebookIcon /></a>
							<a href="https://github.com/Leocch1" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 md:w-12 md:h-12"><GithubIcon /></a>
							<a href="https://www.linkedin.com/in/leo-louise-jimenez-2169a3369/" target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 md:w-12 md:h-12"><LinkedinIcon /></a>
							<a href="https://dribbble.com/leo-louise-jimenez" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 hidden md:flex"><DribbbleIcon /></a>
							<a href="https://www.instagram.com/leeeeeeeyoooww/" target="_blank" rel="noopener noreferrer" className="social-icon w-12 h-12 hidden md:flex"><InstagramIcon /></a>
						</div>
					</div>

					{/* Right: Email */}
					<div className="flex-shrink-0 justify-self-end">
            <a href="mailto:leolouise26@gmail.com" className="flex items-center gap-2">
                <div className="bg-[#f3e7d5] rounded-full w-10 h-10 flex items-center justify-center shadow border border-[#bfa27a]/40 md:h-12 md:w-12">
                    <svg width="24" height="24" fill="none" className="inline-block">
                        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#111310" strokeWidth="2" />
                        <path d="M3 7l9 6 9-6" stroke="#111310" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                  <span className="hidden md:inline text-[#bfa27a] text-base font-medium">leolouise26@gmail.com</span>
                </div>
            </a>
					</div>
				</div>

				{/* Main Content Row */}
				<div className="px-4 sm:px-8 md:px-12 lg:px-40 mt-16">
					<div className="relative">
						{/* Top: Heading and Description */}
						<div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
							<h2 className="flex-1 text-2xl md:text-3xl font-normal leading-tight mb-8 text-[#f3e7d5]">
								Empowering success in the digital landscape.<br />
								Together, we shape a visionary future, delivering<br />
								on promises and continuously pioneering<br />
								innovation.
							</h2>
							<div
                                className="text-xs text-[#f3e7d5] max-w-xs text-left mb-8 md:mb-0 px-2 md:px-0"
                                style={{ color: "#f3e7d5", opacity: 0.85 }}
                            >
                                My blend of design, coding, and interaction<br />
                                expertise distinguishes me within the tech<br />
                                industry.
                            </div>
						</div>
						{/* Green Heading */}
						<div className="text-green-400 text-2xl md:text-4xl font-bold my-8">
							Coding the Future<br />
							Architecting Innovation
						</div>
						{/* Line with circle on the line at the right */}
						<div className="relative flex items-center mb-8 min-h-20">
							<hr className="w-full border-[#bfa27a]" />
							<div className="absolute right-8 top-1/2 -translate-y-1/2">
								<div className="bg-[#f3e7d5] rounded-full w-20 h-20 flex items-center justify-center shadow-lg shrink-0">
									<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="12" r="12" fill="none" />
										<path d="M13 3L7 14H12L11 21L17 10H12L13 3Z" stroke="#111310" strokeWidth="2" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
						{/* About Me button and Paragraph */}
						<div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-8">
							<p className="text-xl md:text-2xl text-[#f3e7d5] max-w-2xl">
								I specialize in engineering bespoke solutions,<br />
								consistently pushing the limits in each project,<br />
								with an unwavering dedication to prioritizing<br />
								excellence.
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
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.2 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
							>
								<Card className="bg-card/50 border-border/50 h-full text-left p-6">
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
