import OtherWorkNav from "../components/OtherWorkNav";
import ProjectPage from "../components/ProjectPage";
import { getProjectImages } from "../lib/gallery";

const artImages = getProjectImages("art");

export default function Art() {
  return (
    <ProjectPage
        nav={<OtherWorkNav />}
        images={artImages}
        slides={1}
        translationKey="projects.artwork"
    >
    </ProjectPage>
  );
}
