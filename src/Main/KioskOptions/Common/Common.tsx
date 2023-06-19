import React from 'react'
import { Kiosk } from '../../types'
import styles from './/Common.module.css'
import Information from './Information/Information'

interface CardProps {
  data: Kiosk
}

const Common: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.information}>Параметры</h4>
      <Information parmOne={'Название киоска:'} parmTwo={props.data.title || 'Имя не задано'} />
      <Information parmOne={'Имя ПК:'} parmTwo={props.data.machineName} />
      <Information parmOne={'Версия:'} parmTwo={props.data.version} />
      <Information parmOne={'Ключ киоска:'} parmTwo={props.data.kioskKey} />
      <h4 className={styles.information}>Каледарь</h4>
      <p className={styles.callenfrInfo}>
        Функция календаря позволяет отображать расписание переговорной комнаты. Укажите
        эл.&nbsp;почту переговорной комнаты на сервисе календарей.
      </p>
    </div>
  )
}
export default Common
