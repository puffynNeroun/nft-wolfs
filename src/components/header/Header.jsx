import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import styles from './header.module.scss';
import PageSwiper from "./swiper/pageSwiper/PageSwiper.jsx";
import {Container} from "react-bootstrap";


const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar/>
            <Container>
                <PageSwiper/>
            </Container>
        </header>
    );
};

export default Header;