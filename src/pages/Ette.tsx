import WorkPageLayout from "../components/WorkPageLayout";

const etteImages: string[] = [
  "/e/ette01.png",
  "/e/ette02.png",
  "/e/ette03.png",
  "/e/ette04.png",
  "/e/ette05.png",
  "/e/ette06.png",
];

export default function Ette() {
  return (
    <WorkPageLayout 
      title="Ette" 
      images={etteImages}
    >
      <div className="text-lg space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </WorkPageLayout>
  );
}
