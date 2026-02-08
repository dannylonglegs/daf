import { motion } from "framer-motion";
import WorkNav from "../components/WorkNav";


export default function Home() {

  return (
      <div  className="flex flex-col m-4">
        <motion.header
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          <img className="scale-[110%] md:max-w-[50%] hover:blur-[.5px] transition-all duration-200 cursor-pointer" src="/hd007.png" alt="Header Image" />
        </motion.header>
        <motion.p
          className="text-2xl mb-24 max-w-[700px]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5, ease: "easeOut" }}
        >
            <span className="active:blur-[2px] md:hover:blur-[2px] transition-all duration-200">
              Daniel Alexander Fernandes
            </span>{" "}
            is a front-end engineer and creative coder working in web design and
            development, with a background in fine arts. Currently open for work.
        </motion.p>
        <motion.h1 
          className="text-2xl mb-2" 
          initial={{ opacity: 0, y: 0 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >Selected Work:</motion.h1>
        <WorkNav />
      </div>
  );
}
