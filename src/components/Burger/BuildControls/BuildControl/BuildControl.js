import React from 'react'
import styles from './buildControl.css'

const buildControl = (props) => (
    <div className={styles.buildControl}>
        <div className={styles.label}>
            {props.label}
        </div>
        <button className={styles.more} onClick={props.added}>
            More
        </button>
        <button className={styles.less} onClick={props.removed} disabled={props.disabled}>
            Less
        </button>
    </div>
);

export default buildControl;
