import PageLayout from "../components/PageLayout";
import OtherWorkNav from "../components/OtherWorkNav";
 
const eolithImages: string[] = [
  "/eolith/001.webp",
  "/eolith/002.webp",
  "/eolith/003.webp",
  "/eolith/004.webp",
  "/eolith/005.webp",
  "/eolith/006.webp",
  "/eolith/007.webp",
  "/eolith/008.webp",
  "/eolith/009.webp",
  "/eolith/010.webp",
  "/eolith/011.webp",
  "/eolith/012.webp",
  "/eolith/013.webp",
  "/eolith/014.webp",
  "/eolith/015.webp",
  "/eolith/016.webp",
  "/eolith/017.webp",
  "/eolith/018.webp",
  "/eolith/019.webp",
  "/eolith/020.webp",
];

export default function Eolith() {
  return (
    <PageLayout 
        nav={<OtherWorkNav />}
        images={eolithImages}
    >
      <div className="">

      </div>
    </PageLayout>
  );
}
