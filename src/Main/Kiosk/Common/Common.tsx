import React from 'react'
import styles from './/Common.module.css'
import Information from './Information/Information'

const Common: React.FC<any> = (props) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.information}>Параметры</h4>
      <Information parmOne={'Название киоска:'} parmTwo={props.data.title} />
      <Information parmOne={'Имя ПК:'} parmTwo={props.data.machineName} />
      <Information parmOne={'Версия:'} parmTwo={props.data.version} />
      <Information parmOne={'Ключ киоска:'} parmTwo={props.data.kioskKey} />
    </div>
  )
}
export default Common
