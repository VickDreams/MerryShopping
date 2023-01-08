import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Content.module.css';

export default function Content_Page({ img, title, description }) {
  return (
    <div className={styles.bigcontainer}>
      <div className={styles.container}>
      <img src={(`../../public/img/${img}`)} />
        <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
            <NavLink to='#'>Visitar</NavLink>
        </div>
      </div>
    </div>
  )
}
