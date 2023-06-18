import React from 'react'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Head from 'next/head'
import Search from './Search/Search'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter();
    const ignoreSearch = [
        '/contact',
        '/how-it-works',
        '/profile',
    ]
    console.log(router.pathname)
    return (
        <div>
            <Head>
                <title>Krifin Marketplace</title>
                <meta name="description" content="Krifin Marketplace" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&family=Manjari:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.app}>
                {!ignoreSearch.includes(router.pathname) && <Search />}
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout