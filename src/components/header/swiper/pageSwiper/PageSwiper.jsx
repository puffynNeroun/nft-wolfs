import React from 'react';
import styles from './pageSwiper.module.scss'
import IconLink from "./IconLink.jsx";

const PageSwiper = () => {
    return (
        <section className={styles.pageSwiper}>
            <div className={styles.pageSwiper__container}>
                <div className={styles.pageSwiper__content}>
                    <div className={styles.pageSwiper__content__text}>a wealth focused community</div>
                    <div className={styles.pageSwiper__content__title}>8888 hand-drawn wolves </div>
                    <div className={styles.pageSwiper__content__swiper}></div>
                    <ul className={styles.pageSwiper__content__icon}><IconLink/></ul>
                </div>
            </div>
        </section>
    );
};

export default PageSwiper;