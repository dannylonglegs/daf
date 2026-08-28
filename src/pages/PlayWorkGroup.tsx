import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";

const playWorkGroupImages: string[] = [
  "/ngp/ngp04.png",
  "/ngp/ngp01.png",
  "/ngp/ngp02.png",
  "/ngp/ngp03.png",
  "/ngp/ngp05.png",
  "/ngp/ngp06.png",
];

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