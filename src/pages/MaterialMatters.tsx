import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";

const materialMattersImages: string[] = [
  "/mm/mm001.png",
  "/mm/mm002.png",
  "/mm/mm003.png",
  "/mm/mm004.png",
  "/mm/mm005.png",
];

export default function MaterialMatters() {
  return (
    <PageLayout 
      nav={<WorkNav />}
      images={materialMattersImages}
    >
      <div className="space-y-4 max-w-[700px]">
        {/* <h2>Material Matters — Research Website</h2> */}

            <p>
            Website for Material Matters, a research initiative at Emily Carr University of Art and Design.
            </p>

            <p>
            Consulted on UI/UX and developed the site with GatsbyJS and Contentful CMS. Designed a sortable homepage layout with intentional blank space to create visual rhythm, and trained the team to manage content independently.
            </p>

      </div>
    </PageLayout>
  );
}
