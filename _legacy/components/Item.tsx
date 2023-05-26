import { useTheme } from "next-themes";
import Link from "next/link";
import { FC, useMemo } from "react";

export interface ItemProps {
  link: string;
  title: string;
  description?: string;
  technologies: string[];
  type?: "live" | "study";
}

const Item: FC<ItemProps> = ({
  link,
  title,
  description,
  technologies,
  type = "live",
}) => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "transition-all hover:px-2 hover:bg-gray-600/10";
    }
    return "transition-all hover:px-2 hover:bg-black/10";
  }, [theme]);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`relative block group w-full min-h-[12vh] rounded-sm ${styling}`}
    >
      <div className="flex flex-col items-center h-full gap-4 px-0 py-8 m-0 md:flex-row">
        <div className="flex flex-col space-y-4 font-sans md:flex-1 h-max">
          <h4 className="text-2xl capitalize xl:text-3xl">{title}</h4>
          <h5 className="text-sm text-muted">{description}</h5>
          <dl className="flex flex-wrap space-x-2 text-xs text-black/60 dark:text-white/60">
            {technologies?.map((tech, idx) => (
              <dt
                key={`${tech}-${Math.floor(idx * 0.1)}`}
                className="whitespace-nowrap"
              >
                {tech}
              </dt>
            ))}
          </dl>
        </div>
        <div className="w-full md:w-max">
          <Link
            href={link}
            className="font-semibold capitalize border-b-2 border-current border-spacing-4 group-hover:text-pink-500"
          >
            {type === "live" ? "View Live Site" : "Read Case Study"}
          </Link>
        </div>
      </div>
    </a>
  );
};

export default Item;
