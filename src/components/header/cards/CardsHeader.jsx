import React from 'react';
import styles from './cardsHeader.module.scss'
import {cardsContents} from "./cardsHeader.js";

const CardsHeader = (props) => {
    return (
        <>
            {
                cardsContents.map((cardContent) =>
                    <div key={cardContent.key} className={styles.cards__wrapper}>
                        <div className={styles.cards__wrapper__container}>
                            <div className={styles.cards__wrapper__rewardText}>{cardContent.rewardText}</div>
                            <div className={styles.cards__wrapper__title}>{cardContent.title}</div>
                            <div className={styles.cards__wrapper__description}> {cardContent.description} </div>
                        </div>
                    </div>
                )
            }

        </>
    );
};

export default CardsHeader;