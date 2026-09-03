import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";
import { getProjectImages } from "../lib/gallery";

const materialMattersImages = getProjectImages("mm");

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