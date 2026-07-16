import Image from "next/image";
import type { ProjectMediaSlot } from "@/lib/case-studies";

type ProjectMediaProps = {
  media: ProjectMediaSlot;
  aspect?: "hero" | "landscape" | "portrait";
  priority?: boolean;
};

const aspectClasses = {
  hero: "min-h-[360px] sm:min-h-[500px] lg:min-h-[620px]",
  landscape: "min-h-[300px] sm:min-h-[390px]",
  portrait: "min-h-[380px] sm:min-h-[520px]",
};

export function ProjectMedia({
  media,
  aspect = "landscape",
  priority = false,
}: ProjectMediaProps) {
  return (
    <figure
      className={`relative isolate overflow-hidden border border-border-default bg-bg-surface ${aspectClasses[aspect]}`}
    >
      {media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={
            aspect === "hero"
              ? "(max-width: 1280px) 100vw, 1200px"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          role="img"
          aria-label={`${media.alt} placeholder`}
        >
          <span className="absolute left-0 top-0 h-px w-[141.5%] origin-left rotate-[35deg] bg-border-subtle sm:rotate-[28deg]" />
          <span className="absolute bottom-0 left-0 h-px w-[141.5%] origin-left -rotate-[35deg] bg-border-subtle sm:-rotate-[28deg]" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-border-subtle" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-border-subtle" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="border border-border-default bg-bg-base/95 px-6 py-5 text-center">
              <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-accent-dark">
                Image reserved
              </span>
              <span className="mt-2 block font-body text-sm text-text-muted">
                {media.label}
              </span>
            </div>
          </div>
        </div>
      )}
    </figure>
  );
}
