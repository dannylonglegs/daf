import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";

import Home from "./pages/Home";
import MaggiePeach from "./pages/MaggiePeach";
import DanseCite from "./pages/DanseCite";
import PlayWorkGroup from "./pages/PlayWorkGroup";
import Ette from "./pages/Ette";
import MaterialMatters from "./pages/MaterialMatters";
import Ermitage from "./pages/Ermitage";
import Eolith from "./pages/Eolith";
import AppLayout from "./AppLayout";
import Art from "./pages/Art";
import SetTechnician from "./pages/SetTechnician";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
    <LayoutGroup id="app">
      <AnimatePresence mode="wait" presenceAffectsLayout={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/maggie-peach" element={<MaggiePeach />} />
            <Route path="/playworkgroup" element={<PlayWorkGroup />} />
            <Route path="/ette" element={<Ette />} />
            <Route path="/material-matters" element={<MaterialMatters />} />
            <Route path="/danse-cite" element={<DanseCite />} />
            <Route path="/personal-artwork" element={<Art />} />
            <Route path="/ermitage-308" element={<Ermitage />} />
            <Route path="/eolith" element={<Eolith />} />
            <Route path="/set-technician" element={<SetTechnician />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </LayoutGroup>
    </>
  );
}
