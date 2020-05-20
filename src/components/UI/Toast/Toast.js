import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import styles from './Toast.css';

const toast = (props) => {
  let style;

  const baseStyle = props.showToast
    ? { transform: 'translateY(0)', opacity: '1' }
    : { transform: 'translateY(-100vh)', opacity: '0' };

  switch (props.level) {
    case 'SUCCESS':
      style = {
        ...baseStyle,
        background: 'linear-gradient(#1b612d, #075f1e)',
        color: 'white',
      };
      break;
    case 'DANGER':
      style = { ...baseStyle, backgroundColor: 'red', color: 'white' };
      break;
    default:
      style = { ...baseStyle, backgroundColor: 'black', color: 'white' };
  }

  if (props.dissmissableToast) {
    setTimeout(() => props.onDismissToast(), 3000);
  }

  return (
    <div className={styles.ToastWrapper} style={style}>
      <p className={styles.ToastText}>{props.toastMessage}</p>
      {!props.dissmissableToast ? (
        <button
          onClick={() => props.onDismissToast()}
          className={styles.ButtonStyles}
        >
          Dismiss
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    level: state.util.level,
    toastMessage: state.util.message,
    dissmissableToast: state.util.dissToast,
    showToast: state.util.showToast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDismissToast: () => dispatch(actions.dismissToast()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toast);
