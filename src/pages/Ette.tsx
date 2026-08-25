import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";
import { useLocale } from "../lib/useLocale";

const etteImages: string[] = [
  "/e/ette01.png",
  "/e/ette02.png",
  "/e/ette03.png",
  "/e/ette04.png",
  "/e/ette05.png",
  "/e/ette06.png",
];

export default function Ette() {
  const { t } = useLocale();

  return (
    <PageLayout 
      nav={<WorkNav />}
      images={etteImages}
      slides={2}
    >
      <div className="flex flex-row gap-x-8">
        <div className="flex-1">
          <h1>{t("code.etteTitle")}</h1>
          <p className="whitespace-pre-line">
          {t("code.etteDescription")}
          </p>
        </div>
        <div className="hidden md:flex flex-col flex-1 ">
          <h1>{t("code.etteTitleOpposite")}</h1>
          <p className="whitespace-pre-line">
           {t("code.etteDescriptionOpposite")}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
