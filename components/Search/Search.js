import React from 'react'
import styles from '../../styles/Search.module.css'
import { useRouter } from 'next/router'

const Search = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.header}>Build your wealth, One token at a time!</div>
            <input type="search" placeholder="Search for the best real estate investment across the  globe..... " className={styles.input} onClick={() => {
                if (router.pathname !== '/invest')
                    router.push('/invest');
            }} />
        </div>
    )
}

export default Search