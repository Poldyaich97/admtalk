import React, { useEffect } from 'react'
import styles from './Kiosk.module.css'
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import Common from './Common/Common'
import getData from '../api'

const Kiosk: React.FC<any> = () => {
  const [data, setData] = React.useState<{
    title: string
    description: string | undefined
    machineName: string
    version: string
    id: string
  }>()
  const { id } = useParams<{ id: string }>()
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const currentLocation = location.pathname.split('/')
  const isActive = currentLocation[currentLocation.length - 1]
  const [isError, setIsError] = React.useState(false)

  useEffect(() => {
    async function kiosk() {
      try {
        const data = await getData(`/${id}`)
        setData(data)
      } catch (error) {
        setIsError(true)
      }
    }
    kiosk()
  }, [])
  if (isError) {
    return <h1>Ошибка загрузки</h1>
  }
  if (!data) {
    return <h1>Загружается</h1>
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <div className={styles.headerMenu}>
            <div className={styles.title_header}>
              <p className={styles.name_header}>Настройки: {data.title || data.machineName}</p>
            </div>
            <div className={styles.close_btn}>
              <Link to='/kiosks' className={styles.close}></Link>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>
              <Link
                className={`${styles.left_btn} + ${isActive === 'common' ? styles.btn_active : ''}`}
                to={`${url}/common`}
              >
                Общие
              </Link>

              <Link
                className={`${styles.left_btn} + ${isActive === 'audio' ? styles.btn_active : ''}`}
                to={`${url}/audio`}
              >
                Аудио
              </Link>

              <Link
                className={`${styles.left_btn} + ${isActive === 'video' ? styles.btn_active : ''}`}
                to={`${url}/video`}
              >
                Видео
              </Link>

              <Link
                className={`${styles.left_btn} + ${
                  isActive === 'devices' ? styles.btn_active : ''
                }`}
                to={`${url}/devices`}
              >
                Устройства
              </Link>

              <Link
                className={`${styles.left_btn} + ${
                  isActive === 'updates' ? styles.btn_active : ''
                }`}
                to={`${url}/updates`}
              >
                Обновления
              </Link>

              <Link
                className={`${styles.left_btn} + ${isActive === 'other' ? styles.btn_active : ''}`}
                to={`${url}/other`}
              >
                Другое
              </Link>
            </div>
            <div className={styles.info_right}>
              <Switch>
                <Route path={`${path}/common`}>
                  <Common data={data} />
                </Route>
                <Route path={`${path}/audio`}>
                  <div>audio</div>
                </Route>
                <Route path={`${path}/video`}>
                  <div>video</div>
                </Route>
                <Route path={`${path}/devices`}>
                  <div>devices</div>
                </Route>
                <Route path={`${path}/updates`}>
                  <div>updates</div>
                </Route>
                <Route path={`${path}/other`}>
                  <div>other</div>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Kiosk

// const myHeaders = new Headers()
// myHeaders.append('X-Auth-Token', process.env.REACT_APP_KEY!)

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
// }
// async function getData(id: string) {
//   const data = await fetch(`https://kontur.ktalk.ru/api/kiosk/${id}`, requestOptions)
//   const content = await data.json()
//   return content
// }
