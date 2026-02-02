import { Outlet } from "react-router-dom";
import SVGFilter from "./Filter";
import { useNormalizedMouse } from "./context/MouseContext";
import { Footer } from "./components/Footer";

export default function AppLayout() {
  const { normalizedX, normalizedY } = useNormalizedMouse();

  return (
    <>
    <SVGFilter sliderValue={normalizedX} normalizedY={normalizedY} />
    <main
      className="page-wrapper"
      style={{ filter: "url(#glow)", backgroundColor: "grey" }}
    >
    <div className="flex-1">      
        <Outlet />
    </div>
        <Footer />
    </main>
    </>
  );
}
