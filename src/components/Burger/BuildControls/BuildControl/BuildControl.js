import React from 'react'
import styles from './buildControl.css'

const buildControl = (props) => (
    <div className={styles.buildControl}>
        <div className={styles.label}>
            {props.label}
        </div>
        <button className={styles.more}>
            More
        </button>
        <button className={styles.less}>
            Less
        </button>
    </div>
);

export default buildControl;