import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Backdrop from '../Backdrop/Backdrop'

import styles from './modal.css'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={styles.modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default modal;