import React, { Component } from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import styles from './contactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        }
    }

    handleOrder = (event) => {
        event.preventDefault()
        
        this.setState({loading: true})
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
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
        this.setState({loading: false})
        this.props.history.push('/')
        })
        .catch(error => {
        this.setState({loading: false})
        })
    }

    render() {
        let form = (
            <form>
                <input className={styles.input} type="text" name="name" placeholder="your Name"/>
                <input className={styles.input} type="email" name="email" placeholder="your Email"/>
                <input className={styles.input} type="text" name="street" placeholder="Street"/>
                <input className={styles.input} type="text" name="postal" placeholder="Post code"/>
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

export default ContactData