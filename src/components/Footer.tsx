export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex flex-row w-full justify-between p-4" >
            <nav className="flex flex-row text-2xl ">
                {/* <a href="">Email</a> */}
                <a href="" className="hover:blur-[2px] transition-all">Contact</a>
            </nav>
            <p className="justify-self-center">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};