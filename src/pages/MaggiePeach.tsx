import ProjectPage from "../components/ProjectPage";
import WorkNav from "../components/WorkNav";

const maggiePeachImages: string[] = [ "/mp/03.png", "/mp/01.png", "/mp/05.png", "/mp/04.png", ];

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