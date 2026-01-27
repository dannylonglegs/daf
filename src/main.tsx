import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import GifOverlay from "./GifOverlay";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GifOverlay />
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
