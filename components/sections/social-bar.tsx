const XIcon = () => (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17.53 6.47L6.47 17.53M6.47 6.47l11.06 11.06" stroke="#111310" strokeWidth="2" strokeLinecap="round"/></svg>
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

// Tagline, socials and email — shown at the bottom of the first screen on the home page
export default function SocialBar() {
  return (
    <div className="text-foreground">
      <hr className="border-white/10 w-full" />
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 md:gap-4 px-4 md:px-12 py-4 md:py-5">
        {/* Left: Tagline */}
        <div className="flex-shrink-0 justify-self-start">
          <span className="block text-xs md:text-sm text-foreground/70 font-normal">// Design, Code,<br />Engage</span>
        </div>

        {/* Center: Socials */}
        <div className="justify-self-center">
          <div className="glass social-icons-container flex gap-2 px-3 py-1.5 rounded-full w-fit transition-all duration-300 ease-in-out">
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
                <div className="bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:h-12 md:w-12">
                    <svg width="24" height="24" fill="none" className="inline-block">
                        <rect x="3" y="5" width="18" height="14" rx="3" stroke="#111310" strokeWidth="2" />
                        <path d="M3 7l9 6 9-6" stroke="#111310" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                </div>
                <div>
                  <span className="hidden md:inline text-foreground/80 text-base font-medium">leolouise26@gmail.com</span>
                </div>
            </a>
        </div>
      </div>
    </div>
  );
}
