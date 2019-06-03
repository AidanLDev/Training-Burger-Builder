//  Packages
import React from 'react'
import { connect } from 'react-redux'
import * as burgerBuilderActions from '../../store/actions/index'

//  Componants
import Aux from '../../hoc/Auxilary'
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'

//  Pages
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends React.Component {
  state = {
    canOrder: false,
    ordering: false,
    loading: false,
  }

  componentDidMount () {
    this.props.initIngredients()
  }

  updateOrderState (ingredients) {
    const sum = Object.keys(ingredients)  //  Turn object into an array of values
      .map(ingKey => {
        return ingredients[ingKey]  //  Return amount of ingredients for each key
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0) //  Return a single number, sum of all ingredients

      return sum > 0; //  returns a bool, true if there are ingredients
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

    //  Building query params
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price=' + this.state.totalPrice);
    // const queryString = queryParams.join('&');
    this.props.history.push('/checkout');
     // search: '?' + queryString
  }

  render () {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;
    let burger = <Spinner />

    if (this.props.ings) {
      burger = 
        <Aux>
          <Burger
            ingredients={this.props.ings}
          />
          <BuildControls 
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemove={this.props.onIngredientRemove}
            disabled={disabledInfo}
            price={this.props.price}
            canOrder={this.updateOrderState(this.props.ings)}
            ordered={this.handlePurchase}
          />
        </Aux>

          orderSummary =
            <OrderSummary 
            ingredients={this.props.ings}
            purchaseCancled={this.handleCancelPurchase}
            purchaseContinued={this.handleContinuePurchase}
            price={this.props.price}
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

const mapStateToPros = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemove: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    initIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(BurgerBuilder);
