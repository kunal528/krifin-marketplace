import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className={styles.app}>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout