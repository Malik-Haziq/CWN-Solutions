import fs from "node:fs";
import path from "node:path";

const pageFilePattern = /^page\.(?:js|jsx|ts|tsx|md|mdx)$/;
const dynamicOrParallelSegmentPattern = /^(?:\[.*\]|@.*)$/;

export type StaticRoute = {
  path: string;
  lastModified: Date;
};

export function getStaticAppRoutes(): StaticRoute[] {
  const appDirectory = path.join(process.cwd(), "app");

  function walk(directory: string, segments: string[] = []): StaticRoute[] {
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
          if (dynamicOrParallelSegmentPattern.test(entry.name)) return [];

          const nextSegments = entry.name.startsWith("(")
            ? segments
            : [...segments, entry.name];

          return walk(entryPath, nextSegments);
        }

        if (!pageFilePattern.test(entry.name)) return [];

        return [
          {
            path: `/${segments.join("/")}`.replace(/\/$/, "") || "/",
            lastModified: fs.statSync(entryPath).mtime,
          },
        ];
      });
  }

  return walk(appDirectory);
}
