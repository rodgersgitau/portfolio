import { useTheme } from "next-themes";
import { FC, useMemo } from "react";
import { IconType } from "react-icons/lib";

export interface CardProps {
  icon: JSX.Element;
  title: string;
}

export const Card: FC<CardProps> = ({ icon, title }) => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "bg-transparent text-white hover:bg-primary/10 hover:text-primary";
    }
    return "bg-white text-secondary hover:bg-primary/10 hover:text-primary";
  }, [theme]);

  return (
    <div
      className={`relative p-4 md:p-8 w-full h-48 md:w-48 rounded-lg shadow shadow-current ${styling}`}
    >
      <div className="flex flex-col flex-wrap items-center gap-8 font-sans text-center">
        <div className="text-4xl text-current ">{icon}</div>
        <h1 className="capitalize lg:text-lg">{title}</h1>
      </div>
    </div>
  );
};
