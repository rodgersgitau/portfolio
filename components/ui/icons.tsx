import { LucideProps } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  pointerIcon: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 75.5 88.2">
      <path
        fill="none"
        strokeWidth="4px"
        stroke="currentColor"
        d="M2.9,30.1C1.7,31.6,1,33.5,1,35.5v17.2c0,4.8,3.9,8.6,8.6,8.6s8.6-3.9,8.6-8.6c0,4.8,3.9,8.6,8.6,8.6 c4.8,0,8.6-3.9,8.6-8.6v25.9c0,4.8,3.9,8.6,8.6,8.6s8.6-3.9,8.6-8.6V52.7V42.1l6.6,7.6c1.6,1.9,4,3.1,6.6,3.1 c4.8,0,8.6-3.9,8.6-8.6c0-2.7-1.2-5.1-3.2-6.7L51.4,13.6c-1.5-2.4-4.2-4-7.3-4H18.2c-2.9,0-5.5,1.4-7,3.6L2.9,30.1z"
      ></path>
      <line
        strokeWidth="4px"
        stroke="currentcolor"
        x1="38.9"
        y1="39.3"
        x2="36.6"
        y2="26.1"
      ></line>
      <line
        strokeWidth="4px"
        stroke="currentcolor"
        x1="20.9"
        y1="39.3"
        x2="23.2"
        y2="26.1"
      ></line>
      <line stroke="currentcolor" x1="29.9" y1="39.4" x2="29.9" y2="26"></line>
      <path
        fill="none"
        strokeWidth="4px"
        stroke="currentColor"
        d="M18.2,9.6h25.9c1.6,0,3.1,0.5,4.4,1.2c0.1-0.4,0.1-0.8,0.1-1.2C48.6,4.9,44.8,1,40,1H19.6 C14.9,1,11,4.9,11,9.6c0,1.1,0.2,2.2,0.6,3.1C13.2,10.8,15.6,9.6,18.2,9.6z"
      ></path>
    </svg>
  ),
};
