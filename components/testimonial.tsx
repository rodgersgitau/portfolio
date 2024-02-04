"use client";

import { StarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { testimonials } from "@/lib/data";
import { TestimonialType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function TestimonyList({
  className,
  orientation = "horizontal",
}: Props) {
  return (
    <ScrollArea className={cn("w-full mx-auto whitespace-nowrap")}>
      <div className={cn("mb-8", className)}>
        {testimonials.map((testimonial, idx) => (
          <Testimonial key={`testimonial-${idx}`} {...testimonial} />
        ))}
      </div>
      <ScrollBar orientation={orientation} />
    </ScrollArea>
  );
}

function Testimonial({ roles, message, name, stars }: TestimonialType) {
  const starCount = stars > 5 ? 5 : stars < 1 ? 1 : Math.floor(Math.abs(stars));
  return (
    <Card className="w-full text-sm max-w-md shrink-0 min-h-36">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-0">
            {Array(starCount).fill(
              <StarIcon
                key={`star-${Math.floor(Math.random())}`}
                className="w-6 h-6 fill-accent stroke-transparent"
              />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-relaxed text-pretty font-normal">
        {message}
      </CardContent>
      <CardFooter className="grid gap-2 text-accent">
        <h4 className="text-base font-semibold"> {name}</h4>
        <div className="grid gap-1.5 text-xs font-normal">
          {roles.map((role) => (
            <p
              key={`role-${role}`}
              className="text-card-foreground/70 dark:text-card-foreground/40"
            >
              - {role}
            </p>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
