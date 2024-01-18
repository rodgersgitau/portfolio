"use client";

import { useEffect } from "react";
import { StarIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  testimonials: TestimonialType[];
}

export default function TestimonyList({ className, testimonials }: Props) {
  return (
    <ScrollArea className={cn("grid w-full h-full", className)}>
      <div className="relative flex flex-col gap-8 md:gap-10">
        <header className="grid gap-4 md:hidden">
          <h2>Testimonials</h2>
        </header>

        {testimonials.map((testimonial, idx) => (
          <Testimonial key={`testimonial-${idx}`} {...testimonial} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

interface TestimonialType {
  stars: number;
  name: string;
  roles: string[];
  message: string;
}

function Testimonial({ roles, message, name, stars }: TestimonialType) {
  const starCount = stars > 5 ? 5 : stars < 1 ? 1 : Math.floor(Math.abs(stars));
  return (
    <Card className="w-full text-sm aspect-1">
      <CardHeader>
        <CardTitle>
          <div className="flex gap-0">
            {Array(starCount).fill(
              <StarIcon
                key={`star-${Math.floor(Math.random())}`}
                className="w-4 h-4 fill-accent stroke-foreground/20 drop-shadow-md"
              />
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="leading-relaxed text-pretty">
        {message}
      </CardContent>
      <CardFooter className="grid gap-2 text-secondary dark:text-accent">
        <h4 className="text-base font-semibold"> {name}</h4>
        <div className="grid gap-1.5 text-xs font-normal">
          {roles.map((role) => (
            <p key={`role-${role}`} className="opacity-80">
              - {role}
            </p>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
