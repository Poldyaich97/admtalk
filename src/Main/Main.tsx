/* eslint-disable react/no-children-prop */
import containerStyle from '../Container/Container.module.css'
import styles from './Main.module.css'
import React from 'react'
import KioskOptions from './KioskOptions/KioskOptions'
import { Switch, Route, Redirect, useRouteMatch, useLocation } from 'react-router-dom'
import Kiosks from './Kiosks/Kiosks'

export default function Main() {
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const background = location.state

  const Home = () => {
    return <Redirect to='/kiosks' />
  }
  return (
    <main className={styles.main}>
      <div className={`${containerStyle.container} + ${styles.containerWidth}`}>
        <div className={styles.mainBg}>
          <div>
            <Switch>
              {/* <Route path='/kiosks/:id'>
                <KioskOptions />
              </Route> */}
              <Route path='/kiosks'>
                <Kiosks />
              </Route>
              <Route path='/' component={Home}></Route>
            </Switch>
            <Route path='/kiosks/:id' children={<KioskOptions />} />
          </div>
        </div>
      </div>
    </main>
  )
}
