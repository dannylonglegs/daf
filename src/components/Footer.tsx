import { Link } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const linkClasses = "transition-all";

type FooterLink = {
  to: string;
  label: string;
  external: boolean;
};

const footerLinks: FooterLink[] = [
  { to: "/", label: "Home", external: false },
  { to: "mailto:ddanfernan@gmail.com", label: "Contact", external: true },
  { to: "https://www.linkedin.com/in/daniel-fernandes-179bb2196/", label: "LinkedIn", external: true },
  // { to: "/github", label: "GitHub", external: false },
];

export const Footer = () => {
  const [numbers] = useState<number[]>(() => randomNumbers(footerLinks.length));
  const [hoveredTo, setHoveredTo] = useState<string | null>(null);

  const renderNav = (className = "") => (
    <nav className={`flex flex-row flex-1 justify-between w-auto gap-x-6 ${className}`}>
      <div className="flex flex-row w-auto gap-x-6">
        {footerLinks.map((link, i) => {
          const isHovered = hoveredTo === link.to;
          const style = { "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties;
          const linkClassName = `${linkClasses} ${
            isHovered ? "bg-red-500 text-white rotate-[var(--tw-rotate)]" : ""
          }`;

          const handlers = {
            onMouseEnter: () => setHoveredTo(link.to),
            onMouseLeave: () => setHoveredTo(null),
          };

          if (link.external) {
            return (
              <a
                key={link.to}
                href={link.to}
                style={style}
                className={linkClassName}
                {...handlers}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.to}
              to={link.to}
              style={style}
              className={linkClassName}
              {...handlers}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row gap-x-4">
        <LanguageSwitch />
        <p className="hidden md:block my-auto">&copy; {new Date().getFullYear()}</p>
      </div>
    </nav>
  );

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex gap-x-8 flex-row w-full p-4">
      {renderNav()}
      {renderNav("hidden md:flex")}
    </footer>
  );
};