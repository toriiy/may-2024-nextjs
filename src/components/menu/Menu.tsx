import React from 'react';
import Link from "next/link";
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <ul className={styles.nav}>
                <li>
                    <Link href={'/'} className={styles.navLink}>Home Page</Link>
                </li>
                <li>
                    <Link href={'/users'} className={styles.navLink}>Users Page</Link>
                </li>
                <li>
                    <Link href={'/posts'} className={styles.navLink}>Posts Page</Link>
                </li>
                <li>
                    <Link href={'/comments'} className={styles.navLink}>Comments Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;