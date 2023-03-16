import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import stylesCard from './/Card.module.css'

const linkStyle = {
  textDecoration: 'none',
}

const Card: React.FC<any> = (props) => {
  const data = props.data
  const { path, url } = useRouteMatch()

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
        <div className={stylesCard.namePC}>{data.machineName}</div>
      </div>
    </Link>
  )
}
export default Card
