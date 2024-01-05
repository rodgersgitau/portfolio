export type PostType =
  | {
      title: string;
      slug: string;
      date: string;
      image?: string;
      tags: string[];
      description?: string;
      lastModified?: number;
      views?: number;
    }
  | {
      // Third party only
      title: string;
      href: string;
      date: string;
      tags: string[];
      image?: string;
      description?: string;
      isThirdParty: boolean;
      lastModified?: number;
    };

export type FAQType = {
  question: string;
  answer: string;
};

export type GraphicType = {
  name: string;
  image: string;
  link?: string;
  repository: string;
  description: string;
};

export type ProjectType = {
  name: string;
  description: string;
  link: string;
  images: string[];
  techStack: string[];
  role?: string;
  stars?: number;
};
