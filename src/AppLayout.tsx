import { Outlet } from "react-router-dom";
import SVGFilter from "./Filter";
import { useNormalizedMouse } from "./context/MouseContext";

export default function AppLayout() {
  const { normalizedX, normalizedY } = useNormalizedMouse();

  return (
    <main
      className="h-dvh w-full overflow-hidden flex flex-col"
      style={{ filter: "url(#glow)", backgroundColor: "grey" }}
    >
      <SVGFilter sliderValue={normalizedX} normalizedY={normalizedY} />
      <Outlet />
    </main>
  );
}
