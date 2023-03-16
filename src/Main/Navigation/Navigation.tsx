import React from 'react'
import styles from './Navigation.module.css'
import containerStyle from '../Container/Container.module.css'

import { BrowserRouter as Route, Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <div>
        <nav>
          <ul className={styles.listing}>
            <li>
              <Link to='/kiosks'>Киоски</Link>
            </li>
            <li>
              <Link to='/about'>Переговорки</Link>
            </li>
            <li>
              <Link to='/users'>Че-то там еще</Link>
            </li>
            <li>
              <Link to='/menu'>test link</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
