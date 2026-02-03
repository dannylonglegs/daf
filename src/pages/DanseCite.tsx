import WorkPageLayout from "../components/WorkPageLayout";

const danseCiteImages: string[] = [
  "/dc/dc001.png",
  "/dc/dc002.png",
  "/dc/dc003.png",
  "/dc/dc004.png",
  "/dc/dc005.png",
  "/dc/dc006.png",
  "/dc/dc007.png",
  "/dc/dc008.png",
];

export default function DanseCite() {
  return (
    <WorkPageLayout title="Danse-Cité" images={danseCiteImages}>
      <div className="text-lg space-y-4 max-w-[700px]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
        </p>
      </div>
    </WorkPageLayout>
  );
}
