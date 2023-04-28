import styles from "./teamsHeader.module.scss"
import {teamHeaders} from "./teamHeader.js";
const TeamsHeader = () => {
    return (
        <>
            {teamHeaders.map((teamHeader)=>
            <div key={teamHeader.key} className={styles.team__header}>
                <div className={styles.team__header__text}>{teamHeader.text}</div>
                <div className={styles.team__header__title}>{teamHeader.title}</div>
            </div>
            )}
        </>
    );
};

export default TeamsHeader;