import React from 'react'

import styles from './backdrop.css'

const backdrop = (props) => (
    props.show ? <div className={styles.backdrop} onClick={props.clicked}></div> : null
);
//  Used with modal to give dark background and...
export default backdrop;