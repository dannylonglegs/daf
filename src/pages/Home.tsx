import { motion } from "framer-motion";
import WorkNav from "../components/WorkNav";
import { useState } from "react";
import { randomNumbers } from "../lib/functions";
import { useLocale } from "../lib/useLocale";
import OtherWorkNav from "../components/OtherWorkNav";


export default function Home() {
    const [numbers] = useState<number[]>(() => randomNumbers(10));
    const { t } = useLocale();

  return (
      <div  className="flex flex-col m-4">
        {/* <motion.header
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          <img className=" md:max-w-[25%] transition-all duration-200 cursor-pointer" src="/daf-copy.jpg" alt="Header Image" />
        </motion.header> */}
        <div className="flex flex-row gap-x-8">
          <motion.p
            className=" mb-12 flex-1"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          >
              <span 
              style={{ '--tw-rotate': `${numbers[0]}deg` } as React.CSSProperties} 
              className={`hover:bg-red-500 hover:cursor-wait hover:rotate-[var(--tw-rotate)] hover:text-white inline-block transition-all duration-200`}>
                <h1 className="font-bold">Daniel Alexander Fernandes</h1>
              </span>{" "}
              {t("home.tagline")} 
          </motion.p>
          <motion.p
            className=" mb-24 flex-1"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          >
              <span 
              style={{ '--tw-rotate': `${numbers[1]}deg` } as React.CSSProperties} 
              className={`hover:bg-red-500 hover:cursor-wait hover:rotate-[var(--tw-rotate)] hover:text-white inline-block transition-all duration-200`}>
                <h1 className="font-bold">Daniel Alexander Fernandes</h1>
              </span>{" "}
               {t("home.taglineOpposite")}
          </motion.p>
        </div>
        <WorkNav />
        <OtherWorkNav />
      </div>
  );
}
