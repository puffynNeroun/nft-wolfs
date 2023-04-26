import React, {useState} from 'react';
import ListLink from "../ListLink.jsx";
import './burger.scss'
import {items} from "../links";
import {NavLink} from "react-bootstrap";


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <button
                className={`burger__main__button ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='burger__main__button__style'/>
                <span className='burger__main__button__style' />
                <span className='burger__main__button__style' />

            </button>

            <ul className={`burger__menu ${isOpen ? 'open' : ''}`}>
                {
                    items.map((item) =>
                        <li
                            key={item.key}
                        >
                            <NavLink
                                href={item.href}
                            >
                                {item.item}
                            </NavLink>
                        </li>
                    )
                }
            </ul>

        </>
    );
};

export default BurgerMenu;