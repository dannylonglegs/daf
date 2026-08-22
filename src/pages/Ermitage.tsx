import PageLayout from "../components/PageLayout";
import OtherWorkNav from "../components/OtherWorkNav";
 
const ermitageImages: string[] = [
  "/ermitage/ermitage001.png",
];

export default function Ermitage() {
  return (
    <PageLayout 
        nav={<OtherWorkNav />}
        images={ermitageImages}
    >
      <div className="">

      </div>
    </PageLayout>
  );
}
