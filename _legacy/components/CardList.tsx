import React, { FC } from "react";

import { Card, CardProps } from "./Card";

export interface CardListProps {
  title?: string;
  cardItems: CardProps[];
}

export const CardList: FC<CardListProps> = ({ title, cardItems }) => {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-sans text-sm text-pink-500 uppercase xl:text-lg">
        {title} —
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {cardItems.map((item, index) => (
          <Card
            icon={item.icon}
            title={item.title}
            key={`item-${Math.random() * index}`}
          />
        ))}
      </div>
    </div>
  );
};
