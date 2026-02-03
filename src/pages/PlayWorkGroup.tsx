import WorkPageLayout from "../components/WorkPageLayout";

const playWorkGroupImages: string[] = [
  "/dc/dc001.png",
];

export default function PlayWorkGroup() {
  return (
    <WorkPageLayout 
      title="PlayWorkGroup" 
      images={playWorkGroupImages}
    >
      <div className="text-lg space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </WorkPageLayout>
  );
}
