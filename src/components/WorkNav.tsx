import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useState } from "react";
import { useLocale } from "../lib/useLocale";
import type { TranslationKey } from "../lib/i18n";

const linkClasses =
  "relative inline-block whitespace-nowrap z-20 p-0.5 transform transition-all duration-200 mr-3";

const workLinks = [
  { to: "/maggie-peach", label: "Maggie Peach" },
  { to: "/playworkgroup", label: "PlayWorkGroup" },
  { to: "/ette", label: "Ette" },
  { to: "/material-matters", label: "Material Matters" },
  { to: "/danse-cite", label: "Danse-Cité" },
];

export default function WorkNav() {
  const [numbers] = useState<number[]>(() => randomNumbers(workLinks.length));
  const [hoveredTo, setHoveredTo] = useState<string | null>(null);
  const { t } = useLocale();

  const renderColumn = (titleKey: TranslationKey, className = "") => (
    <motion.div className={`flex flex-col flex-wrap flex-1 items-start ${className}`}>
      <motion.h1 className="font-bold">{t(titleKey)}</motion.h1>
      {workLinks.map(({ to, label }, i) => (
  <NavLink
    key={to}
    to={to}
    onMouseEnter={() => setHoveredTo(to)}
    onMouseLeave={() => setHoveredTo(null)}
    style={{ "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties}
    className={({ isActive }) => {
      const isHovered = hoveredTo === to;
      
      return `${linkClasses} ${
        isActive
          ? isHovered
            ? "cursor-not-allowed"
            : ""
          : isHovered
          ? "bg-red-500 text-white cursor-pointer rotate-[var(--tw-rotate)]"
          : ""
      }`;
    }}
  >
    → {label}
  </NavLink>
))}
    </motion.div>
  );

  return (
    <motion.div
      layout
      layoutId="worknav"
      className="flex flex-row gap-x-8 mb-8 "
      // initial={isFirstMount ? { opacity: 0 } : false}
      // animate={{ opacity: 1 }}
      // transition={{ delay: isFirstMount ? 1 : 0, duration: 0.5, ease: "easeOut" }}
    >
      {renderColumn("home.selectedWork")}
      {renderColumn("home.selectedWorkOpposite", "hidden md:flex")}
    </motion.div>
  );
}