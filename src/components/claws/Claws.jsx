import React from 'react';
import styles from './claws.module.scss'
import claws from '../../images/claws.png'

const Claws = () => {
    return (
        <div className={styles.claws}>
            <img src={claws} alt=""/>
        </div>
    );
};

export default Claws;