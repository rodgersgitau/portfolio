import { differenceInYears } from "date-fns";

export const SITE_URL = process.env.SITE_URL || "http://rodgergitau.vercel.app";

export const siteConfig = {
  name: "Rodgers Gitau",
  age: differenceInYears(new Date(), new Date(1992, 12, 19)) + 1,
};

export const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/guestbook": {
    name: "guestbook",
  },
};

export const faqs = [
  {
    question: "Tell me about Gitau",
    answer: `Gitau is a ${siteConfig.age} year old developer from Nairobi, Kenya. While pursuing a bachelors degree in Business Information Technology (BBIT) at KEMU, he was dissatisfied with the subpar programming curriculum. Around the same time, Moringa School was offering a 6 month course that taught programming fundamentals and he realised it was now or never. Needless to say, he promptly quit his 5+ year job as an ICT Administrator and the rest is history.`,
  },
  {
    question: "So does he design?",
    answer:
      "Occasionally. He designed this site you're looking at. He's had a few contract gigs throughout the years as a designer, but dev has become his main thing. He never wants to lose touch with that part of his brain though, so he always makes time to look at what's hot in the design world these days.",
  },
  {
    question: "Does that mean he partners with designers?",
    answer:
      "Absolutely! That's some of his favorite work. Leading teams means he's spent a lot of time matching comps and collaborating with designers. Hit him up if that's you and you have an idea you'd like him to build.",
  },
  {
    question: "What's his favourite kind of work?",
    answer:
      "Gitau specializes in highly-interactive frontends with attention to detail. Marketing materials that command attention and take the user into their own little world. He's spent obsessive amounts of time studying the art of macro and micro-interactions, and ensures everything he touches has been optimized to the nines. He'll boost that Lighthouse score and he'll make you look good doing it.",
  },
  {
    question: "What's his tech stack?",
    answer:
      "Quite literally anything. He's worked for agencies that stressed a technology-agnostic approach, so he's become highly adaptable in learning new tech, setting his ego aside, and staying grounded in the fundamentals. He is a believer in JAMStack architecture and can make your project headless/serverless for a scalability & performance boost. As for an SPA/SSA framework, most of his heaviest lifting has happened in React/NextJS & his go-to Meta framework is Astro He's worked on product selectors for local brands, advanced Hubspot integrations and international healthcare software with these tools.",
  },
  {
    question: "Let's talk budget. Is he expensive?",
    answer:
      "He keeps it competitive! He can be flexible with most budgets, and likes to focus on high-happiness work instead of chasing the highest billables. One-man band means all killer no filler.",
  },
  {
    question: "Can he build my passion project?",
    answer:
      "Strike while the iron is hot my friends. He currently has the bandwidth for unbillable but high-exposure work. The free time may not last forever, so now's your chance to get in touch 🤙",
  },
];
