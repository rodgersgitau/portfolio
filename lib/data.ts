import { differenceInYears } from "date-fns";

import type {
  FAQType,
  GraphicType,
  PostType,
  ProjectType,
  TestimonialType,
} from "@/lib/types";

export const navItems = {
  "/blog": {
    name: "blog",
  },
  "/work": {
    name: "work",
  },
  "/contact": {
    name: "contact",
  },
};

export const workExperiences = [
  {
    role: "Frontend Developer",
    contract: "Freelance",
    logo: "uncLogo",
    company: "Unit Care Network",
    startDate: new Date("05-01-2020"),
    endDate: new Date("02-01-2021"),
    description:
      "I joined a team of product engineers working across web and mobile to rebuild their legacy .NET application (~500k MAU) with React and React Native.",
  },
  {
    role: "Web Designer/Developer",
    contract: "Freelance",
    logo: "reconLogo",
    company: "Recon Branding",
    startDate: new Date("06-01-2018"),
    endDate: new Date("07-13-2019"),
    description:
      "I joined a team of product engineers working across web and mobile to rebuild their legacy .NET application (~500k MAU) with React and React Native.",
  },
  {
    role: "Software Engineer II",
    contract: "Fulltime",
    logo: "savannahLogo",
    company: "Savannah Informatics LTD",
    startDate: new Date("07-20-2018"),
    endDate: new Date("10-23-2022"),
    description:
      "I joined a team of product engineers working across web and mobile to rebuild their legacy .NET application (~500k MAU) with React and React Native.",
  },
  {
    role: "Lead Web Engineer",
    contract: "Fulltime",
    logo: "mziziLogo",
    company: "Mzizi Studio",
    startDate: new Date("01-01-2023"),
    endDate: undefined,
    description:
      "I joined a team of product engineers working across web and mobile to rebuild their legacy .NET application (~500k MAU) with React and React Native.",
  },
];

export const faqs: FAQType[] = [
  {
    question: "Tell me about Gitau",
    answer: `Gitau is a ${
      differenceInYears(new Date(), new Date(1992, 12, 19)) + 1
    } year old developer from Nairobi, Kenya. While pursuing a bachelors degree in Business Information Technology (BBIT) at KEMU, he was dissatisfied with the subpar programming curriculum. Around the same time, Moringa School was offering a 6 month course that taught programming fundamentals and he realised it was now or never. Needless to say, he promptly quit his 5+ year job as an ICT Administrator and the rest is history.`,
  },
  {
    question: "So does he design?",
    answer:
      "Occasionally, he designed this site you're looking at. He's had a few contract gigs throughout the years as a designer, but dev has become his main thing. He never wants to lose touch with that part of his brain though, so he always makes time to look at what's hot in the design world these days.",
  },
  {
    question: "Does that mean he partners with designers?",
    answer:
      "Absolutely! That's some of his favorite work. Leading teams means he has spent a lot of time matching comps and collaborating with designers. Hit him up if that's you and you have an idea you'd like him to build.",
  },
  {
    question: "What's his favourite kind of work?",
    answer:
      "Gitau specializes in highly-interactive frontends with attention to detail. Marketing materials that command attention and take the user into their own little world. He spends obsessive amounts of time studying the art of macro & micro-interactions and ensures everything he touches has been optimized to the nines. He will boost that Lighthouse score and he'll make you look good doing it.",
  },
  {
    question: "What's his tech stack?",
    answer:
      "Quite literally anything. He's worked for agencies that stressed a technology-agnostic approach, so he's become highly adaptable in learning new tech, setting his ego aside and staying grounded in the fundamentals. He is a believer in JAMStack architecture and can make your project headless/serverless for a scalability & performance boost. As for an SPA/SSA framework, most of his heaviest lifting has happened in React/NextJS and his go-to Meta framework is Astro. He's worked on product selectors for local brands, advanced Hubspot integrations and international healthcare software with these tools.",
  },
  {
    question: "Let's talk budget. Is he expensive?",
    answer:
      "He keeps it competitive! He can be flexible with most budgets and likes to focus on high-happiness work instead of chasing the highest billables. One-man band means all killer no filler.",
  },
  {
    question: "Can he build my passion project?",
    answer:
      "Strike while the iron is hot my friends. He currently has the bandwidth for unbillable but high-exposure work. The free time may not last forever, so now's your chance to get in touch 🤙",
  },
];

export const testimonials: TestimonialType[] = [
  {
    stars: 5.0,
    name: "Stephen Ndambuki",
    message:
      "Gitau has strong professional ethics when it comes to working and delivering the best possible outcome for his clients. Always great in communication and willing to take an extra mile.",
    roles: ["Co-founder at Helve", "Venture Partner at Practica Capital"],
  },
  {
    stars: 4.5,
    name: "Victor Rucevska",
    message:
      "Gitau has strong professional ethics when it comes to working and delivering the best possible outcome for his clients. Always great in communication and willing to take an extra mile.",
    roles: ["Co-founder at Helve", "Venture Partner at Practica Capital"],
  },
  {
    stars: 4.5,
    name: "Victor Rucevska",
    message:
      "Gitau has strong professional ethics when it comes to working and delivering the best possible outcome for his clients. Always great in communication and willing to take an extra mile.",
    roles: ["Co-founder at Helve", "Venture Partner at Practica Capital"],
  },
];

