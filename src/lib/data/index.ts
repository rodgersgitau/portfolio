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
