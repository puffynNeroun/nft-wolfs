import React from 'react';
import styles from './navbar.module.scss'
import './logo'
import ListLink from "./ListLink.jsx";
import {images} from "./logo.js";
import BurgerMenu from "./burgerMenu/BurgerMenu.jsx";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            <a href="/">
            {images.map((image) =>

                    <img
                        src={image.image}
                        key={image.key}
                        alt="" className={styles.logo__image}
                    />

            )}
            </a>
            <ListLink/>
            <BurgerMenu/>
        </nav>
    );
};

export default Navbar;