// export const projects: ProjectType[] = [
//   {
//     name: "Bantu: UI Design System",
//     link: "https://demo.rgitau.dev/bantu-design-system",
//     description: "An opionionated UI Kit for modern web applications.",
//     techStack: ["Svelte", "TailwindCSS", "RadixUI"],
//     images: [
//       "/images/ostroffe-butchery/homepage.png",
//       "/images/ostroffe-butchery/categories.png",
//       "/images/ostroffe-butchery/itempage.png",
//       "/images/ostroffe-butchery/cartpage.png",
//       "/images/ostroffe-butchery/alert.png",
//     ],
//   },
//   {
//     name: "LoreCMS: Jamstack CMS",
//     link: "https://demo.rgitau.dev/lore-cms",
//     description:
//       "An opionionated content management system for modern web applications.",
//     techStack: ["React", "Stripe", "TailwindCSS", "RadixUI"],
//     images: [
//       "/images/ostroffe-butchery/categories.png",
//       "/images/ostroffe-butchery/itempage.png",
//       "/images/ostroffe-butchery/cartpage.png",
//       "/images/ostroffe-butchery/alert.png",
//     ],
//   },
//   {
//     name: "HR Mastery: TRM Platform ",
//     link: "https://demo.rgitau.dev/hr-mastery",
//     description:
//       "An all-in-one talent & relationship management platform from strategic recruitment to succession workflows.",
//     techStack: ["React", "Stripe", "TailwindCSS", "Google Maps"],
//     images: [
//       "/images/ostroffe-butchery/itempage.png",
//       "/images/ostroffe-butchery/cartpage.png",
//       "/images/ostroffe-butchery/alert.png",
//     ],
//   },
//   {
//     name: "Ostroffe: E-commerce Template",
//     link: "https://demo.rgitau.dev/wholelife",
//     description:
//       "An ecommerce for a local butchery. Includes an admin panel for authorized editing of products, categories, prices & stock keeping.",
//     techStack: ["NextJS", "React", "Stripe", "TailwindCSS"],
//     images: [
//       "/images/ostroffe-butchery/cartpage.png",
//       "/images/ostroffe-butchery/alert.png",
//     ],
//   },
//   {
//     name: "Propertias: Real Estate Template",
//     link: "https://demo.rgitau.dev/wholelife",
//     description:
//       "A web application for local land retailer. Includes an admin panel for authorized editing of blogs, commments, products, prices & personnel.",
//     techStack: ["React", "Stripe", "ThreeJS", "TailwindCSS", "Google Maps"],
//     images: [
//       "/images/propertias/homepage.png",
//       "/images/propertias/homepage-end.png",
//       "/images/propertias/homepage-dark.png",
//       "/images/propertias/homepage-dark-end.png",
//     ],
//   },
//   {
//     name: "Wholelife: Project & Task Management System",
//     link: "https://demo.rgitau.dev/wholelife",
//     description:
//       "A task management web application. Includes an admin panel for authorized editing of projects, tasks, subtasks & personnel.",
//     techStack: ["React", "Stripe", "BootstrapUI", "ExpressJS"],
//     images: [
//       "/images/ostroffe-butchery/homepage.png",
//       "/images/ostroffe-butchery/categories.png",
//       "/images/ostroffe-butchery/itempage.png",
//       "/images/ostroffe-butchery/cartpage.png",
//       "/images/ostroffe-butchery/alert.png",
//     ],
//   },
// ];

// export const vEffects: GraphicType[] = [
//   {
//     name: "Stack It",
//     link: "https://stack-it.netlify.app/",
//     image: "/images/play/stack-it.png",
//     repository: "https://github.com/rodgersgitau/labs/tree/master/block-break",
//     description: "A block stacking game akin to digital Jenga",
//   },
//   {
//     name: "Matrix Digital Rain",
//     link: "https://matrixdigitalrain.netlify.app/",
//     image: "/images/play/matrix-digital-rain.png",
//     repository: "https://github.com/rodgersgitau/labs/tree/master/matrix-rain",
//     description:
//       "Ever watched these cult favourite movies? This is the opening sequence",
//   },
//   {
//     name: "Block Breaker",
//     link: "https://block-breaker.netlify.app",
//     image: "/images/play/block-break.png",
//     repository: "https://github.com/rodgersgitau/labs/tree/master/block-break",
//     description: "A clone of the popular block breaking game",
//   },
//   {
//     name: "Tetris",
//     link: "https://tetricks.netlify.app",
//     image: "/images/play/tetris.png",
//     repository: "https://github.com/rodgersgitau/labs/tree/master/tetris",
//     description:
//       "A clone of the famous stacking game for different sized block shapes",
//   },
//   {
//     name: "Noughts & Crosses",
//     link: "https://clone-tictactoe.netlify.app",
//     image: "/images/play/tictactoe.png",
//     repository:
//       "https://github.com/rodgersgitau/labs/tree/master/noughts-and-crosses",
//     description: "The classic game also known as tictactoe",
//   },
//   {
//     name: "Monopoly",
//     image: "/images/play/virtual-monopoly.png",
//     repository: "https://github.com//rodgersgitau/labs/tree/master/monopoly",
//     description: "The classic board game reimagined",
//   },
// ];

export const thirdPartyPosts: PostType[] = [
  {
    title: "Introducing the Vercel AI SDK",
    description:
      "An interoperable, streaming-enabled, edge-ready software development kit for AI apps built with React and Svelte.",
    date: "2023-06-15T13:00:00.000Z",
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: "https://vercel.com/blog/introducing-the-vercel-ai-sdk",
  },
  {
    title: "Improving the accessibility of our Next.js site",
    description:
      "We've made some improvements to the accessibility of our Next.js site. Here's how we did it.",
    date: "2022-09-30T13:00:00.000Z",
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: "https://vercel.com/blog/improving-the-accessibility-of-our-nextjs-site",
  },
];
