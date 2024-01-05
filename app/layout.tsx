import "../styles/globals.css";

import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Backdrop from "@/components/ui/backdrop";
import PageLayout from "@/components/layouts/page-layout";
import Theming from "@/components/providers/theme";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.site_url}`),
  title: {
    default: "Rodgers Gitau",
    template: "%s | Rodgers Gitau",
  },
  description: "Creative developer, writer, and creator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
      <body
        suppressHydrationWarning
        className="relative flex w-full h-full min-h-screen gap-8 antialiased text-foreground bg-background"
      >
        <Theming>
          <main className="container flex flex-1 h-full min-h-screen mx-auto max-w-screen-2xl">
            <PageLayout>{children}</PageLayout>
          </main>
          <Backdrop />
        </Theming>
      </body>
    </html>
  );
}
