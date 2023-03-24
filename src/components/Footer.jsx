import { footerLinks } from '../consts'

const Footer = () => {
    return (
        <footer className="bg-footerBg md:h-[70vh] rounded-tr-[100px] p-20 flex flex-col md:flex-row items-center md:items-start justify-evenly">
            <h1 className="font-bold text-4xl text-white md:mr-10 max-md:mb-16">Blogr</h1>
            {footerLinks.map((link, index) => (
                <div key={link.id}>
                    <ul className="list-none text-white max-md:mb-10">
                        <li className="font-bold text-lg md:mb-8 mb-5">{link.title}</li>
                        {link.subLinks.map((l, i) => (
                            <li key={l.id} className="hover:underline mb-3"><a href={l.href}>{l.title}</a></li>
                        ))}
                    </ul>
                </div>

            ))}
        </footer>
    )
}

export default Footer