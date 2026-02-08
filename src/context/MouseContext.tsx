import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

type MousePosition = { x: number; y: number };
type Normalized = { normalizedX: number; normalizedX2: number; normalizedY: number };

type MouseContextValue = {
  mouse: MousePosition;
  viewport: { w: number; h: number };
  normalized: Normalized;
};

const MouseContext = createContext<MouseContextValue | undefined>(undefined);

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 1,
    h: typeof window !== "undefined" ? window.innerHeight : 1,
  }));

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setMouse({ x: event.clientX, y: event.clientY });
    };

    const onResize = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const normalized = useMemo<Normalized>(() => {
    const w = Math.max(1, viewport.w);
    const h = Math.max(1, viewport.h);

    return {
      normalizedX: (mouse.x / w) * 100,
      normalizedX2: (mouse.x / w) * 3,
      normalizedY: (mouse.y / h) * 5,
    };
  }, [mouse.x, mouse.y, viewport.w, viewport.h]);

  const value = useMemo<MouseContextValue>(
    () => ({ mouse, viewport, normalized }),
    [mouse, viewport, normalized]
  );

  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
}

export function useMouse() {
  const ctx = useContext(MouseContext);
  if (!ctx) throw new Error("useMouse must be used within MouseProvider");
  return ctx.mouse;
}

export function useNormalizedMouse() {
  const ctx = useContext(MouseContext);
  if (!ctx) throw new Error("useNormalizedMouse must be used within MouseProvider");
  return ctx.normalized;
}
