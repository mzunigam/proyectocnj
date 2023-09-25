import {Link} from "react-router-dom";
import { BiSolidChevronRight} from "react-icons/bi";
import './NavBar.css'
import PropTypes from 'prop-types';

export const DropDown = (props) => {

    const array = props.items || [];

    return (
        <ul className="dropdown-menu ">
            {
                array.map((item,index) =>
                    <li key={index} className="dropdown-item">

                        <Link className={'w-full h-full d-flex flex-row-reverse flex items-center justify-end'} to={`/${item.link}`} aria-current="page"><p>{item.name}</p><BiSolidChevronRight /></Link>
                    </li>)
            }
        </ul>
    )
}

DropDown.propTypes   = {
    items: PropTypes.array,
}
