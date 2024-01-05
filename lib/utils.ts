import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { intervalToDuration } from "date-fns";

import { siteConfig } from "@/lib/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseHtmlEntities(str: string) {
  return str.replace(/&#([0-9]{1,4});/gi, function (match, numStr) {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

export const parseDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

export const parseNumbers = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

interface IDateDurationOptions {
  showDays?: boolean;
  showHours?: boolean;
  suffix?: string;
}

export function getFormatedDate(
  date: string,
  opts: IDateDurationOptions = { suffix: "ago", showDays: true }
) {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const formattedDate = getDuration(
    targetDate.toString(),
    currentDate.toString(),
    opts
  );
  const fullDate = parseDate(targetDate);

  return `${fullDate} ${formattedDate}`;
}

export function sortDates(
  date: string | Date,
  date2: string | Date,
  dir: "asc" | "desc" = "asc"
) {
  const curr = date instanceof Date ? date.toString() : date;
  const acc = date2 instanceof Date ? date2.toString() : date2;

  return dir === "asc"
    ? new Date(acc).getTime() - new Date(curr).getTime()
    : new Date(acc).getTime() + new Date(curr).getTime();
}

export function getDuration(
  date: string,
  date2?: string,
  options: IDateDurationOptions = { showHours: false, showDays: false }
) {
  const targetDate = date2 ? new Date(date2) : new Date();
  const startDate = new Date(date);

  const { years, months, days, hours } = intervalToDuration({
    start: startDate,
    end: targetDate,
  });
  let formattedDate = "";

  if (years) formattedDate = `${years}yr${years > 1 ? "s" : ""}`;
  if (months) formattedDate += `|${months}mo${months > 1 ? "s" : ""}`;
  if (days && options.showDays)
    formattedDate += `|${days}day${days > 1 ? "s" : ""}`;
  if (hours && options.showHours)
    formattedDate += `|${hours}hr${hours > 1 ? "s" : ""}`;
  if (options.suffix) formattedDate += `|${options.suffix}`;

  return `( ${formattedDate.split("|").join(" ")} )`;
}

export const getImageUrl = (url: string) => siteConfig.site_url + url;

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
