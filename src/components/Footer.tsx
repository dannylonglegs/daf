import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex flex-row w-full justify-between p-4" >
            <nav className="flex flex-row text-2xl gap-x-6">
                {/* <a href="">Email</a> */}
                <Link to="/" className="hover:blur-[2px] transition-all">Home</Link>
                <Link to="/contact" className="hover:blur-[2px] transition-all">Contact</Link>
                <Link to="/linkedin" className="hover:blur-[2px] transition-all">LinkedIn</Link>
                <Link to="/github" className="hover:blur-[2px] transition-all">GitHub</Link>
            </nav>
            <p className="my-auto">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};