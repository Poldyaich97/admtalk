import React from 'react'
import { CardProps } from '../../types'
import styles from './/Common.module.css'
import Information from './Information/Information'

const Common: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.information}>Параметры</h4>
      <Information keyName={'Название киоска:'} value={props.data.title || 'Имя не задано'} />
      <Information keyName={'Имя ПК:'} value={props.data.machineName} />
      <Information keyName={'Версия:'} value={props.data.version} />
      <Information keyName={'Ключ киоска:'} value={props.data.kioskKey} />
      <h4 className={styles.information}>Каледарь</h4>
      <p className={styles.callenfrInfo}>
        Функция календаря позволяет отображать расписание переговорной комнаты. Укажите
        эл.&nbsp;почту переговорной комнаты на сервисе календарей.
      </p>
    </div>
  )
}
export default Common
