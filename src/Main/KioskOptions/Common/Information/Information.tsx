import React from 'react'
import styles from './/Information.module.css'
interface InformProps {
  keyName?: string
  value?: string
}

const Information: React.FC<InformProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.keyName}>{props.keyName}</p>
      <p className={styles.dot}></p>
      <p className={styles.value}>{props.value}</p>
    </div>
  )
}
export default Information
