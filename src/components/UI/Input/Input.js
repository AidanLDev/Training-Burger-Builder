import React from 'react'

import styles from './input.css'

const input = (props) => {

  let inputElement = null;
  switch(props.elementType) {
    case('input'):
      inputElement = <input onChange={props.changed} className={styles.inputElement} {...props.elementConfig} value={props.value} />
      break
    case('textarea'):
      inputElement = <textarea onChange={props.changed} className={styles.inputElement} {...props.elementConfig} value={props.value} />
      break;
    case('select'):
      inputElement = <select onChange={props.changed} className={styles.inputElement} value={props.value}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
      </select>
      break;
    default:
      inputElement = <input onChange={props.changed} className={styles.inputElement} {...props.elementConfig} value={props.value} />
  }

  return (
  <div className={styles.input}>
    <label className={styles.label}>{props.label}</label>
    {inputElement}
  </div>
)};

export default input