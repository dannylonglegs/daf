import ProjectPage from "../components/ProjectPage";
import OtherWorkNav from "../components/OtherWorkNav";
import { getProjectImages } from "../lib/gallery";

const eolithImages = getProjectImages("eolith");


export default function Eolith() {

  return (
    <ProjectPage
      nav={<OtherWorkNav />}
      images={eolithImages}
      slides={1}
      translationKey="projects.eolith"
      link="https://www.ermitage308.com/archive"
    > 
    </ProjectPage>
  );
}