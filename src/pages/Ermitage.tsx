import ProjectPage from "../components/ProjectPage";
import OtherWorkNav from "../components/OtherWorkNav";

const ermitageImages: string[] = [
  "/ermitage/001.jpg",
  "/ermitage/002.jpg",
  "/ermitage/003.jpg",
  "/ermitage/004.jpg",
  "/ermitage/005.jpg",
  "/ermitage/006.jpg",
  "/ermitage/007.jpg",
  "/ermitage/008.jpg",
  "/ermitage/009.jpg",
  "/ermitage/010.jpg",
  "/ermitage/011.jpg",
  "/ermitage/012.jpg",
  "/ermitage/013.jpg",
  "/ermitage/014.jpg",
];

export default function Ermitage() {
  return (
    <ProjectPage
      nav={<OtherWorkNav />}
      images={ermitageImages}
      slides={1}
      translationKey="projects.ermitage"
      link="https://www.ermitage308.com/"
    />
  );
}