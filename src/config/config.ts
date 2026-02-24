import FacebookIcon from "@/assets/icons/facebook.svg";
import LinkedInIcon from "@/assets/icons/footer-linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Mail from "@/assets/icons/mail.svg";
import MediumIcon from "@/assets/icons/medium.svg";
import Phone from "@/assets/icons/phone.svg";
import TwitterIcon from "@/assets/icons/x.svg";
import OSDGreen from "@/assets/icons/OSDGreen.svg";

export const SITE = {
  title: "2026 OpenSourceDay",
  shortTitle: "OSD2026",
  description:
    "OpenSourceDay 2026 - Join us for the next chapter of open source innovation, learning, and community building.",
  website: "https://osd.opensourceweekend.org",
  ogImage: "https://osd.opensourceweekend.org/images/Viral_Parmar_Stage.jpg", // Keeping placeholder for now
  icon: OSDGreen,
};

export const BRANDING = {
  logos: {
    main: OSDGreen,
  },
};

export const NAVIGATION = {
  items: [
    { name: "Home", href: "/" },
    { name: "Speakers", href: "/speakers" },
    { name: "Schedule", href: "/schedule" },
    { name: "Team", href: "/team" },
    { name: "Sponsors", href: "/sponsors" },
  ],
  cta: {
    text: "OSD 2025",
    url: "/2025",
  },
};

export const CALLS_2026 = [
  {
    title: "Call for Speakers",
    description:
      "Share your knowledge & inspire the community with a talk or workshop.",
    href: "/cfspk",
    emoji: "🎤",
    color: "from-violet-500 to-purple-600",
    badge: "Open",
  },
  {
    title: "Call for Volunteers",
    description:
      "Help us make OSD 2026 an unforgettable experience for everyone.",
    href: "/cfv",
    emoji: "🙌",
    color: "from-emerald-500 to-green-600",
    badge: "Open",
  },
  {
    title: "Call for Sponsors",
    description: "Support open source and grow your brand with the community.",
    href: "/cfs",
    emoji: "🤝",
    color: "from-amber-500 to-orange-600",
    badge: "Open",
  },
  {
    title: "Call for Community Partners",
    description:
      "Partner with us to amplify the open source movement together.",
    href: "/cfc",
    emoji: "🌐",
    color: "from-sky-500 to-blue-600",
    badge: "Open",
  },
  {
    title: "Call for Evangelists",
    description: "Spread the word about OSD 2026 and help grow our reach.",
    href: "/cfe",
    emoji: "📣",
    color: "from-pink-500 to-rose-600",
    badge: "Open",
  },
];

export const FOOTER = {
  description:
    "OpenSourceDay is all about giving back to the open source projects, sharpening your skills, and celebrating all things open source. Join us for 2026!",
};

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/OSWeekend",
    icon: FacebookIcon,
    description: "Facebook",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/OSWeekend",
    icon: TwitterIcon,
    description: "Twitter icon",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/OSWeekend",
    icon: InstagramIcon,
    description: "Instagram icon",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/open-source-weekend/",
    icon: LinkedInIcon,
    description: "LinkedIn icon",
  },
  {
    name: "Github",
    href: "https://github.com/oscfcommunity",
    icon: GithubIcon,
    description: "Github icon",
  },
  {
    name: "Medium",
    href: "https://medium.com/@opensourceweekend",
    icon: MediumIcon,
    description: "Medium icon",
  },
];

export const CONTACTS = [
  {
    name: "Email",
    content: "opensourceweekend@gmail.com",
    href: "mailto:opensourceweekend@gmail.com",
    icon: null, // SVG component handled in Footer
  },
  {
    name: "Phone",
    content: "+91 89 8080 8222",
    href: "tel:+918980808222",
    icon: null,
  },
];
