import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { SITE_URL } from "@/lib/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseHtmlEntities(str: string) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

export const parseNumbers = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

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
