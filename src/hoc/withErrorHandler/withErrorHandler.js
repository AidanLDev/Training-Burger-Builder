import React, {Component } from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxilary'

const withErrorHandler = (WarppedComponent, axios ) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        resetErrorState = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                <Modal
                    show={this.state.error ? this.state.error : null}
                    clicked={this.resetErrorState}
                >
                    {this.state.error}
                </Modal>
                <WarppedComponent {...this.props} />
            </Aux>
            )
        }
    }
}

export default withErrorHandler;