import { useState } from "react";
import { menuItems } from "../consts"
import arrowDark from '../assets/images/icon-arrow-light.svg'
import hamburgerIcon from '../assets/images/icon-hamburger.svg'
import closeIcon from '../assets/images/icon-close.svg'

const Nav = () => {
    const [activeMobileMenu, setactiveMobileMenu] = useState(false)

    return (
        <nav id="nav" className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row items-center w-full">
                <div className="max-md:w-full flex flex-row content-between justify-between">
                    <a href="#!" className="mr-16 text-4xl font-bold">Blogr</a>
                    <button
                        onClick={() => setactiveMobileMenu(prev => !prev)}
                        className="md:hidden"
                    >
                        {activeMobileMenu === true ?
                            <img src={closeIcon} alt="closeIcon" />
                            :
                            <img src={hamburgerIcon} alt="hamburgerIcon" />
                        }
                    </button>
                </div>
                <div className={`md:w-full flex md:flex-row flex-col md:justify-between max-md:bg-white max-md:p-10 max-md:text-black max-md:absolute max-md:inset-x-[40px] max-md:inset-y-[100px] ${activeMobileMenu ? '' : 'max-md:hidden'}`} >
                    <div className="max-md:w-full flex md:flex-row flex-col items-center">
                        {menuItems.map((item, index) => (
                            <MenuItems key={item.id} item={item} index={index} />
                        ))}
                    </div>
                    <div className="flex md:flex-row flex-col items-center align-middle md:text-white text-gray-800  max-md:font-bold">
                        {['Login', 'Sign Up'].map(title => (
                            <a href="#!" className="px-8 py-3 rounded-full md:hover:bg-[#ffffff47] hover:bg-primary hover:text-white">{title}</a>
                        ))}
                    </div>
                </div>
            </div>

        </nav>
    )
}

const MenuItems = ({ item, index }) => {
    const [dropdown, setdropdown] = useState(false);
    const [active, setactive] = useState('');

    return (
        <div
            className="relative"
            onMouseEnter={() => { setdropdown((prev) => !prev), setactive(item.id) }}
            onMouseLeave={() => { setdropdown(false), setactive('') }}
        >
            <button
                aria-expanded={dropdown}
                // onClick={() => { setdropdown((prev) => !prev), setactive(item.id) }}
                className={`font-bold text-slate-200 max-md:text-gray-600 hover:underline md:hover:text-white inline-flex items-center ${index === menuItems.length ? 'max-md:mr0 mb-0' : 'md:mr-3 max-md:mb-10'} ${dropdown ? 'text-white underline' : ''}`}
            >
                {item.title}
                {item.child.length > 0 &&
                    <img src={arrowDark} alt="arrow" width={12} className="ml-1" />
                }
            </button>

            {item.child.length > 0 &&
                <div
                    className={`flex flex-col bg-white p-6 w-[170px] text-start absolute rounded-md text-gray-800 ${dropdown ? 'block' : 'hidden'}`}
                >
                    {item.child.map((child, i) => (
                        <a key={child.id} href="#!" className={`hover:font-bold ${i !== item.child.length ? 'mb-2' : 'mb-0'}`}>
                            {child.title}
                        </a>
                    ))}
                </div>}
        </div>
    )
}


export default Nav