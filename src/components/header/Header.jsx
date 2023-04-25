import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import styles from './header.module.scss';
import PageSwiper from "./swiper/pageSwiper/PageSwiper.jsx";




const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
            <PageSwiper/>
        </header>
    );
};

export default Header;