import PageLayout from "../components/PageLayout";
import OtherWorkNav from "../components/OtherWorkNav";
 
const artImages: string[] = [
  "/eolith/001.webp",
];

export default function Art() {
  return (
    <PageLayout 
        nav={<OtherWorkNav />}
        images={artImages}
    >
      <div className="">

      </div>
    </PageLayout>
  );
}
