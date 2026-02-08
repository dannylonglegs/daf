import { motion } from "framer-motion";
import { 
  Link, 
  // useLocation 
} from "react-router-dom";

const linkClasses =
  "inline-block whitespace-nowrap z-20 bg-white p-1 text-2xl transform hover:blur-[1px] transition-all duration-200 cursor-pointer mr-3";

export default function WorkNav() {
  // const location = useLocation();
  // const isHome = location.pathname === "/";

  return (
    <motion.div
      layout
      layoutId="worknav"
      className="flex flex-row justify-between"
    >
      <motion.div 
        className="flex flex-row flex-wrap items-center gap-y-2"
        >
        {/* <Link to="/maggie-peach" className={linkClasses}>→ Maggie Peach</Link> */}
        <Link to="/playworkgroup" className={linkClasses}>→ PlayWorkGroup</Link>
        <Link to="/ette" className={linkClasses}>→ Ette</Link>
        <Link to="/material-matters" className={linkClasses}>→ Material Matters</Link>
        <Link to="/danse-cite" className={linkClasses}>→ Danse-Cité</Link>
      </motion.div>

      {/* {!isHome && (
        <motion.div
          key="home-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
          className="shrink-0"
        >
          <Link
            to="/"
            className="inline-block whitespace-nowrap p-1 text-2xl bg-white transform hover:blur-[2px] transition-all duration-200 cursor-pointer"
          >
            ↺
          </Link>
        </motion.div>
      )} */}
    </motion.div>
  );
}
