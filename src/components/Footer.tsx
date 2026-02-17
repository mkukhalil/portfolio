import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
    { icon: FaFacebook, href: "#", color: "text-blue-500" },
    { icon: FaXTwitter, href: "#", color: "text-white" },
    { icon: FaLinkedin, href: "#", color: "text-blue-400" },
    { icon: FaInstagram, href: "#", color: "text-pink-500" },
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
            <div className="container mx-auto relative z-10 flex flex-col items-center gap-8 text-center mt-auto">

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
                    className="flex items-center gap-4"
                >
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className={`p-3 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                            aria-label="Social Link"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xs md:text-sm text-muted-foreground/60 mt-4"
                >
                    © {new Date().getFullYear()} Khalil. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}
