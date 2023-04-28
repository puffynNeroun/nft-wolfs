import React from 'react';
import styles from './cards.module.scss'
import CardsHeader from "./CardsHeader.jsx";
import CardsContent from "./CardsContent.jsx";

import shadow from '../../../images/Rectangle 85 1.png'

const Cards = () => {
    return (
        <>
            <section className={styles.card__section}>
                <div className={styles.card__wrapper}>
                    <CardsHeader/>
                    <CardsContent/>
                </div>
            </section>
        </>
    );
};

export default Cards;