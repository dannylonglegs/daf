import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";
import { getProjectImages } from "../lib/gallery";

const playWorkGroupImages = getProjectImages("ngp");

export default function PlayWorkGroup() {
  return (
    <ProjectPage
      nav={<WorkNav />}
      images={playWorkGroupImages}
      slides={2}
      translationKey="code.playWorkGroup"
      link="https://novosgrowthpartners.com/"
    />
  );
}