import containerStyle from '../Container/Container.module.css'
import styles from './Main.module.css'
import React from 'react'
import Navigation from './Navigation/Navigation'
import Card from './Card/Card'
import Kiosk from './Kiosk/Kiosk'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeContext, DARK_THEME, Select } from '@skbkontur/react-ui'
import { useEffect } from 'react'
import getData from './api'

const items = [
  ['', 'Все'],
  'Екатеринбург',
  'Новосибирск',
  'Москва',
  'Санкт-Петербург',
  'Воронеж',
  'Волгоград',
]

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={`${containerStyle.container}>> ${styles.containerWidth}`}>
        <div className={styles.mainBg}>
          <Router>
            <div>
              <Navigation />
              <Switch>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/users'>
                  <Users />
                </Route>
                <Route path='/kiosks/:id'>
                  <Kiosk />
                </Route>
                <Route path='/kiosks'>
                  <Kiosks />
                </Route>
                <Route path='/'></Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </main>
  )
}

function Kiosks() {
  const [filter, setFilter] = React.useState('')

  const [data, setData] = React.useState<
    {
      title: string
      description: string | undefined
      machineName: string
      version: string
      id: string
      isLaunched: string
    }[]
  >()
  useEffect(() => {
    async function main() {
      const kiosk = await getData(`?pageSize=1000`)
      setData(kiosk.kiosks)
    }
    main()
  }, [])

  if (!data) {
    return <div>Загружается</div>
  } else {
    return (
      <div className={styles.wrapper}>
        <ThemeContext.Provider value={DARK_THEME}>
          <Select<string>
            className={styles.select}
            items={items}
            value={filter}
            onValueChange={setFilter}
            search
          />
        </ThemeContext.Provider>
        <div className={styles.info}>
          <p className={styles.name}>Имя киоска</p>
          <p>Версия</p>
          <p>Имя ПК</p>
        </div>
        <div className={styles.line}></div>
        {data
          .filter((e) => (e.description ?? '').indexOf(filter) !== -1)
          .map((element, pos) => (
            <div key={pos}>
              <Card data={element} />
            </div>
          ))}
      </div>
    )
  }
}

function About() {
  return (
    <div>
      <h2>Переговорки</h2>
      <p>Пока тут ничего нет</p>
    </div>
  )
}

function Users() {
  return (
    <div>
      <h2>Че-то там еще</h2>
      <p>Пока тут ничего нет</p>
    </div>
  )
}
