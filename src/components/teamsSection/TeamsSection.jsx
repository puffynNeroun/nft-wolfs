import React from 'react';
import styles from './teamsSection.module.scss'
import TeamsHeader from "./TeamsHeader.jsx";
import Claws from "../claws/Claws.jsx";
import TeamContent from "./TeamContent.jsx";

const TeamsSection = () => {
    return (
        <div className={styles.teams}>
            <Claws/>
            <TeamsHeader/>
            <TeamContent/>
        </div>
    );
};

export default TeamsSection;