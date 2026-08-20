import WorkPageLayout from "../components/WorkPageLayout";

const maggiePeachImages: string[] = [
  "/dc/dc001.png",
];

export default function MaggiePeach() {
  return (
    <WorkPageLayout 
      title="Maggie Peach" 
      images={maggiePeachImages}
      >
      <div className="space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </WorkPageLayout>
  );
}
