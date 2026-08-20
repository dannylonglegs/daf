import { Link } from "react-router-dom";
import { randomNumbers } from "../lib/functions";
import { useState } from "react";

const linkClasses = "hover:bg-red-500 hover:text-white transition-all";

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

  return (
    <footer className="fixed bottom-0 left-0 right-0 flex flex-row w-full justify-between p-4">
      <nav className="flex flex-row justify-between w-full md:w-auto md:gap-x-6">
        {footerLinks.map((link, i) => {
          const style = { "--tw-rotate": `${numbers[i]}deg` } as React.CSSProperties;
          const className = `${linkClasses} hover:rotate-[var(--tw-rotate)]`;

          if (link.external) {
            return (
              <a key={link.to} href={link.to} style={style} className={className}>
                {link.label}
              </a>
            );
          }

          return (
            <Link key={link.to} to={link.to} style={style} className={className}>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <p className="hidden md:block my-auto">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
};