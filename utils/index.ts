import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseHtmlEntities(str: string) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

export const SITE_URL = process.env.SITE_URL || "/";

export const getImageUrl = (url: string) => SITE_URL + url;

export const getSlug = (name: string) => {
  return name
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};
