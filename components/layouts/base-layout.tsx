"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/nav";
import Backdrop from "@/components/backdrop";
import Toaster from "@/components/ui/sonner";

import PageLayout from "@/components/layouts/page-layout";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        textShadow: "(2px 3px 15px rgba(0,0,0,0.15))",
      }}
      className="relative flex flex-col w-full h-full min-h-screen gap-8"
    >
      <Navbar />
      <PageLayout>{children}</PageLayout>
      <Backdrop />
      <>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </>
    </main>
  );
}
