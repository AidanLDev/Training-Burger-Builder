import React, {useState, useEffect} from 'react';
import styles from './Toast.css';

const toast = props => {

  // const toastType = () => {
  //   switch (props.level) {
  //     case 'warning': return 'http://svgshare.com/i/19x.svg'
  //     case 'danger': return 'http://svgshare.com/i/19E.svg'
  //     case 'SUCCESS': return 'http://svgshare.com/i/19y.svg'
  //   }
  // }

  const baseStyle = {
    margin: 'auto',
    height: '8%',
    width: '30%',
    position: 'fixed',
    bottom: '10%',
    left: '40%'
  }

  let style;
  switch(props.level) {
    case 'SUCCESS': style = {...baseStyle, backgroundColor: 'green', color: 'white'};
      break;
    case 'DANGER': style = {...baseStyle, backgroundColor: 'red', color: 'white'}
      break;
    default: style = {...baseStyle, backgroundColor: 'black', color: 'white'}
  }


  return (
    <div className={styles.ToastWrapper} style={style}>
      {props.level}
      {props.canDismiss ? <button>Dismiss</button> : null}
    </div>
  )
}

export default toast;