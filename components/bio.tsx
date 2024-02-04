"use client";

import Link from "@/components/ui/link";

export default function Bio() {
  return (
    <div className="prose dark:prose-invert max-w-full !leading-snug lg:!leading-relaxed lg:text-base">
      <p className="space-x-1">
        <span>Rodgers Gitau</span>
        <span className="font-mono">[/gĭ-täu/]</span>
        <span>
          is a creative software engineer presently living in Nairobi, Kenya.
          But his location is neither here nor there.
        </span>
      </p>
      <p className="space-x-1">
        He started his career working 5+ years as an ICT Administrator in the
        hospitality before he eventually pivoted to dev in 2016.
      </p>
      <p className="space-x-1">
        <span>
          After bouncing around a few agencies, he spent the next 4+ years
          creating innovative solutions to improve access to affordable quality
          healthcare at
        </span>
        <Link external href="https://savannahinformatics.com">
          savannah informatics
        </Link>
        <span>.</span>
      </p>
      <p className="space-x-1">
        <span>
          He went independent in early 2023 &amp; set up his own agency
        </span>
        <Link external href="https://mzizistudio.com">
          mzizi studio
        </Link>
        <span>where he continues to build innovative software.</span>
      </p>
      <p className="space-x-1">
        <span>
          Additionally, he spends most of his &quot;not-working&quot; time for
          teaching the next-gen of developers over at
        </span>
        <Link external href="https://freecodecamp.org">
          freecodecamp
        </Link>
        <span>,</span>
        <span>making 2D/3D video games &amp; visual effects on</span>
        <Link external href="https://rodgersgitau.github.io/labs">
          gitau labs
        </Link>
        <span>and seeking/sharing philosophy &amp; enlightment on</span>
        <Link external href="https://hermitology.com">
          hermitology
        </Link>
        <span>.</span>
      </p>
    </div>
  );
}
