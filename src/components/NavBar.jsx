import {Link} from "react-router-dom";
import {BiChevronDown} from "react-icons/bi";

export const NavBar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className={'flex gap-[3rem] items-center md:justify-start justify-between md:w-full w-full'}>
                    <div className="md:w-max w-full flex p-[1rem] justify-between md:ml-[10%] items-center">
                        <Link to={'/'} className="flex items-center w-max">
                            <span
                                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CNJ</span>
                            <img src='../../public/logo.png' className={'w-[3rem]'}/>
                        </Link>
                        <button data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex p-[1rem]" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to={'/cursos'}
                                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 flex items-center"
                                      aria-current="page">Cursos<BiChevronDown/></Link>
                            </li>
                            <li>
                                <Link to={'/comunidad'}
                                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 flex items-center"
                                      aria-current="page">Comunidad<BiChevronDown/></Link>
                            </li>
                            <li>
                                <Link to={'/media'}
                                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                                      aria-current="page">Media</Link>
                            </li>
                            <li>
                                <Link to={'/miavance'}
                                      className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 flex items-center"
                                      aria-current="page">Mi Avance <BiChevronDown/></Link>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </nav>
        </>
    )
}