import React from 'react'
import styles from './style.module.css';
import UpperForm from '../UpperForm';
import Terms from '../Terms';

const Form = () => {
  return (
    <div className={styles.form}>
      <UpperForm />
      <form>
      <div className={styles.input}>
          <input type="text" id='fname'/>
          <label htmlFor="fname">First name</label>
        </div>
        <div className={styles.input}>
          <input type="text" id='lname'/>
          <label htmlFor="lname">Last name</label>
        </div>
        <div className={styles.input}>
          <input type="text" id='email'/>
          <label htmlFor="email">Email</label>
        </div>
        <div className={styles.input}>
          <input type="text" id='cardnumber'/>
          <label htmlFor="cardnumber">Card number</label>
        </div>
        <div className={styles.input}>
          <input type="text" id='expdate'/>
          <label htmlFor="expdate">Expiration date (MM/YY)</label>
        </div>
        <div className={styles.input}>
          <input type="text" id='ccv'/>
          <label htmlFor="ccv">Security code (CCV)</label>
        </div>

        <Terms />
        
        <input type="submit" className={styles.submit} value="Update Payment Info"/>
      </form>
    </div>
  )
}

export default Form