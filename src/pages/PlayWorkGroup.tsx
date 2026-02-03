import WorkPageLayout from "../components/WorkPageLayout";

const playWorkGroupImages: string[] = [
  "/ngp/ngp01.png",
  "/ngp/ngp02.png",
  "/ngp/ngp03.png",
  "/ngp/ngp04.png",
  "/ngp/ngp05.png",
  "/ngp/ngp06.png",
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
