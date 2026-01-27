import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <div className="h-dvh w-full overflow-hidden flex flex-col">
      <div className="flex flex-col flex-1 min-h-0 m-4">
        <Link to="/maggie-peach">Maggie Peach</Link>

        <div className="z-[10] flex-1 min-h-0 overflow-y-hidden pt-2 font-sans md:w-[60%]">
          <p className="text-2xl md:text-4xl transition-all duration-200">
            <span className="underline underline-offset-4 active:blur-[3px] md:hover:blur-[3px] transition-all duration-200 cursor-pointer">
              Daniel Alexander Fernandes
            </span>{" "}
            is a front-end engineer and creative coder working in web design and
            development, with a background in fine arts. Currently open for work.
          </p>
        </div>
      </div>
    </div>
  );
}
