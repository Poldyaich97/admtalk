import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './/Card.module.css'
import { Kiosk } from '../types'

interface CardProps {
  data: Kiosk
}

const Card: React.FC<CardProps> = (props) => {
  const data = props.data
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}/${data.id}`} className={styles.link}>
      <div className={styles.wrapper}>
        <div className={styles.infoKiosk}>
          <div className={data.isLaunched === true ? styles.statOnline : styles.statOffline} />
          <div className={styles.info}>
            <h4 className={styles.name}>{data.title || data.machineName}</h4>
            <p className={styles.description}>{data.description || 'Описание отстуствует'}</p>
          </div>
        </div>
        <div className={styles.version}>{data.version}</div>
        <p className={styles.namePC}>{data.machineName}</p>
      </div>
    </Link>
  )
}
export default Card
