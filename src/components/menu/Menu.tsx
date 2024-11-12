import React from 'react';
import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>Home Page</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users Page</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts Page</Link>
                </li>
                <li>
                    <Link href={'/comments'}>Comments Page</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;