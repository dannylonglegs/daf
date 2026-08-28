import ProjectPage from "../components/ProjectPage";
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
    <ProjectPage
      nav={<WorkNav />}
      images={materialMattersImages}
      slides={2}
      translationKey="code.materialMatters"
      link="https://materialmatters.ecuad.ca/"
    />
  );
}