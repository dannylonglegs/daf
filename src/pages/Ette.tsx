import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";

const etteImages: string[] = [
  "/e/ette01.png",
  "/e/ette02.png",
  "/e/ette03.png",
  "/e/ette04.png",
  "/e/ette05.png",
  "/e/ette06.png",
];

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