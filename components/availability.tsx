import { CalendarIcon } from "lucide-react";

import CalendlyForm from "@/components/forms/calendly-form";

export default function Availability() {
  return (
    <div className="h-full w-full flex flex-col gap-8 md:gap-10">
      {/* <div className="flex items-center gap-6">
        <CalendarIcon className="w-4 h-4" />
        <h2 className="!leading-relaxed">Let's find some time to talk...</h2>
      </div> */}

      <CalendlyForm className="w-full h-full" />
    </div>
  );
}
