import React from 'react'

import burgerLogo from '../../res/images/burger-logo.png'
import styles from './logo.css'

const logo = (props) => (
    <div className={styles.logo} style={props.height}>
        <img src={burgerLogo} alt="Burger logo"></img>
    </div>
);

export default logo;
