import React from 'react'
import styles from '../../styles/Search.module.css'

const Search = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Build your wealth, One token at a time!</div>
        <input type="search" placeholder="Search for the best real estate investment across the  globe..... " className={styles.input} />
    </div>
  )
}

export default Search