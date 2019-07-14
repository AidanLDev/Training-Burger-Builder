import React, {useState, useEffect} from 'react';
import style from './Toast.css';

const toast = props => {

  // const toastType = () => {
  //   switch (props.level) {
  //     case 'warning': return 'http://svgshare.com/i/19x.svg'
  //     case 'danger': return 'http://svgshare.com/i/19E.svg'
  //     case 'SUCCESS': return 'http://svgshare.com/i/19y.svg'
  //   }
  // }

  const generalStyles = {
    margin: 'auto',
    height: '8%',
    width: '30%',
    position: 'fixed',
    bottom: '10%',
    left: '40%'
  }

  const style = props.level === 'SUCCESS' ? {backgroundColor: 'green', ...generalStyles} : {backgroundColor: 'red', ...generalStyles}


  return (
    <div className={props.ToastWrapper} style={style}>
      {props.level}
    </div>
  )
}

export default toast;