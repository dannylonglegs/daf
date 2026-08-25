import PageLayout from "../components/PageLayout";
import OtherWorkNav from "../components/OtherWorkNav";
import { useLocale } from "../lib/useLocale";

const eolithImages: string[] = [
  "/eolith/001.webp",
  "/eolith/002.webp",
  "/eolith/003.webp",
  "/eolith/004.webp",
  "/eolith/005.webp",
  "/eolith/006.webp",
  "/eolith/007.webp",
  "/eolith/008.webp",
  "/eolith/009.webp",
  "/eolith/010.webp",
  "/eolith/011.webp",
  "/eolith/012.webp",
  "/eolith/013.webp",
  "/eolith/014.webp",
  "/eolith/015.webp",
  "/eolith/016.webp",
  "/eolith/017.webp",
  "/eolith/018.webp",
  "/eolith/019.webp",
  "/eolith/020.webp",
];

export default function Eolith() {
  const { t } = useLocale();
  return (
    <PageLayout
      nav={<OtherWorkNav />}
      images={eolithImages}
      slides={1}
    >
      <div className="flex flex-row gap-x-8">
        <div className="flex-1">
          <h2>{t("projects.eolithTitle")}</h2>
          <p className="whitespace-pre-line">
            {t("projects.eolithDescription")}
          </p>
        </div>
        <div className="flex-1">
          <h2>{t("projects.eolithTitleOpposite")}</h2>
          <p className="whitespace-pre-line">
            {t("projects.eolithDescriptionOpposite")}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}