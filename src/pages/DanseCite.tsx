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
        <h2 className="text-xl ">Danse-Cité 40th Anniversary Rebrand and Website</h2>
          <p>
          Full visual and website redesign for contemporary dance company Danse-Cité’s 40th anniversary, including updated branding, visual language, and digital presence.
          </p>

          <p>
          Developed the site using Next.js and Contentful CMS, based on branding by Steven Steffen and web/UI design created collaboratively as a duo. Built a modern, highly navigable experience featuring a sortable archive of 40 years of performances, and trained the team to manage content independently.
          </p>

      </div>
    </WorkPageLayout>
  );
}
