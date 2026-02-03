import WorkPageLayout from "../components/WorkPageLayout";

const materialMattersImages: string[] = [
  "/mm/mm001.png",
  "/mm/mm002.png",
  "/mm/mm003.png",
  "/mm/mm004.png",
  "/mm/mm005.png",
];

export default function MaterialMatters() {
  return (
    <WorkPageLayout 
      title="Material Matters" 
      images={materialMattersImages}
    >
      <div className="text-lg space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </WorkPageLayout>
  );
}
