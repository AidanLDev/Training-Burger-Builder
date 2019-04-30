import React from 'react'

import Button from '../../UI/Button/Button'
import Burger from '../../Burger/Burger'

import styles from './checkoutSummary.css'

const checkoutSummary = (props) => {

    return (
        <div className={styles.checkoutSummary}>
            <h1>Hope it's tasty</h1>
            <div style={{width: '100%',  margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
        <Button btnType="danger" clicked>CANCEL</Button>
        <Button btnType="success" clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;