import { Outlet } from "react-router-dom";
// import SVGFilter from "./Filter";
// import { useNormalizedMouse } from "./context/MouseContext";
import { Footer } from "./components/Footer";

export default function AppLayout() {
  // const { normalizedX, normalizedY } = useNormalizedMouse();

  return (
    <>
      {/* <SVGFilter sliderValue={normalizedX} normalizedY={normalizedY} /> */}

      <main className="page-wrapper relative">
        
        {/* Filter applied to an inner div, not the layout container */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full flex flex-col"
            // style={{ filter: "url(#glow)", backgroundColor: "grey" }}
          >
            <div className="flex-1 min-h-0">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>

        <div
          // id="no-filter-layer"
          className="absolute inset-0 z-10 pointer-events-none"
        />
      </main>
    </>
  );
}