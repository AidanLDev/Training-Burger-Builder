import React from 'react'

import styles from './input.css'

const input = (props) => {
  const inputClass = [styles.inputElement]

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClass.push(styles.invalid)
  }

  let inputElement = null;
  switch(props.elementType) {
    case('input'):
      inputElement = <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
      break
    case('textarea'):
      inputElement = <textarea onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
      break;
    case('select'):
      inputElement = <select onChange={props.changed} className={inputClass.join(' ')} value={props.value}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>{option.displayValue}</option>
        ))}
      </select>
      break;
    default:
      inputElement = <input onChange={props.changed} className={inputClass.join(' ')} {...props.elementConfig} value={props.value} />
  }
  console.log(props)

  //  Validation message
  let validationError = null;
  if (props.invalid && props.touched) {
      validationError = <p className={styles.validationError}>Please enter a valid {props.elementConfig.placeholder === "Your Name" ? 'Name' : props.elementConfig.placeholder}!</p>;
  }

  return (
  <div className={styles.input}>
    <label className={styles.label}>{props.label}</label>
    {inputElement}
    {validationError}
  </div>
)};

export default input