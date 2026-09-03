import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";
import { getProjectImages } from "../lib/gallery";

const danseCiteImages = getProjectImages("dc");

export default function DanseCite() {
  return (
    <ProjectPage
      nav={<WorkNav />}
      images={danseCiteImages}
      slides={2}
      translationKey="code.danseCite"
      link="https://www.danse-cite.org/"
    />
  );
}