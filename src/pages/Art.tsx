import PageLayout from "../components/PageLayout";
import OtherWorkNav from "../components/OtherWorkNav";
 
const artImages: string[] = [
  // "/art/01.jpg",
  "/art/11.jpg",
  "/art/03.jpg",
  "/art/04.jpg",
  "/art/05.jpg",
  "/art/06.jpg",
  "/art/07.jpg",
  "/art/08.jpg",
   "/art/02.jpg",
  "/art/09.jpg",

];

export default function Art() {
  return (
    <PageLayout 
        nav={<OtherWorkNav />}
        images={artImages}
        slides={1}
    >
      <div className="">

      </div>
    </PageLayout>
  );
}
