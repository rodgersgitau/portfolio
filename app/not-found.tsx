import PageLayout from "@/components/layouts/page-layout";
import Link from "@/components/ui/link";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="grid w-full gap-8 h-max">
        <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-2xl xl:text-3xl md:tracking-wide uppercase">
          Not Found
        </h1>
        <ul className="grid items-center gap-4 text-left">
          <li>This page doesn't exist (yet?)</li>
          <li className="space-x-1">
            <span>
              I recently rewrote the site so maybe something broke. Please
            </span>
            <Link
              external
              href="https://github.com/rodgersgitau/portfolio/issues/"
            >
              complain here.
            </Link>
          </li>
        </ul>

        <p className="text-left">Hope you'll find what you're looking for.</p>
      </div>
    </PageLayout>
  );
}
