import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";

const maggiePeachImages: string[] = [
  "/dc/dc001.png",
];

export default function MaggiePeach() {
  return (
    <PageLayout 
      nav={<WorkNav />}
      images={maggiePeachImages}
      slides={2}
    >
      <div className="space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </PageLayout>
  );
}
