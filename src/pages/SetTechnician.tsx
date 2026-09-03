import OtherWorkNav from "../components/OtherWorkNav";
import ProjectPage from "../components/ProjectPage";
import { getProjectImages } from "../lib/gallery";

const setImages = getProjectImages("set");

export default function SetTechnician() {

    const doubledContent = (  
        <>
        <p>Listed are some projects I have worked on:</p>
        <ul className="max-w-[600px] whitespace-pre-line list-disc list-inside">
          <li>
            <a href="https://youtu.be/7vfc7gVpP4E?si=46gseRPQieILz4my" className="underline" target="_blank" rel="noopener noreferrer">
              Sun Life Financial
            </a>
          </li>
          <li>
              BDC - Banque de développement du Canada
          </li>
          <li>
            <a href="https://youtu.be/iNANYexpci8?si=-J7diHMqbA2DCkaZ" className="underline" target="_blank" rel="noopener noreferrer">
                Scotch-Brite
            </a>
            </li>
            <li>
                Structube
            </li>
            <li>
            <a href="https://www.adsoftheworld.com/campaigns/the-host-98eabe03-0924-40ea-9ab0-c305b4775d24" className="underline" target="_blank" rel="noopener noreferrer">
                Freedom Mobile
            </a>
            </li>
            <li>
            <a href="https://studiobonnet.com/little-burgundy-ss26-1" className="underline" target="_blank" rel="noopener noreferrer">
                Little Burgundy
            </a>
            </li>
            <li>
                <a href="https://youtu.be/zApE5Yw4WAM?si=J-iCHJSBImjUz0At" className="underline" target="_blank" rel="noopener noreferrer">
                    L'equipeur
                </a>
            </li>
        </ul>
    </>)

  return (
    <ProjectPage
      nav={<OtherWorkNav />}
      images={setImages}
      slides={1}
      translationKey="projects.setTechnician"
    >
        <div className="flex flex-row gap-x-8 pt-8">
            <div className="flex-1">
            {doubledContent}
            </div>
            <div className="hidden md:flex flex-col flex-1">
            {doubledContent}
            </div>
        </div>
    </ProjectPage>
  );
}
