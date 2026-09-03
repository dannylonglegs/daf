export type GalleryImage = {
  src: string;
  thumb: string;
  full: string;
  placeholder: string;
  aspectRatio: number;
};

const thumbs = import.meta.glob<string>("/src/assets/work/**/*.{png,jpg}", {
  query: { w: "200;400", format: "webp", as: "srcset" },
  import: "default",
  eager: true,
});

const fulls = import.meta.glob<string>("/src/assets/work/**/*.{png,jpg}", {
  query: { w: "800;1200;1600", format: "avif;webp;jpg", as: "srcset" },
  import: "default",
  eager: true,
});

const placeholders = import.meta.glob<string>("/src/assets/work/**/*.{png,jpg}", {
  query: { w: "64", blur: "4", format: "webp", inline: "" },
  import: "default",
  eager: true,
});

const metas = import.meta.glob<{ width: number; height: number }>(
  "/src/assets/work/**/*.{png,jpg}",
  { query: { as: "metadata" }, import: "default", eager: true }
);

console.log(Object.entries(metas)[0]);

export function getProjectImages(folder: string): GalleryImage[] {
  return Object.keys(thumbs)
    .filter((path) => path.includes(`/work/${folder}/`))
    .sort()
    .map((path) => {
      const meta = metas[path];
      return {
        src: path,
        thumb: thumbs[path],
        full: fulls[path],
        placeholder: placeholders[path],
        aspectRatio: meta.width / meta.height,
      };
    });
}