import React from 'react';
import './WolfCard'
import styles from './wolfCard.module.scss'
import {cards} from "./wolfCard.js";

const WolfCard = () => {
    return (
        <div className={styles.wolf__card__wrapper}>
            {cards.map((card) =>
                <div key={card.key}>
                    <img className={styles.wolf__card__img} src={card.image} alt=""/>
                </div>
            )}
        </div>
    );
};

export default WolfCard;