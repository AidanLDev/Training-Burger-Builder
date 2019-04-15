import React from 'react'

import styles from './navigationItem.css'

const navigationItem = (props) => (
    <li className={styles.navigationItem}>
        <a
            href={props.link}
            className={props.active ? styles.active : null}
        >
              {props.children}
        </a>
    </li>
);

export default navigationItem