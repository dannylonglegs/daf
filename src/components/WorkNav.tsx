import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useEffect, useState } from "react";
import { useLocale } from "../lib/useLocale";
import type { TranslationKey } from "../lib/i18n";

const linkClasses =
  "relative inline-block whitespace-nowrap z-20 p-0.5 transform transition-all duration-200 cursor-pointer mr-3";

const workLinks = [
  { to: "/playworkgroup", label: "PlayWorkGroup" },
  { to: "/ette", label: "Ette" },
  { to: "/material-matters", label: "Material Matters" },
  { to: "/danse-cite", label: "Danse-Cité" },
];

let hasWorkNavAppeared = false;

export default function WorkNav() {
  const [numbers] = useState<number[]>(() => randomNumbers(workLinks.length));
  const [hoveredTo, setHoveredTo] = useState<string | null>(null);
  const { t } = useLocale();
  const isFirstMount = !hasWorkNavAppeared;

  useEffect(() => {
    hasWorkNavAppeared = true;
  }, []);

  const renderColumn = (titleKey: TranslationKey, className = "") => (
    <motion.div className={`flex flex-col flex-wrap flex-1 items-start ${className}`}>
      <motion.h1 className="font-bold">{t(titleKey)}</motion.h1>
      {workLinks.map(({ to, label }, i) => {
        const isHovered = hoveredTo === to;
        return (
          <NavLink
            key={to}
            to={to}
            onMouseEnter={() => setHoveredTo(to)}
            onMouseLeave={() => setHoveredTo(null)}
            style={{ "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties}
            className={`${linkClasses} ${
              isHovered ? "bg-stone-400 text-yellow-200 rotate-[var(--tw-rotate)]" : ""
            }`}
          >
            → {label}
          </NavLink>
        );
      })}
    </motion.div>
  );

  return (
    <motion.div
      layout
      layoutId="worknav"
      className="flex flex-row gap-x-8 mb-8 "
      initial={isFirstMount ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ delay: isFirstMount ? 1 : 0, duration: 0.5, ease: "easeOut" }}
    >
      {renderColumn("home.selectedWork")}
      {renderColumn("home.selectedWorkOpposite", "hidden md:flex")}
    </motion.div>
  );
}