import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import styles from './navigationItems.css'

const navigationItems = () => (
    <ul className={styles.navigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;