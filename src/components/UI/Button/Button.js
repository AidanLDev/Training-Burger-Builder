import React from 'react'

import styles from './button.css'

const button = (props) => (
    <button
        className={[styles.button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
    </button>
);

export default button;