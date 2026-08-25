import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";
import { useLocale } from "../lib/useLocale";

const materialMattersImages: string[] = [
  "/mm/mm001.png",
  "/mm/mm002.png",
  "/mm/mm003.png",
  "/mm/mm004.png",
  "/mm/mm005.png",
];

export default function MaterialMatters() {
  const { t } = useLocale();
  return (
    <PageLayout 
      nav={<WorkNav />}
      images={materialMattersImages}
      slides={2}
    >
      <div className="flex flex-row gap-x-8">
        <div className="flex-1">
          <h2>{t("code.materialMattersTitle")}</h2>
            <p className="whitespace-pre-line">
            {t("code.materialMattersDescription")}
            </p>
        </div>
        <div className="flex-1">
          <h2>{t("code.materialMattersTitle")}</h2>
            <p className="whitespace-pre-line">
            {t("code.materialMattersDescription")}
            </p>
        </div>
      </div>
    </PageLayout>
  );
}
