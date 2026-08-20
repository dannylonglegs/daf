import { useEffect, useRef } from "react";

type Props = { sliderValue: number };

export default function CanvasFilter({ sliderValue }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const w = canvas.width;
      const h = canvas.height;

      const angle = (sliderValue * Math.PI) / 180;
      const dx = Math.cos(angle);
      const dy = Math.sin(angle);
      const len = Math.hypot(w, h) / 2;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      const grd = ctx.createLinearGradient(
        cx - dx * len, cy - dy * len,
        cx + dx * len, cy + dy * len
      );
      grd.addColorStop(0,   "rgba(255, 255, 255, 0.45)");
      grd.addColorStop(0.5, "rgba(128, 128, 128, 0)");
      grd.addColorStop(1,   "rgba(0, 0, 0, 0.45)");

      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);
    });
  }, [sliderValue]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "overlay",
      }}
    />
  );
}
