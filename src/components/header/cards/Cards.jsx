import React from 'react';
import styles from './cards.module.scss'
import CardsHeader from "./CardsHeader.jsx";
import CardsContent from "./CardsContent.jsx";

const Cards = () => {
    return (
        <section className={styles.card__section}>
            <div className={styles.card__wrapper}>
                <CardsHeader/>
                <CardsContent/>
            </div>
        </section>
    );
};

export default Cards;