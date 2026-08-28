import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";

const danseCiteImages: string[] = [
  "/dc/dc001.png",
  "/dc/dc002.png",
  "/dc/dc003.png",
  "/dc/dc004.png",
  "/dc/dc005.png",
  "/dc/dc006.png",
  "/dc/dc007.png",
  "/dc/dc008.png",
];

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