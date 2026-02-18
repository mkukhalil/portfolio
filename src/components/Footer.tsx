import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    {
        icon: FaFacebook,
        href: "#",
        color: "#1877F2", // Official Facebook Blue
        glow: "rgba(24, 119, 242, 0.5)"
    },
    {
        icon: FaXTwitter,
        href: "#",
        color: "#FFFFFF", // Official X White
        glow: "rgba(255, 255, 255, 0.3)"
    },
    {
        icon: FaLinkedin,
        href: "#",
        color: "#0A66C2", // Official LinkedIn Blue
        glow: "rgba(10, 102, 194, 0.5)"
    },
    {
        icon: FaInstagram,
        href: "#",
        color: "url(#instagram-gradient)", // Use SVG gradient
        glow: "rgba(225, 48, 108, 0.5)"
    },
];

export function Footer() {
    return (
        <footer className="relative pt-72 pb-20 px-6 overflow-hidden bg-black z-10 flex flex-col justify-end min-h-[600px]">

            {/* Background Arcs */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] pointer-events-none">
                <svg
                    viewBox="0 0 1400 700"
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <filter id="glow-outer" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="20" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <filter id="glow-inner" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="14" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: "#f09433" }} />
                            <stop offset="25%" style={{ stopColor: "#e6683c" }} />
                            <stop offset="50%" style={{ stopColor: "#dc2743" }} />
                            <stop offset="75%" style={{ stopColor: "#cc2366" }} />
                            <stop offset="100%" style={{ stopColor: "#bc1888" }} />
                        </linearGradient>
                    </defs>

                    {/* Outer Perfect Half Circle */}
                    <path
                        d="M 25 700 A 715 700 0 0 1 1375 700"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        strokeLinecap="round"
                        filter="url(#glow-outer)"
                        opacity="0.9"
                    />

                    {/* Inner Perfect Half Circle */}
                    <path
                        d="M 125 700 A 615 600 0 0 1 1275 700"
                        fill="none"
                        stroke="#a855f7"
                        strokeWidth="8"
                        strokeLinecap="round"
                        filter="url(#glow-inner)"
                        opacity="0.8"
                    />
                </svg>
            </div>
            <div className="container mx-auto relative z-10 flex flex-col items-center gap-4 text-center mt-auto">

                {/* Name */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold tracking-wide text-white"
                >
                    Khalil
                </motion.h2>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 flex items-center justify-center overflow-hidden"
                            whileHover={{
                                scale: 1.15,
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                boxShadow: `0 0 20px ${social.glow}`
                            }}
                            aria-label="Social Link"
                        >
                            <social.icon
                                size={22}
                                style={{ fill: social.color }}
                                className="transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-sm text-muted-foreground"
                >
                    © {new Date().getFullYear()} Khalil. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}
