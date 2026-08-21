import { motion } from "framer-motion";
import WorkNav from "../components/WorkNav";
import { useState } from "react";
import { randomNumbers } from "../lib/functions";

export default function Home() {
    const [numbers] = useState<number[]>(() => randomNumbers(10));

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
            className=" mb-12"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          >
              <span 
              style={{ '--tw-rotate': `${numbers[0]}deg` } as React.CSSProperties} 
              className={`hover:bg-blue-500 hover:cursor-wait hover:rotate-[var(--tw-rotate)] hover:text-white inline-block transition-all duration-200`}>
                <h1 className="font-bold">Daniel Alexander Fernandes</h1>
              </span>{" "}
              is a front-end engineer and creative coder working in web design and
              development, with a background in fine arts. Currently open for work.
          </motion.p>
          <motion.p
            className=" mb-24 max-w-[700px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
          >
              <span 
              style={{ '--tw-rotate': `${numbers[1]}deg` } as React.CSSProperties} 
              className={`hover:bg-blue-500 hover:cursor-wait hover:rotate-[var(--tw-rotate)] hover:text-white inline-block transition-all duration-200`}>
                <h1 className="font-bold">Daniel Alexander Fernandes</h1>
              </span>{" "}
               est un ingénieur front-end et un codeur créatif spécialisé dans la conception et le développement Web, issu du milieu des beaux-arts. Il est actuellement à la recherche de projets.
          </motion.p>
        </div>
        <WorkNav />
      </div>
  );
}
