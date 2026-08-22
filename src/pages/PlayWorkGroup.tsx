import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";

const playWorkGroupImages: string[] = [
    "/ngp/ngp04.png",
    "/ngp/ngp01.png",
    "/ngp/ngp02.png",
    "/ngp/ngp03.png",
    "/ngp/ngp05.png",
    "/ngp/ngp06.png",
];

export default function PlayWorkGroup() {
  return (
    <PageLayout 
      nav={<WorkNav />}
      images={playWorkGroupImages}
    >
      <div className=" space-y-4 max-w-[700px]">
        <h2 className="">Novos Growth Partners & Apollo Care Corporate Websites</h2>
        <p>
        Two informational healthcare websites built with a NYC agency for Chicago-based pharma company Novos Growth Partners and its subsidiary Apollo Care.
        </p>
        <p>
        Led primary development using Next.js and Contentful. Focused on clean, professional design, strong content flow, and SEO-friendly architecture.
        </p>
      </div>
    </PageLayout>
  );
}
