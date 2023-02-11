import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import stylesCard from './/Common.module.css'

const linkStyle = {
  textDecoration: 'none',
}

const Common: React.FC<any> = (props) => {
  console.log(props)
  return (
    <div className={stylesCard.wrapper}>
      <h4 className={stylesCard.information}>Параметры</h4>
    </div>
  )
}
export default Common
