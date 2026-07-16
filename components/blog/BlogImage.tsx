import Image from "next/image";
import type { BlogImage as BlogImageData } from "@/lib/blog-shared";

type BlogImageProps = Omit<BlogImageData, "placeholder"> & {
  placeholder?: boolean | "true";
  state?: "placeholder";
  variant?: "card" | "featured" | "hero" | "body";
  priority?: boolean;
  label?: string;
};

const aspectClasses = {
  card: "aspect-[16/10]",
  featured: "min-h-[280px] md:min-h-[420px]",
  hero: "aspect-[16/9]",
  body: "aspect-[16/10]",
};

const sizesByVariant = {
  card: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  featured: "(max-width: 768px) 100vw, 52vw",
  hero: "(max-width: 1280px) 100vw, 1200px",
  body: "(max-width: 768px) 100vw, 680px",
};

export function BlogImage({
  src,
  alt,
  placeholder,
  state,
  brief,
  caption,
  variant = "body",
  priority = false,
  label,
}: BlogImageProps) {
  const isPlaceholder =
    placeholder === true || placeholder === "true" || state === "placeholder";
  const placeholderLabel =
    label ??
    (variant === "body" ? "Supporting visual pending" : "Cover image pending");

  return (
    <figure>
      <div
        className={`group relative overflow-hidden border border-border-default bg-bg-surface ${aspectClasses[variant]}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizesByVariant[variant]}
          unoptimized={src.endsWith(".svg")}
          className={`object-cover ${isPlaceholder ? "opacity-70" : "transition-transform duration-500 group-hover:scale-[1.015]"}`}
        />
        {isPlaceholder ? (
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-bg-surface/25 via-transparent to-accent-muted/70 p-4 sm:p-6">
            <span className="self-start border border-accent/50 bg-bg-base/95 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-accent-dark">
              {placeholderLabel}
            </span>
            {(brief ?? alt) ? (
              <p className="max-w-2xl self-start border-l-2 border-accent bg-bg-base/95 px-4 py-3 font-body text-xs leading-5 text-text-secondary sm:text-sm">
                <span className="mr-2 font-mono text-[9px] uppercase tracking-[0.1em] text-text-muted">
                  Image brief
                </span>
                {brief ?? alt}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-body text-xs leading-5 text-text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
