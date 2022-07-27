import React from 'react'
import styles from './style.module.css';
import visa from '../../img/visa-v3.svg'
import mastercard from '../../img/mastercard-v2.svg'
import amex from '../../img/amex-v2.svg'

const UpperForm = () => {
  return (
    <>
      <span className={styles.steps}>STEP <b>1</b> OF <b>2</b></span>
      <h1 className={styles.title}>Set up your credit or debit card</h1>
      <div className={styles.cards}>
        <img src={visa} alt="" />
        <img src={mastercard} alt="" />
        <img src={amex} alt="" />
      </div>
    </>
  )
}

export default UpperForm