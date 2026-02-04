import { ReactNode, useEffect, useState } from "react";
import NoFilterPortal from "../components/NoFilterPortal";
import Swiper from "../components/Swiper";
import WorkNav from "../components/WorkNav";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title: string;
  images: string[];
  children: ReactNode;
};

export default function WorkPageLayout({ title, images, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

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
      <WorkNav />

      <motion.div
        className="flex flex-col flex-1 min-h-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      >
         <h1 className="text-4xl pt-4">{title}</h1>
        <section className=" min-h-0 overflow-y-auto">
            {children}
        </section>

        <div className="mb-10 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-w-[900px]">
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => openAt(idx)}
              className="aspect-square overflow-hidden border border-white/40 cursor-pointer hover:blur-[1px] transition"
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
                    key={`${isOpen}-${startIndex}`}
                    images={images}
                    slidesPerView={2}
                    spaceBetween={16}
                    onClose={close}
                    initialSlide={startIndex}
                    breakpoints={{
                        0:   { slidesPerView: 1},
                        768: { slidesPerView: 2 },
                    }}
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
