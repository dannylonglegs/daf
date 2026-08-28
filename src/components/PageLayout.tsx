import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Swiper from "../components/Swiper";
import { motion, AnimatePresence } from "framer-motion";
import Thumbnails from "./Thumbnails";

type Props = {
  nav: ReactNode;
  images: string[];
  slides: number;
  children: ReactNode;
};

export default function PageLayout({ nav, images, slides, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openAt = (idx: number) => {
    setStartIndex(idx);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

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
    <div className="flex flex-col h-full min-h-0 p-4">
      {nav}

      <motion.div
        className="flex flex-col flex-1 min-h-0 overflow-y-auto z-0 pb-8 no-scrollbar"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
        <section>{children}</section>
        <section className="flex flex-row gap-x-8" >
          <div className="flex-1">
            <Thumbnails images={images} onSelect={openAt} hoveredIndex={hoveredIndex} onHoverChange={setHoveredIndex} />
          </div>
          <div className="hidden md:flex flex-col flex-1">
            <Thumbnails images={images} onSelect={openAt} hoveredIndex={hoveredIndex} onHoverChange={setHoveredIndex} />
          </div>
        </section>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] pointer-events-auto">
            <motion.div
              className="fixed inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.div
              className="fixed bg-white/90 inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-full max-w-[1100px] max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="">
                  <Swiper
                    key={`${isOpen}-${startIndex}`}
                    images={images}
                    slidesPerView={slides? slides : 2}
                    spaceBetween={16}
                    onClose={close}
                    initialSlide={startIndex}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      768: { slidesPerView: slides ? slides : 2 },
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}