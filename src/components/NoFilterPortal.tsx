import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  className?: string; // applied to the portaled mount element
  placeholderClassName?: string; // applied to the in-flow placeholder
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

      // IMPORTANT: don't force height from placeholder (often 0px)
      // Let content determine height.
      m.style.height = "";
    };

    updatePosition();

    const ro = new ResizeObserver(updatePosition);
    ro.observe(placeholderRef.current);

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
      {/* This defines the measured box. Control width/max-width/centering here. */}
      <div ref={placeholderRef} className={placeholderClassName} />
      {mount ? createPortal(children, mount) : null}
    </>
  );
}
