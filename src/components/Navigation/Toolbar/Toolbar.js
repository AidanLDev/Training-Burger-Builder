import React from 'react'

import DrawerToggle from '../SiderDrawer/DrawerToggle/DrawerToggle'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './toolbar.css'

const toolbar = (props) => (
    <header className={styles.toolbar}>
        <DrawerToggle clicked={props.menuClick} />
        <div className={styles.logo}>
            <Logo />
        </div>
        <nav className={styles.desktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;