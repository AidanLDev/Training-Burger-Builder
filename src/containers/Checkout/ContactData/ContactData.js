import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from '../../../axios-orders'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './contactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Post Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 6
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}]
                },
                value: '',
                validation: {
                    required: false
                }
            }
        },
        loading: false,
    }

    handleOrder = (event) => {
        event.preventDefault()
        this.setState({loading: true})

        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId]
        }

        const order = {
        ingredients: this.props.ings,
        price: this.props.price,
        orderData: formData
        }

        axios.post('/orders.json', order)
        .then(res => {
        this.setState({loading: false})
        this.props.history.push('/')
        })
        .catch(error => {
        this.setState({loading: false})
        })
    }

    handleInputChange = (event, inputId) => {
        const updatedOrderForm = {...this.state.orderForm};
        const updatedFormElement = {...updatedOrderForm[inputId]};   //  Updated input

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation) //  Passing current form value and validation rules to validation check method
        console.log(updatedFormElement)
        updatedOrderForm[inputId] = updatedFormElement
        this.setState({orderForm: updatedOrderForm})
    }

    validationCheck = (value, rules) => {
        let isValid = true;
        if (rules.required && isValid) {
            isValid = value.trim() !== "";
        }

        if (rules.minLength && isValid) {
            isValid = value.length >= rules.minLength
        }

        if (rules.maxLength && isValid) {
            isValid = value.length <= rules.maxLength
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.handleOrder}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.handleInputChange(event, formElement.id)}
                    />
                ))}
                <Button btnType="success" clicked={this.handleOrder}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        } 
        return (
            <div className={styles.contactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(ContactData)