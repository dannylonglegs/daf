import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import MaggiePeach from "./pages/MaggiePeach";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/maggie-peach"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
            >
              <MaggiePeach />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
