import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, PropsWithChildren, useMemo } from "react";

export interface CardProps extends PropsWithChildren {
  image?: string;
  alt?: string;

  type?: "square" | "tall" | "full";
}

export const Card: FC<CardProps> = ({ image, alt = "", type = "square" }) => {
  const { theme } = useTheme();
  const cardSizing = useMemo(() => {
    return type === "full"
      ? "h-full w-full"
      : type === "tall"
      ? "h-[40rem] w-[20rem]"
      : "h-[20rem] w-[20rem]";
  }, [type]);

  const styling = useMemo(() => {
    if (theme === "dark") {
      return "";
    }
    return "";
  }, [theme]);

  return (
    <div className={`relative rounded-md ${cardSizing} ${styling}`}>
      {image && (
        <Image src={image} alt={alt} fill={true} className="rounded-md" />
      )}
    </div>
  );
};
