import React from 'react';
import styles from './navbar.module.scss'
import './logo'
import ListLink from "./ListLink.jsx";
import {images} from "./logo.js";

const Navbar = () => {

    return (
        <nav className={styles.navbar}>
            {images.map((image) =>
                <img
                    src={image.image}
                    key={image.key}
                    alt="" className="logo"
                />
            )}
            <ListLink/>
        </nav>
    );
};

export default Navbar;