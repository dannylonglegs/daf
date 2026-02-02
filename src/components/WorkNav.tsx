import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const linkClasses = "inline-block bg-white p-1 text-2xl transform hover:translate-x-2 transition-all duration-200 cursor-pointer mr-3";

export default function WorkNav() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    return (
        <motion.div   
            layout
            layoutId="worknav" 
            // initial={{ opacity: 0, y: 48 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: 0 }}
            // transition={{ delay: .6, duration: 0.3, ease: "easeOut" }}   
            className="">
            <div 
              className="flex flex-row">
              {!isHome && (
                <motion.div
                  key="home-link"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                <Link to="/" className={"inline-block p-1 text-2xl transform hover:blur-[2px] transition-all duration-200 cursor-pointer mr-2"}>
                  ↺ 
                </Link>
              </motion.div> )}
              <Link to="/maggie-peach" className={linkClasses}>→ Maggie Peach</Link>
              <Link to="/maggie-peach" className={linkClasses}>→ PlayWorkGroup</Link>
              <Link to="/maggie-peach" className={linkClasses}>→ Ette</Link>
              <Link to="/maggie-peach" className={linkClasses}>→ Material Matters</Link>
              <Link to="/danse-cite" className={linkClasses}>→ Danse-Cité</Link>
            </div>
          </motion.div >
    );
}