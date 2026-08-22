import PageLayout from "../components/PageLayout";
import WorkNav from "../components/WorkNav";

const etteImages: string[] = [
  "/e/ette01.png",
  "/e/ette02.png",
  "/e/ette03.png",
  "/e/ette04.png",
  "/e/ette05.png",
  "/e/ette06.png",
];

export default function Ette() {
  return (
    <PageLayout 
      nav={<WorkNav />}
      images={etteImages}
    >
      <div className="flex flex-row gap-x-8">
        <div>
          <h1>Ette — Designer Portfolio</h1>
          <p>
              Portfolio site for Toronto-based furniture and interior designer Kate Richard.
          </p>
          <p>
              Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.
          </p>
        </div>
        <div>
          <h1>Ette — Designer Portfolio</h1>
          <p>
              Portfolio site for Toronto-based furniture and interior designer Kate Richard.
          </p>
          <p>
              Led UI/UX and developed the site with GatsbyJS and Contentful CMS. Built an infinite-scrolling, lazy-loaded gallery to handle a large volume of imagery while keeping performance smooth.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
