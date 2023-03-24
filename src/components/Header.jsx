import Nav from "./Nav"
import bgDesktop from '../assets/images/bg-pattern-intro-desktop.svg'
const Header = () => {
    return (
        <header id="header" className={`max-[768px]:h-[80vh] h-[90vh] md:px-20 px-10 py-10 bg-gradient-l white-text rounded-bl-[100px]`}
            style={{
                backgroundImage: `url('${bgDesktop}')`,
                backgroundSize: 'auto',
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Nav />
            <div className="md:mt-32 mt-24 text-center w-full flex flex-col items-center justify-center">
                <h1 className="md:text-5xl text-3xl mb-7 font-bold max-[862px]:text-center">A modern publishing platform</h1>
                <h6 className="text-slate-200">Grow your audience and build your online brand</h6>
                <div className="mt-16 max-md:flex max-md:flex-col">
                    <a href="#!" className="px-8 py-5 font-bold md:mr-5 max-md:mb-5 rounded-full bg-[#ffffff47] hover:bg-white hover:text-primary">Start for Free</a>
                    <a href="#!" className="px-8 py-5 font-bold rounded-full bg-[#ffffff47] hover:bg-white hover:text-primary">Learn More</a>
                </div>
            </div>
        </header>
    )
}

export default Header