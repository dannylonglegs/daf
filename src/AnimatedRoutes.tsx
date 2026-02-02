import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";

import Home from "./pages/Home";
import MaggiePeach from "./pages/MaggiePeach";
import DanseCite from "./pages/DanseCite";
import AppLayout from "./AppLayout";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
    <LayoutGroup id="app">
      <AnimatePresence mode="wait" presenceAffectsLayout={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/maggie-peach"
              element={
                <MaggiePeach />
              }
            />
            <Route
              path="/danse-cite"
              element={
                <DanseCite />
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </LayoutGroup>
    </>
  );
}
