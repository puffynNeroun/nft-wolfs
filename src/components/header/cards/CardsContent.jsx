import React from 'react';
import styles from './cardsContent.module.scss';
import {contentCards} from "./cardsContent.js";

const CardsContent = () => {
    return (
        <div className={styles.cards__content__wrapper}>
            {contentCards.map((contentCard)=>
            <div key={contentCard.key} className={styles.wrapper__card} style={ {
                background: contentCard.style
            } }>
                <img className={styles.wrapper__card__icon} src={contentCard.icon} alt=""/>
                <div className={styles.wrapper__card__text} >{contentCard.text}</div>
            </div>
            )}
        </div>
    );
};

export default CardsContent;