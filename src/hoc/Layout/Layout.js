import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxilary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toast from '../../components/UI/Toast/Toast';

const layout = props => {
    const [showSideDrawer, setSideDrawer] = useState(false);
    // const [showToast, setShowToast] = useState(false);
    

    const sideDrawerClosedHandler = () => {
        setSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawer(!showSideDrawer)
    }

        return (
            <Aux>
                <Toolbar
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={props.isAuthenticated}
                    open={showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                  
                    {props.showToast
                    ? <Toast
                        level={props.showToast}
                    /> : null}
                </main>
            </Aux>
        )
    }

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        showToast: state.order.showToast
    };
};

export default connect( mapStateToProps )( layout );