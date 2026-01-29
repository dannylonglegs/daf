export default function GifOverlay() {
  return (
    <img
      src="/smoketransition.gif"
      alt=""
      draggable={false}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 1,
      }}
    />
  );
}
