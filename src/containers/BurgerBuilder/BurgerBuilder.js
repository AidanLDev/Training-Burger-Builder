import React from 'react'
import Aux from '../../hoc/Auxilary'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.5,
  meat: 1.5,
  bacon: 1
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 2,
    canOrder: false
  }

  handleAddIngredients = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    })
    this.updateOrderState(updatedIngredients);
  }

  handleRemoveIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return
    }
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    })
  this.updateOrderState(updatedIngredients);
  }

  updateOrderState (ingredients) {
    const sum = Object.keys(ingredients)  //  Turn object into an array of values
      .map(ingKey => {
        return ingredients[ingKey]  //  Return amount of ingredients for each key
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0) //  Return a single number, sum of all ingredients

      this.setState({
        canOrder: sum > 0,  //  returns a bool, true if there are ingredients
      })
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Burger
          ingredients={this.state.ingredients}
        />
        <BuildControls 
          ingredientAdded={this.handleAddIngredients}
          ingredientRemove={this.handleRemoveIngredient}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          canOrder={this.state.canOrder}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;