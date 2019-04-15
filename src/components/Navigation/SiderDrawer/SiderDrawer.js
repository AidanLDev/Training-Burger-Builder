import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import styles from './sideDrawer.css'

const sideDrawer = (props) => {
    let attatchedStyles = [styles.sideDrawer, styles.close]

    if (props.open) {
        attatchedStyles = [styles.sideDrawer, styles.open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attatchedStyles.join(' ')}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
       </Aux>
    )
};

export default sideDrawer;