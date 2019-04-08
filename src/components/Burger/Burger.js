import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import styles from './burger.css'

const burger = (props) => {
    return (
        <div className={styles.burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;