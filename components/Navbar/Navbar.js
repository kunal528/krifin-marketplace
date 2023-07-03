import React, { useEffect, useState } from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import useWeb3 from '../../lib/useWeb3'
import useFirebase from '../../lib/useFirebase'


const Navbar = () => {
    const { account } = useWeb3()
    let userData;
    const {login, logout} = useFirebase();
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [acc, setAcc] = useState(null);
    useEffect(() => {
        if (!acc) {
            userData = JSON.parse(localStorage.getItem('userloggedAcc'));
            setAcc(userData); // Update the acc state after login
          console.log("account logged in now:", acc);
        }
        else{
            console.log("account already loggedin:", acc);
        }
      }, [acc]);
      const accountLogin = async () => {
        try {
          const res = await login(); // Wait for the login process to complete
          if(res){
            userData = JSON.parse(localStorage.getItem('userloggedAcc'));
            console.log("userData is:", userData);
            setAcc(userData); // Update the acc state after login
          }
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };

      const accountLogout = async () => {
        try {
          await logout(); // Wait for the logout process to complete
          setAcc(null); // Update the acc state after logout
        } catch (error) {
          console.error('Error logging out:', error);
        }
      }
    return (
        <div className={styles.container}>
            <Link href="/">
                <img src="/png/logo.png" alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.actions}>
                <Link href="/about" className={styles.menuItem}>About</Link>
                <Link href="/invest" className={styles.menuItem}>Invest</Link>
                <Link href="/marketplace" className={styles.menuItem}>Trade</Link>
                {/* <Link href="#" className={styles.menuItem}>Map</Link> */}
                <Link href="/contact" className={styles.menuItem}>Contact</Link>
                {account ?
                    <div className={styles.connectButton}>{account.toString().substring(0, 3) + '...' + account.toString().substring(account.length -3)}</div>
                    : <div className={styles.connectButton}>Connect Wallet</div>}
                {acc ? <Link href="/profile" className={styles.menuItem}><img src={acc.photoURL} height={35} width={35} style={{borderRadius: '100%'}}/></Link>: 
                <div className={styles.connectButton} onClick={() => { accountLogin() }}>Login</div>}
                {/* dropdown of chains */}
                
                <div className={styles.connectButton} onClick={() => { setShowDropdown(val => !val) }}>
                    <img src='/png/grid.png' height={25} width={25} />
                </div>
                <div className={`${styles.dropdown} ${showDropdown ? '' : ` ${styles.hide}`}`}>
                    <div className={styles.dropdownHeader}>METAMAAP</div>
                    <div className={styles.divider} />
                    <Link href="/" className={styles.dropdownItem}>Home</Link>
                    <Link href="/about" className={styles.dropdownItem}>About</Link>
                    <Link href="https://www.krifin.in/" target='_blank' className={styles.dropdownItem}>House of Krifin</Link>
                    <Link href="https://www.metaversecouncil.io/" target='_blank' className={styles.dropdownItem}>Metaverse Council</Link>
                    <Link href="/partners" className={styles.dropdownItem}>Partners</Link>
                    {acc && <div className={styles.dropdownItem} onClick={() => { accountLogout() }}>Logout</div>}
                </div>
            </div>
        </div>
    )
}

export default Navbar