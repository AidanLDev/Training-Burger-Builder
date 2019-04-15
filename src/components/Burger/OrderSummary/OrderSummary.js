import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:
                    {props.ingredients[ingKey]}
                   </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A juicy burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>£{props.price.toFixed(2)}</strong></p>
            <br />
            <p>Continue to checkout?</p>
            <Button btnType="danger" clicked={props.purchaseCancled}>
                Cancel
            </Button>
            <Button btnType="success" clicked={props.purchaseContinued}>
                Continue
            </Button>
        </Aux>
    )
 
}

export default orderSummary;