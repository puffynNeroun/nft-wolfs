import React from 'react';
import Navbar from "./navbar/Navbar.jsx";
import PageSwiper from "./swiper/pageSwiper/PageSwiper.jsx";
import {Container} from "react-bootstrap";
import WolfCard from "./wolfCard/WolfCard.jsx";
import Claws from "../claws/Claws.jsx";


const Header = () => {
    return (
        <header>
            <Navbar/>
            <Container>
                <PageSwiper/>
                <Claws/>
                <WolfCard/>
                <Claws/>
            </Container>
        </header>
    );
};

export default Header;