import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import stylesCard from './/Card.module.css'

const linkStyle = {
  textDecoration: 'none',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card: React.FC<any> = (props) => {
  const data = props.data
  const { url } = useRouteMatch()

  return (
    <Link to={`${url}/${data.id}`} style={linkStyle}>
      <div className={stylesCard.wrapper}>
        <div className={stylesCard.infoKiosk}>
          <div
            className={data.isLaunched === true ? stylesCard.statOnline : stylesCard.statOffline}
          />
          <div className={stylesCard.info}>
            <h4 className={stylesCard.name}>{data.title || data.machineName}</h4>
            <p className={stylesCard.description}>{data.description || 'Описание отстуствует'}</p>
          </div>
        </div>
        <div className={stylesCard.version}>{data.version}</div>
        <p className={stylesCard.namePC}>{data.machineName}</p>
      </div>
    </Link>
  )
}
export default Card
