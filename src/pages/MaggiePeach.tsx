import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";
import { getProjectImages } from "../lib/gallery";

const maggiePeachImages = getProjectImages("mp");

export default function MaggiePeach() {
  return (
    <ProjectPage
      nav={<WorkNav />}
      images={maggiePeachImages}
      slides={2}
      translationKey="code.maggiePeach"
      link="https://www.missmaggiepeach.com/"
    >
      <div className="space-y-4 max-w-[700px]">
      </div>
    </ProjectPage>
  );
}