/* eslint-disable @typescript-eslint/no-unused-vars */
import containerStyle from '../Container/Container.module.css'
import styles from './Main.module.css'
import React from 'react'
import Kiosk from './Kiosk/Kiosk'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Kiosks from './Kiosks/Kiosks'

export default function Main() {
  const Home = () => {
    return <Redirect to='/kiosks' />
  }
  return (
    <main className={styles.main}>
      <div className={`${containerStyle.container} + ${styles.containerWidth}`}>
        <div className={styles.mainBg}>
          <div>
            <Switch>
              <Route path='/kiosks/:id'>
                <Kiosk />
              </Route>
              <Route path='/kiosks'>
                <Kiosks />
              </Route>
              <Route path='/' component={Home}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  )
}
