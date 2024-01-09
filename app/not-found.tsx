import PageLayout from "@/components/layouts/page-layout";
import Link from "@/components/ui/link";

export default function NotFound() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto grid py-10 lg:py-16 items-center">
      <div className="grid gap-8 h-max">
        <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-2xl xl:text-3xl md:tracking-wide uppercase">
          Not Found
        </h1>
        <ul className="grid gap-4 items-center text-left">
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
    </section>
  );
}
