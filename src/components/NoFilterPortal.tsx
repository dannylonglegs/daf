import { useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  className?: string; 
  placeholderClassName?: string; 
};

export default function NoFilterPortal({
  children,
  className = "",
  placeholderClassName = "w-full",
}: Props) {
  const placeholderRef = useRef<HTMLDivElement | null>(null);
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const mountElRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const root = document.getElementById("no-filter-layer");
    if (!root) return;

    const el = document.createElement("div");
    el.style.position = "absolute";
    el.style.pointerEvents = "auto";
    el.className = className;

    root.appendChild(el);
    mountElRef.current = el;
    setMount(el);

    const updatePosition = () => {
      const ph = placeholderRef.current;
      const m = mountElRef.current;
      if (!ph || !m) return;

      const rect = ph.getBoundingClientRect();

      m.style.left = `${rect.left}px`;
      m.style.top = `${rect.top}px`;
      m.style.width = `${rect.width}px`;
      m.style.height = "";
    };

    updatePosition();

    const ro = new ResizeObserver(updatePosition);
    const ph = placeholderRef.current;
    if (ph) ro.observe(ph);

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      ro.disconnect();
      root.removeChild(el);
      mountElRef.current = null;
      setMount(null);
    };
  }, [className]);

  return (
    <>
      <div ref={placeholderRef} className={placeholderClassName} />
      {mount ? createPortal(children, mount) : null}
    </>
  );
}
