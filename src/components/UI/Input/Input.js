import React from 'react'

import styles from './input.css'

const input = (props) => {

  let inputElement = null;
  switch(props.elementType) {
    case('input'):
      inputElement = <input className={styles.inputElement} {...props.elementConfig} value={props.value} />
      break
    case('textarea'):
    inputElement = <textarea className={styles.inputElement} {...props.elementConfig} value={props.value} />
      break;
    default:
      inputElement = <input className={styles.inputElement} {...props.elementConfig} value={props.value} />
  }

  return (
  <div className={styles.input}>
    <label className={styles.label}>{props.label}</label>
    {inputElement}
  </div>
)};

export default input