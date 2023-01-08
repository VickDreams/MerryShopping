import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
            <li> <NavLink to='/'>Home</NavLink> </li>
            <li> <NavLink to='/products'>Products</NavLink> </li>
            <li> <NavLink to='/about'>About</NavLink> </li>
        </ul>
      </nav>
    </div>
  )
}
