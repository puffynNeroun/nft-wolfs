import React from 'react';
import styles from './teamContent.module.scss'
import {teamContents} from "./teamContent.js";

const TeamContent = () => {
    return (
        <div className={styles.team__content}>
            {teamContents.map((teamContent)=>
            <div key={teamContent.key} className={styles.team__content__card}>
                <img className={styles.team__content__card__image} src={teamContent.image} alt=""/>
                <p className={styles.team__content__card__name}>{teamContent.name}</p>
                <p className={styles.team__content__card__branch}>{teamContent.specialty}</p>
            </div>
            )}
        </div>
    )
        ;
};

export default TeamContent;