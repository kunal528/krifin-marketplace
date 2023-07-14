import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import useWeb3 from '../../lib/useWeb3';
import { useRouter } from 'next/router';
import Blockies from 'react-blockies';

const Navbar = () => {
  const { account, disconnectWallet, connectWallet } = useWeb3();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    if (account) {
      console.log('account logged in now:', account);
    } else if (!account) {
      console.log('account not logged in now:');
    }
  }, [account]);

  const accountLogin = async () => {
    await connectWallet(); // Wait for the login process to complete
  };

  const accountLogout = async () => {
    try {
      await disconnectWallet(); // Wait for the logout process to complete
      setAcc(null); // Update the acc state after logout
      router.push('/'); // Redirect to '/another-page'
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setShowMobileMenu(isMobile);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/">
        <img src="/png/logo.png" alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.actions}>
        <Link href="/about" className={styles.menuItem}>
          About
        </Link>
        <Link href="/invest" className={styles.menuItem}>
          Invest
        </Link>
        <Link href="/marketplace" className={styles.menuItem}>
          Trade
        </Link>

        <Link href="/contact" className={styles.menuItem}>
          Contact
        </Link>
        <Link href="/map" className={styles.menuItem}>
          Map
        </Link>
        {account ? (
          <Link href="/profile">
            <div > 
            
            <div className={styles.connectButton} style={{display: 'flex', gap: '10px'}}>
            <Blockies
    seed="Ayush iodj" 
    size={12} 
    scale={2} 
    color="green" 
    bgColor="#000000" 
    spotColor="yellow " 
    className="" 
  />
              {account.toString().substring(0, 3) +
                '...' +
                account.toString().substring(account.length - 3)}
            </div>
            </div>
          </Link>
        ) : (
          <div className={styles.connectButton} onClick={() => accountLogin()}>
            Connect Wallet
          </div>
        )}

        <div
          className={styles.connectButton}
          onClick={() => {
            setShowDropdown((val) => !val);
          }}
        >
          <img src="/png/grid.png" height={25} width={25} />
        </div>
        <div className={`${styles.dropdown} ${showDropdown ? '' : ` ${styles.hide}`}`}>
          <div className={styles.dropdownHeader}>METAMAAP</div>
          <div className={styles.divider} />
          <Link href="/" className={styles.dropdownItem}>
            Home
          </Link>
          <Link href="/about" className={styles.dropdownItem}>
            About
          </Link>
          <Link href="https://www.krifin.in/" target="_blank" className={styles.dropdownItem}>
            House of Krifin
          </Link>
          <Link
            href="https://www.metaversecouncil.io/"
            target="_blank"
            className={styles.dropdownItem}
          >
            Metaverse Council
          </Link>
          <Link href="/#" className={styles.dropdownItem}>
            Partners
          </Link>
          
  <div>
    <Link href="/invest" className={`${styles.hiddendropdownItem} ${styles.dropdownItem}`}>
      Invest
    </Link>
    <Link href="/marketplace" className={`${styles.hiddendropdownItem} ${styles.dropdownItem}`}>
      Trade
    </Link>
    <Link href="/contact" className={`${styles.hiddendropdownItem} ${styles.dropdownItem}`}>
      Contact
    </Link>
    <Link href="/map" className={`${styles.hiddendropdownItem} ${styles.dropdownItem}`}>
      Map
    </Link>
  </div>


        </div>
      </div>
    </div>
  );
};

export default Navbar;


