import React from 'react'
import styles from './LeftBtn.module.css'

import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LeftBtn: React.FC<any> = (props) => {
  return (
    <Link
      className={`${styles.left_btn} + ${
        props.isActive === props.section ? styles.btn_active : ''
      }`}
      to={props.url}
    >
      {props.name}
    </Link>
  )
}
export default LeftBtn
