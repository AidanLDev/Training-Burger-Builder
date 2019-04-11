import React from 'react'

import WithClass from '../../hoc/WithClass'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import styles from './burger.css'

const burger = (props) => {
    return (
        // <div className={styles.burger}>
        <WithClass class={styles.burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="meat" />
            <BurgerIngredients type="bread-bottom" />
            </WithClass>
        // </div>
    );
};

export default burger;