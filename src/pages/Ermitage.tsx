import ProjectPage from "../components/ProjectPage";
import OtherWorkNav from "../components/OtherWorkNav";
import { getProjectImages } from "../lib/gallery";

const ermitageImages = getProjectImages("ermitage");


export default function Ermitage() {
  return (
    <ProjectPage
      nav={<OtherWorkNav />}
      images={ermitageImages}
      slides={1}
      translationKey="projects.ermitage"
      link="https://www.ermitage308.com/"
    />
  );
}