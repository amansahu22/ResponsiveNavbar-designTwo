import React, { useState } from "react";
import styles from './navbar.module.css';

const Navbar = props => {
    const [isScrolled, setIsScrolled] = useState(false)
    const navbarScrollHandler = () => {
        console.log('scrolled')
        if (window.scrollY > 0) {
            setIsScrolled((prevState) => {
                return !prevState
            })
        }
    }

    const navbarClasses = `${styles.navbar} ${isScrolled && styles['sticky-nav']}`;

    return <nav className={navbarClasses} onScroll={navbarScrollHandler}>
        <div className={styles.logo} >
            <span>Responsive</span>
        </div>
        <div className={styles.buttonFirst}>
            <i class='bx bx-exit' ></i>
        </div>
        <ul className={styles.list}>
            <li><a href='#' >Home</a></li>
            <li><a href='#' >About</a></li>
            <li><a href='#' >Services</a></li>
            <li><a href='#' >Pricing</a></li>
            <li><a href='#' >Contact</a></li>
        </ul>
        <div className={styles.buttonSecond}>
            <i class='bx bx-menu'></i>
        </div>
    </nav>
}

export default Navbar;