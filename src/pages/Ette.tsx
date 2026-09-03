import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";
import { getProjectImages } from "../lib/gallery";

const etteImages = getProjectImages("e");    

export default function Ette() {
  return (
    <ProjectPage
      nav={<WorkNav />}
      images={etteImages}
      slides={2}
      translationKey="code.ette"
      link="https://www.ette.studio/"
    />
  );
}