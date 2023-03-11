import React from 'react'
import styles from './/Common.module.css'
import Information from './Information/Information'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Common: React.FC<any> = (props) => {
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
