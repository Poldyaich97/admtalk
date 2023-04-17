import React from 'react'
import { InformProps } from '../../../types'
import styles from './/Information.module.css'

const Information: React.FC<InformProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.parmOne}>{props.parmOne}</p>
      <p className={styles.dot}></p>
      <p className={styles.parmTwo}>{props.parmTwo}</p>
    </div>
  )
}
export default Information
