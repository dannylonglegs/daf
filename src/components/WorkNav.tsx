import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useEffect, useState } from "react";
import { useLocale } from "../lib/useLocale";

const linkClasses =
  "relative inline-block whitespace-nowrap z-20 p-0.5 transform hover:bg-red-500 hover:text-yellow-200 transition-all duration-200 cursor-pointer mr-3";

const workLinks = [
  // { to: "/maggie-peach", label: "Maggie Peach" },
  { to: "/playworkgroup", label: "PlayWorkGroup" },
  { to: "/ette", label: "Ette" },
  { to: "/material-matters", label: "Material Matters" },
  { to: "/danse-cite", label: "Danse-Cité" },
];

let hasWorkNavAppeared = false;

export default function WorkNav() {
  const [numbers] = useState<number[]>(() => randomNumbers(workLinks.length));
  const { t } = useLocale();
  const isFirstMount = !hasWorkNavAppeared;

  useEffect(() => {
    hasWorkNavAppeared = true;
  }, []);

  return (
    <motion.div
      layout
      layoutId="worknav"
      className="flex flex-row gap-x-8 mb-8"
      initial={isFirstMount ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ delay: isFirstMount ? 1 : 0, duration: 0.5, ease: "easeOut" }}
    >
      <motion.div className="flex flex-col flex-wrap flex-1 items-start">
        <motion.h1 className="font-bold">{t("home.selectedWork")}</motion.h1>
        {workLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            style={{ "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties}
            className={`${linkClasses} hover:rotate-[var(--tw-rotate)]`}
          >
            → {label}
          </NavLink>
        ))}
      </motion.div>
      <motion.div className="hidden md:flex flex-col flex-wrap flex-1 items-start">
        <motion.h1 className="font-bold">{t("home.selectedWorkOpposite")}</motion.h1>
        {workLinks.map(({ to, label }, i) => (
          <NavLink
            key={to}
            to={to}
            style={{ "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties}
            className={`${linkClasses} hover:rotate-[var(--tw-rotate)]`}
          >
            → {label}
          </NavLink>
        ))}
      </motion.div>
    </motion.div>
  );
}