import { LinkIcon } from "lucide-react";

import Link from "@/components/ui/link";
import { buttonVariants } from "@/components/ui/button";

import { parseDate } from "@/lib/utils";

type Props =
  | {
      title: string;
      description?: string;
      type?: string;
      href: string;
      date?: Date;
      views?: number;
      isThirdParty?: boolean;
    }
  | {
      skeleton: true;
    };

const BlockEntry = (props: Props) => {
  if ("skeleton" in props) {
    return <li className={buttonVariants({ variant: "link" })} />;
  }

  const { title, description, type, href, date, views, isThirdParty } = props;
  return (
    <Link
      href={href}
      underline={false}
      className={buttonVariants({
        variant: "ghost",
        className: "!no-underline !p-0 !w-full text-foreground",
      })}
      external={isThirdParty}
      title={description || title}
    >
      <div className="grid gap-2 p-4 border rounded-lg shadow md:p-8">
        {type && <p className="text-base">{type}</p>}
        {date && (
          <div className="flex items-center justify-between gap-4">
            {date && <span className="text-sm">{parseDate(date)}</span>}
            {isThirdParty && (
              <div className="flex items-center gap-2">
                <span className="">{new URL(href).hostname}</span>
                <LinkIcon className="w-4 h-4" />
              </div>
            )}
            {views ? (
              <span className="ml-auto text-base">
                {views.toLocaleString()} {views === 1 ? "view" : "views"}
              </span>
            ) : null}
          </div>
        )}
        <h4 className="text-lg font-medium leading-snug">{title}</h4>
        {description && <p className="text-base">{description}</p>}
      </div>
    </Link>
  );
};

export default BlockEntry;
