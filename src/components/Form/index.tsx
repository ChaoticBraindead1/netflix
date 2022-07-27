import React from 'react'
import styles from './style.module.css';
import UpperForm from '../UpperForm';
import Terms from '../Terms';

const Form = () => {
  return (
    <div className={styles.form}>
      <UpperForm />
      <form>
        <h1>form here</h1>
        <input type="text" />
      </form>
      <Terms />
    </div>
  )
}

export default Form