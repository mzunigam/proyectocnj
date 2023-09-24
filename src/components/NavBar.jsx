import { Link } from "react-router-dom";
import { BiChevronDown, BiSolidChevronRight } from "react-icons/bi";
import { useState } from "react";
import './NavBar.css'


export const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-800 border-gray-200 h-[5rem]">
                <div className={'flex gap-[3rem] items-center md:justify-start justify-between md:w-full w-full'}>
                    <div className="md:w-max w-full flex p-[1rem] justify-between md:ml-[5%] items-center">
                        <Link to={'/'} className="flex items-center w-max">
                            <span
                                className="self-center text-[1.1rem] font-semibold whitespace-nowrap text-white">CNJ</span>
                            <img src='../../public/logo.png' className={'w-[3rem]'} />
                        </Link>
                        <button type="button" id={'dropdown'} onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="burger"
                            aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${dropdownOpen ? 'flex' : 'hidden'} navbar-menu md:flex bg-gray-800 top-[4rem] md:top-0 absolute md:relative w-full md:w-max`}>
                        <ul className="mobile-dropdown">
                            <li className="mobile-dropdown-item">
                                <Link to={'/cursos'}
                                    className="py-2 px-3 text-white bg-[#5b5ca2] rounded md:bg-transparent md:p-0 md:text-xl text-[1.1rem] flex md:justify-start justify-between
                                      items-center" aria-current="page">Cursos<BiChevronDown /></Link>
                            </li>
                            <li className="mobile-dropdown-item">
                                <Link to={'/comunidad'}
                                    className="py-2 px-3 text-white bg-[#5b5ca2] rounded md:bg-transparent md:p-0 md:text-xl text-[1.1rem] flex md:justify-start justify-between
                                      items-center"
                                    aria-current="page">Comunidad<BiChevronDown /></Link>
                                <ul className="dropdown-menu ">
                                    <li className="dropdown-item">
                                        <BiSolidChevronRight />
                                        <Link to={'/comunidad'} aria-current="page">Foro</Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <BiSolidChevronRight />
                                        <Link to={'/comunidad'} aria-current="page">Blog</Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <BiSolidChevronRight />
                                        <Link to={'/comunidad'} aria-current="page">Grupos</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="mobile-dropdown-item">
                                <Link to={'/media'}
                                    className="py-2 px-3 text-white bg-[#5b5ca2] rounded md:bg-transparent md:p-0 md:text-xl text-[1.1rem] flex md:justify-start justify-between"
                                    aria-current="page">Media</Link>
                            </li>
                            <li className="mobile-dropdown-item">
                                <Link to={'/miavance'}
                                    className="py-2 px-3 text-white bg-[#5b5ca2] rounded md:bg-transparent md:p-0 md:text-xl text-[1.1rem] flex md:justify-start justify-between
                                      items-center"
                                    aria-current="page">Mi Avance <BiChevronDown /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className={'hidden md:flex ml-auto mr-[5%]'}>
                        <div className={'flex gap-3'}>
                            <button className={'bg-blue-600 text-white rounded px-2 py-1 font-bold'}>Iniciar Sesión
                            </button>
                            <button className={'bg-blue-600 text-white rounded px-2 py-1 font-bold'}>Registrar</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}