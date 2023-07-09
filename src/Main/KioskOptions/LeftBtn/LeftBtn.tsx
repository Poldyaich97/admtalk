import React from 'react'
import styles from './LeftBtn.module.css'

import { Link } from 'react-router-dom'
import { BtnProps } from '../../types'

const LeftBtn: React.FC<BtnProps> = (props) => {
  return (
    <Link
      className={`${styles.left_btn} + ${
        props.activeTab === props.section ? styles.btn_active : ''
      }`}
      to={props.url}
    >
      {props.name}
    </Link>
  )
}
export default LeftBtn
