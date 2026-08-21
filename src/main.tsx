import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
// import GifOverlay from "./GifOverlay";
import { MouseProvider } from "./context/MouseContext";
import "./index.css";
import { LocaleProvider } from "./lib/LocaleProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <BrowserRouter>
      <LocaleProvider>
      <MouseProvider>
        {/* <GifOverlay /> */}
        <AnimatedRoutes />
      </MouseProvider>
      </LocaleProvider>
      </BrowserRouter>

  </StrictMode>
);
