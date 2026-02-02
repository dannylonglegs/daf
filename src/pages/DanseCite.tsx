import { useEffect, useState } from "react";
import NoFilterPortal from "../components/NoFilterPortal";
import Swiper from "../components/Swiper";
import WorkNav from "../components/WorkNav";
import { motion, AnimatePresence } from "framer-motion";

const danseCiteImages: string[] = [
  "/dc/dc001.png",
  "/dc/dc002.png",
  "/dc/dc003.png",
  "/dc/dc004.png",
  "/dc/dc005.png",
  "/dc/dc006.png",
  "/dc/dc007.png",
  "/dc/dc008.png",
];

export default function DanseCite() {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openAt = (idx: number) => {
    setStartIndex(idx);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  // ESC to close + lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col h-full min-h-0 m-4">
      <WorkNav />

      <motion.div
        className="mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
      >
        <motion.h1 className="text-3xl pb-4">Danse-Cité</motion.h1>

        <div className="text-lg space-y-4 max-w-[700px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et dignissim libero, at eleifend augue...
          </p>
        </div>
        <div className="mt-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-w-[900px]">
          {danseCiteImages.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(idx)}
              className="aspect-square overflow-hidden border border-white/40 hover:blur-[1px] transition"
            >
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <NoFilterPortal
            className="fixed inset-0 z-[9999] pointer-events-auto"
            placeholderClassName="w-0 h-0"
          >
            <motion.div
              className="fixed inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-full max-w-[1100px]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* <button
                  type="button"
                  onClick={close}
                  className="mb-2 inline-block bg-white px-3 py-1 text-black hover:bg-white transition"
                >
                  X
                </button> */}

                <div className="">
                  <Swiper
                    images={danseCiteImages}
                    slidesPerView={2}
                    spaceBetween={50}
                    // initialSlide={startIndex}
                  />
                </div>
              </div>
            </motion.div>
          </NoFilterPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
