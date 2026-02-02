export const Footer = () => {
    return (
        <footer className="flex flex-row w-full justify-between " >
            <nav className="flex flex-row text-2xl ">
                {/* <a href="">Email</a> */}
                <a href="" className="hover:blur-[2px] transition-all">Contact</a>
            </nav>
            <p className="justify-self-center">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};