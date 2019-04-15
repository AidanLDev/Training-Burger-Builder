import React from 'react'

import styles from './drawerToggle.css'

const drawerToggle = (props) => (
    <div className={styles.drawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;