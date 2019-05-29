import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navigationItem.css'

const navigationItem = (props) => (
    <li className={styles.navigationItem}>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={styles.active}
        >
              {props.children}
        </NavLink>
    </li>
);

export default navigationItem