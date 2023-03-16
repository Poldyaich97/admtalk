import React from 'react'
import styles from './/Information.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Information: React.FC<any> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.parmOne}>{props.parmOne}</p>
      <p className={styles.dot}></p>
      <p className={styles.parmTwo}>{props.parmTwo}</p>
    </div>
  )
}
export default Information
