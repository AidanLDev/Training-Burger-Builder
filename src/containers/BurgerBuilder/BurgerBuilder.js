//  Packages
import React from 'react'
import axios from '../../axios-orders'

//  Componants
import Aux from '../../hoc/Auxilary'
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

//  Pages
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
    ingredients: null,
    totalPrice: 2,
    canOrder: false,
    ordering: false,
    loading: false,
  }

  componentDidMount () {
    axios.get('https://aidans-burger-builder.firebaseio.com/ingredients.json')
    .then(response => {
      this.setState({ingredients: response.data})
    })
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

  handlePurchase = () => {
    this.setState({
      ordering: true
    })
  }

  handleCancelPurchase = () => {
    this.setState({
      ordering: false
    })
  }

  handleContinuePurchase = () => {
    this.setState({loading: true})
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Aidan Hungry',
        address: {
          street: 'Private',
          postCode: 'OX1 1AL',
          country: 'United Kningdom'
        },
        email: 'test@email.com'
      }
    }
    axios.post('/orders.json', order)
    .then(res => {
      this.setState({loading: false, ordering: false})
    })
    .catch(error => {
      this.setState({loading: false, ordering: false})
    })
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    let burger = <Spinner />

    if (this.state.ingredients) {
      burger = 
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
            ordered={this.handlePurchase}
          />
        </Aux>

          orderSummary =
            <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancled={this.handleCancelPurchase}
            purchaseContinued={this.handleContinuePurchase}
            price={this.state.totalPrice}
          />
          if (this.state.loading) {
            orderSummary = <Spinner />
          }
    }


    return (
      <Aux>
        <Modal show={this.state.ordering} modalClosed={this.handleCancelPurchase}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
// export default withErrorHandler(BurgerBuilder, axios);
export default BurgerBuilder;
