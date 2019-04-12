import React from 'react'

import WithClass from '../../hoc/WithClass'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import styles from './burger.css'

const burger = (props) => {
    //  Transforming Obj into an array with the amount of items equal to the value of that key
    let parsedIngredients = Object.keys(props.ingredients)// Keys extracts the keys of an object and turns that into an array of strings
                              .map(ingKey => {
                                return [...Array(props.ingredients[ingKey])]    //  Return a new array for each ingredient
                                .map((_, i) => {
                                    return <BurgerIngredients
                                        key={ingKey + i}
                                        type={ingKey}
                                    />  //  Passing ingredients into BurgerIngredients component
                                });
                              })
                              .reduce((arr, el) => {
                                  return arr.concat(el)
                              }, []);   //  Flatten array
    if (parsedIngredients.length === 0) {
        parsedIngredients = <p>Please add ingredients</p>
    }

    return (
        <WithClass class={styles.burger}>
            <BurgerIngredients type="bread-top" />
             {parsedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </WithClass>
    );
};

export default burger;