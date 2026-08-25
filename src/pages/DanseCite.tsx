import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";
import { useLocale } from "../lib/useLocale";

const danseCiteImages: string[] = [
  "/dc/dc001.png",
  "/dc/dc002.png",
  "/dc/dc003.png",
  "/dc/dc004.png",
  "/dc/dc005.png",
  "/dc/dc006.png",
  "/dc/dc007.png",
  "/dc/dc008.png",
];

export default function DanseCite() {
  const { t } = useLocale();
  return (
    <PageLayout nav={<WorkNav />} images={danseCiteImages} slides={2}>
      <div className="flex flex-row gap-x-8">
        <div className="flex-1">
        <h2 className=" "> {t("code.danseCiteTitle")} </h2>
          <p>
          {t("code.danseCiteDescription")}
          </p>
          </div>
        <div className="flex-1">
          <h2 className=" "> {t("code.danseCiteTitleOpposite")} </h2>
          <p>
          {t("code.danseCiteDescriptionOpposite")}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
