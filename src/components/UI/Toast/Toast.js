import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import styles from './Toast.css';

const toast = props => {

  let style;
  switch(props.level) {
    case 'SUCCESS': style = {backgroundColor: 'green', color: 'white'};
      break;
    case 'DANGER': style = {backgroundColor: 'red', color: 'white'}
      break;
    default: style = {backgroundColor: 'black', color: 'white'}
  }


  return (
    <div className={styles.ToastWrapper} style={style}>
      <p>{props.toastMessage}</p>
      {<button onClick={() => props.onDismissToast()} className={styles.ButtonStyles}>Dismiss</button>}
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    level: state.util.level,
    toastMessage: state.util.message
  }
  
}

const mapDispatchToProps = dispatch => {
  return {
      onDismissToast: () => dispatch(actions.dismissToast())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(toast);