export type GalleryImage = {
  src: string;
  thumb: string;
  full: string;
  placeholder: string;
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
  query: { w: "20", blur: "4", format: "webp", inline: "" },
  import: "default",
  eager: true,
});

export function getProjectImages(folder: string): GalleryImage[] {
  return Object.keys(thumbs)
    .filter((path) => path.includes(`/work/${folder}/`))
    .sort()
    .map((path) => ({
      src: path,
      thumb: thumbs[path],
      full: fulls[path],
      placeholder: placeholders[path],
    }));
}