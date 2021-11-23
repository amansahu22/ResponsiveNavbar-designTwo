import React, { useState } from "react";
import styles from './navbar.module.css';

const Navbar = props => {
    const [toggle, setToggle] = useState(false);

    const toggleButtonHandler = () => {
        setToggle((prevState) => !prevState);
    }

    window.addEventListener('scroll', () => {
        let add = styles['sticky-nav'];
        let navbar = document.querySelector("nav");
        navbar.classList.toggle(add, window.scrollY > 10)
    });

    const classes = `${styles.listClose} ${toggle && styles.active}`

    return <nav className={styles.navbar}>
        <div className={styles.logo} >
            <span>Responsive</span>
        </div>
        <div className={classes}>
            <div className={styles.buttonFirst}>
                <i className='bx bx-exit' onClick={toggleButtonHandler} ></i>
            </div>
            <ul className={styles.list}>
                <li><a href='/' >Home</a></li>
                <li><a href='/' >About</a></li>
                <li><a href='/' >Services</a></li>
                <li><a href='/' >Pricing</a></li>
                <li><a href='/' >Contact</a></li>
            </ul>
        </div>
        <div className={styles.buttonSecond}>
            <i className='bx bx-menu' onClick={toggleButtonHandler}></i>
        </div>
    </nav>
}

export default Navbar;