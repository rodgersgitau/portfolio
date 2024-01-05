import { differenceInYears } from "date-fns";

const SITE_URL = process.env.SITE_URL || "http://rodgergitau.vercel.app";

export const siteConfig = {
  language: "en",
  title: "Rodgers Gitau",
  site_url: SITE_URL,
  feed_url: `${SITE_URL}/feed.xml`,
  // image_url: `${SITE_URL}/og.png`,
  description: "",
};
