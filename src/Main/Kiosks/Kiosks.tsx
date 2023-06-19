import styles from './Kiosks.module.css'
import React from 'react'
import Card from '../Card/Card'
import { ThemeContext, DARK_THEME, Select } from '@skbkontur/react-ui'
import { useEffect } from 'react'
import { getKiosks } from '../api'
import { Kiosk } from '../types'

const items = [['', 'Все'], 'Чебаркуль', 'Новосибирск', 'Москва', 'Санкт-Петербург', 'Уфа']

export default function Kiosks() {
  const [filter, setFilter] = React.useState('')
  const [data, setData] = React.useState<Kiosk[]>()
  useEffect(() => {
    async function main() {
      const kiosk = await getKiosks()
      kiosk.kiosks.sort((a, b) => {
        if (a.isLaunched && !b.isLaunched) {
          return 1
        }
        if (!a.isLaunched && b.isLaunched) {
          return -1
        }
        return 0
      })
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
          <p className={styles.infoName}>Имя киоска</p>
          <p className={styles.infoVersion}>Версия</p>
          <p className={styles.infoPC}>Имя ПК</p>
        </div>
        <div className={styles.line}></div>
        {data
          .filter((e) => (e.description ?? '').indexOf(filter) !== -1)
          .map((element) => (
            <div key={element.id}>
              <Card data={element} />
            </div>
          ))}
      </div>
    )
  }
}
