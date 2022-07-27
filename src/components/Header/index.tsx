import React from 'react'
import styles from './style.module.css'
import logo from '../../img/netflix.svg'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} className={styles.logo} />
        <a href="#">Sign Out</a>
    </header>
  )
}

export default Header