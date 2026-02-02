import { motion } from "framer-motion";

export default function GifOverlay({ version }: { version: number }) {
  return (
    <motion.img
      key={version} 
      src={`/smoketransition.gif?v=${version}`}
      alt=""
      draggable={false}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: .25, 
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
