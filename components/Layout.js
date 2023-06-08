import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div className={styles.app}>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout