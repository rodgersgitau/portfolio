"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function CalendlyForm({ className }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal.ns["30min"]("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      // namespace="30min"
      className={cn("w-full h-full", className)}
      calLink="rodgersgitau/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view" }}
    />
  );
}
