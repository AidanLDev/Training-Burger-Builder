import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:
                    {this.props.ingredients[ingKey]}
                   </li>
        });
    return (
            <Aux>
                <h3>Your Order</h3>
                <p>A juicy burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>£{this.props.price.toFixed(2)}</strong></p>
                <br />
                <p>Continue to checkout?</p>
                <Button btnType="danger" clicked={this.props.purchaseCancled}>
                    Cancel
                </Button>
                <Button btnType="success" clicked={this.props.purchaseContinued}>
                    Continue
                </Button>
            </Aux>
        )
    }
}

export default OrderSummary;