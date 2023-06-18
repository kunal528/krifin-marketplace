import React from 'react'
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import useWeb3 from '../../lib/useWeb3'

const Navbar = () => {
    const { web3 } = useWeb3();
    const [showDropdown, setShowDropdown] = React.useState(false);
    return (
        <div className={styles.container}>
            <Link href="/">
                <img src="./png/logo.png" alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.actions}>
                <Link href="#" className={styles.menuItem}>About</Link>
                <Link href="/invest" className={styles.menuItem}>Invest</Link>
                <Link href="#" className={styles.menuItem}>Trade</Link>
                <Link href="#" className={styles.menuItem}>Map</Link>
                <Link href="/contact" className={styles.menuItem}>Contact</Link>
                {web3 ?
                    <img src={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"} style={{ height: '40px', width: '40px', borderRadius: '75%', objectFit: 'cover', }} alt="your image" />
                    : <div className={styles.connectButton}>Connect</div>}
                {/* dropdown of chains */}
                <div className={styles.connectButton} onClick={() => { setShowDropdown(val => !val) }}>
                    <img src='./png/grid.png' height={25} width={25} />
                </div>
                <div className={`${styles.dropdown} ${showDropdown ? '' : ` ${styles.hide}`}`}>
                    <div className={styles.dropdownHeader}>METAMAAP</div>
                    <div className={styles.divider} />
                    <Link href="/" className={styles.dropdownItem}>Home</Link>
                    <Link href="/about" className={styles.dropdownItem}>About</Link>
                    <Link href="https://www.krifin.in/" target='_blank' className={styles.dropdownItem}>House of Krifin</Link>
                    <Link href="https://www.metaversecouncil.io/" target='_blank' className={styles.dropdownItem}>Metaverse Council</Link>
                    <Link href="/partners" className={styles.dropdownItem}>Partners</Link>
                    {/* <div className='navbar-dropdown-item'>Socials</div>
                    <div style={{ display: 'flex', gap: '20px', padding: '10px 25px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Icon name='twitter' style={{ fontSize: '20px' }} className='white' />
                        <Icon name='instagram' style={{ fontSize: '20px' }} className='white' />
                        <Icon name='telegram plane' style={{ fontSize: '20px' }} className='white' />
                        <Icon name='discord' style={{ fontSize: '20px' }} className='white' />
                        <Icon name='linkedin square' style={{ fontSize: '20px' }} className='white' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar