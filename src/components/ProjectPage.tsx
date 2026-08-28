import type { ReactNode } from "react";
import PageLayout from "./PageLayout";
import { useLocale } from "../lib/useLocale";
import type { ProjectKey } from "../lib/i18n";

type ProjectPageProps = {
  nav: ReactNode;
  images: string[];
  slides: number;
  translationKey: ProjectKey;
  link?: string;
  children?: ReactNode;
};

export default function ProjectPage({
  nav,
  images,
  slides,
  translationKey,
  children,
  link,
}: ProjectPageProps) {
  const { project } = useLocale();
  const {
    title,
    titleOpposite,
    description,
    descriptionOpposite,
    linkLabel,
    linkLabelOpposite,
  } = project(translationKey);

  return (
    <PageLayout nav={nav} images={images} slides={slides}>
      <div className="flex flex-row gap-x-8 pt-8">
        <div className="flex-1">
          <h2 className="font-bold pb-4">{title}</h2>
          <p className="whitespace-pre-line max-w-[600px]">{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 hover:bg-red-500 hover:text-white"
            >
              → {linkLabel}
            </a>
          )}
        </div>
        <div className="hidden md:flex flex-col flex-1">
          <h2 className="font-bold pb-4">{titleOpposite}</h2>
          <p className="max-w-[600px] whitespace-pre-line">{descriptionOpposite}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-block mt-4 hover:bg-red-500 hover:text-white"
            >
              → {linkLabelOpposite}
            </a>
          )}
        </div>
      </div>
      {children}
    </PageLayout>
  );
}