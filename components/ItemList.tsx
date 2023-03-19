import { useTheme } from "next-themes";
import { FC, useMemo } from "react";

import Item, { ItemProps } from "./Item";

export interface ItemListProps {
  title?: string;
  description?: string;
  items: ItemProps[];
}

export const ItemList: FC<ItemListProps> = ({ title, description, items }) => {
  const { theme } = useTheme();
  const styling = useMemo(() => {
    if (theme === "dark") {
      return "divide-y divide-opacity-25 divide-white ";
    }
    return "divide-y divide-opacity-25 divide-black";
  }, [theme]);
  return (
    <section className="flex flex-col max-w-full gap-8">
      {title && (
        <h2 className="font-sans text-sm text-pink-500 uppercase xl:text-base">
          {title} —
        </h2>
      )}
      <div
        className={`flex flex-col items-center justify-center w-full ${styling}`}
      >
        {items.map((item, index) => (
          <Item key={`item-${Math.random() * index}`} {...item} />
        ))}
      </div>
    </section>
  );
};
