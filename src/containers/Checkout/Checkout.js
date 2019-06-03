import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends React.Component {

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0
        for (let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];   //  + converts params into a number
            }
            
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    handleCheckoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    handleCheckoutCancelled = () => {
        this.props.history.goBack();
    }

    render() {
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutContinued={this.handleCheckoutContinued}
                    checkoutCancelled={this.handleCheckoutCancelled}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);
