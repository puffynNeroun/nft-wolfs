import React from 'react';
import {NavLink} from "react-bootstrap";
import {items} from "./links.js";
import styles from './list.module.scss';


const ListLink = () => {
    return (
        <ul className={styles.navbar__menu}>
            {
                items.map((item) =>
                    <li
                        key={item.key}
                    >
                        <NavLink
                            href={item.href}
                        >
                            {item.item}
                        </NavLink>
                    </li>
                )
            }
        </ul>

    );
};

export default ListLink;