import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: "summary" | "summary_large_image";
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
  twitterCard,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: site.name,
      locale: site.locale,
      title: ogTitle,
      description: ogDescription,
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: twitterCard ?? (imageUrl ? "summary_large_image" : "summary"),
      title: twitterTitle ?? ogTitle,
      description: twitterDescription ?? ogDescription,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}
