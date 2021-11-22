import React from "react";
import styles from './navbar.module.css';

const Navbar = props => {
    return <nav className={styles.navbar}>
        <div className={styles.logo} >
            <span>Responsive</span>
        </div>
        <div className={styles.button}>
            <i class='bx bx-exit' ></i>
        </div>
        <ul className={styles.list}>
            <li><a href='#' >Home</a></li>
            <li><a href='#' >About</a></li>
            <li><a href='#' >Services</a></li>
            <li><a href='#' >Pricing</a></li>
            <li><a href='#' >Contact</a></li>
        </ul>
        <div className={styles.button}>
            <i class='bx bx-menu'></i>
        </div>
    </nav>
}

export default Navbar;