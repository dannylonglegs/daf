import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useState } from "react";

const linkClasses =
  "relative inline-block whitespace-nowrap z-20 p-0.5 transform hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer mr-3";

const workLinks = [
  // { to: "/maggie-peach", label: "Maggie Peach" },
  { to: "/playworkgroup", label: "PlayWorkGroup" },
  { to: "/ette", label: "Ette" },
  { to: "/material-matters", label: "Material Matters" },
  { to: "/danse-cite", label: "Danse-Cité" },
];

export default function WorkNav() {
  const [numbers] = useState<number[]>(() => randomNumbers(workLinks.length));

  return (
    <motion.div layout layoutId="worknav" className="flex flex-row justify-between">
      <motion.div className="flex flex-col flex-wrap">
        <motion.h1 
          className="font-bold" 
          // initial={{ opacity: 0, y: 0 }} 
          // animate={{ opacity: 1, y: 0 }} 
          // transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >Selected Coding Work:</motion.h1>
        {workLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            style={{ "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties}
            className={`${linkClasses} hover:rotate-[var(--tw-rotate)]`}
            // className={({ isActive }) =>
            //   `${linkClasses} hover:rotate-[var(--tw-rotate)] ${
            //     isActive ? "text-white" : ""
            //   }`
            // }
          >
            {/* {({ isActive }) => (
              <>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 bg-blue-500 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative">→ {label}</span>
              </>
            )} */}
            → {label}
          </NavLink>
        ))}
      </motion.div>
    </motion.div>
  );
}