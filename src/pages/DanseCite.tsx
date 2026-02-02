import Swiper from "../components/Swiper";
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
    <div className="flex flex-col">
      <WorkNav />
      <div>
        <h1 className="text-4xl">Danse-Cité</h1>
            <Swiper
            images={danseCiteImages}
            slidesPerView={2}
            spaceBetween={50}
            className="excluded-component"
            />
      </div>
    </div>
  );
}