import type { Metadata } from "next";
import Link from "@/components/ui/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

async function Stars() {
  let res = await fetch("https://api.github.com/repos/vercel/next.js");
  let json = await res.json();
  let count = Math.round(json.stargazers_count / 1000);
  return `${count}k stars`;
}

export default function Work() {
  return (
    <div className="flex flex-grow w-full h-full">
      <div className="relative max-w-full prose h-max prose-neutral dark:prose-invert">
        <h1 className="text-lg font-medium !leading-snug tracking-tight md:text-xl xl:text-2xl md:tracking-wide">
          Work Experience
        </h1>

        <section className="">
          <p>
            <span>On a mission to build products developers</span>
            <Link className="mx-1" href="/blog/developer-experience-examples">
              love
            </Link>
            <span>
              , and along the way, teach the next generation of developers.
              Here's a summary of my work so far.
            </span>
          </p>
          <hr className=" border-neutral-100 dark:border-neutral-800" />

          <div>
            <h2 className="text-xl font-medium tracking-tighter">Vercel</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              VP of Product
            </p>
            <p>
              <span>I joined</span>
              <Link external className="mx-1" href="https://vercel.com/home">
                Vercel
              </Link>
              <span>early to grow</span>
              <Link external className="mx-1" href="https://nextjs.org">
                Next.js
              </Link>
              <span>
                and our developer community. I built our Developer Relations
                team to teach our community about our products.
              </span>
            </p>
            <ul>
              <li>
                <span>In 2021, I was promoted to Director of DevRel. We</span>
                <Link
                  external
                  className="mx-1"
                  href="https://twitter.com/kelseyhightower/status/1105985400110112768"
                >
                  translated customer pain
                </Link>
                <span>back into the product roadmap. We spoke at</span>
                <Link className="mx-1" href="/blog/nextjs-conf-2022-recap">
                  conferences
                </Link>
                <span>
                  , wrote blog posts, and created videos. We built open-source
                  examples and contributed back to the product.
                </span>
              </li>
              <li>
                <span>
                  In 2022, I was promoted to VP of Developer Experience, now
                  also leading our product documentation team. My team created a
                </span>
                <Link external className="mx-1" href="https://nextjs.org/learn">
                  new free course
                </Link>
                <span>
                  to teach Next.js, which had 17 million page views that year.
                </span>
                <Link
                  external
                  className="mx-1"
                  href="https://twitter.com/leeerob/status/1608900031859527682"
                >
                  I shipped.
                </Link>
                <span>
                  I partnered with our open-source community, collaborating with
                  frameworks like
                </span>
                <Link
                  external
                  className="mx-1"
                  href="https://vercel.com/docs/frameworks/nuxt"
                >
                  Nuxt
                </Link>
                and
                <Link
                  external
                  className="mx-1"
                  href="https://astro.build/blog/vercel-official-hosting-partner/"
                >
                  Astro
                </Link>
                <span>and sponsoring individuals and projects.</span>
              </li>
              <li>
                In 2023, I was promoted to VP of Product, now also leading
                Product Management.
              </li>
            </ul>
            <p>
              <span>
                Since I joined Vercel in 2020, Next.js active developers have
                grown 1000%, now at ~900k. Next.js is now a top 10 software
                project on GitHub with <Stars />. It's used by Walmart, ChatGPT,
                Starbucks, Okta, Datastax, Notion, and
              </span>
              <Link
                external
                className="mx-1"
                href="https://nextjs.org/showcase"
              >
                more.
              </Link>
            </p>
          </div>
        </section>
        <section className="">
          <hr className="border-neutral-100 dark:border-neutral-800" />
          <h2 className="text-xl font-medium tracking-tighter">Hy-Vee</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Senior Software Engineer, 2018 — 2020
          </p>
          <p>
            <span>
              Hy-Vee, an almost 100-year-old grocery chain in the United States,
              wanted to build a new version of their digital storefront. I
              joined a team of
            </span>
            <Link className="mx-1" href="/blog/product-engineers">
              product engineers
            </Link>
            <span>
              working across web and mobile to rebuild their legacy .NET
              application (~500k MAU) with React and React Native.
            </span>
          </p>
          <p>
            On the frontend, I led our move from a custom webpack and React
            configuration to Next.js and the latest React patterns. In the
            process, I shared my learnings online, helping educate members of
            the React and Next.js community by creating courses.
          </p>
          <p>
            Throughout my two years, I was able to work on some hard problems:
            decoupling a decade old monolith into microservices, working with a
            federated GraphQL API, learning and occasionally managing a
            Kubernetes cluster, building and implementing a design system,
            incrementally migrating individual components and routes to a new
            framework and infrastructure, and more.
          </p>
          <hr className="border-neutral-100 dark:border-neutral-800" />
        </section>
        <section>
          <h2 className="text-xl font-medium tracking-tighter">Workiva</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Software Engineer, 2015 — 2018
          </p>
          <p>
            Workiva ($WK) is a cloud platform for data reporting and compliance.
            During my time at Workiva, I gained my first production experience
            using React. I worked on tooling to help predict and alert and
            regressions in our SaaS platform, building a product similar to
            open-source tools like Sentry.
          </p>
        </section>
      </div>
    </div>
  );
}
