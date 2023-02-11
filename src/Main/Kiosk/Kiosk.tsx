import React, { useEffect } from 'react'
import styles from './Kiosk.module.css'
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import Common from './Common/Common'

const Kiosk: React.FC<any> = (props) => {
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
  const array = location.pathname.split('/')
  const isActive = array[array.length - 1]
  const commonIsActive = isActive === 'common'

  useEffect(() => {
    async function kiosk() {
      const data = await getData(id)
      setData(data)
    }
    kiosk()
  }, [])
  if (!data) {
    return <h1>Загружается</h1>
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <div className={styles.headerMenu}>
            <div className={styles.title_header}>
              <p className={styles.name_header}>{data.title}</p>
            </div>
            <div className={styles.close_btn}>
              <Link to='/kiosks' className={styles.close}></Link>
            </div>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>
              <div className={styles.left_btn}>
                <Link className={commonIsActive ? styles.btn_active : ''} to={`${url}/common`}>
                  Общие
                </Link>
              </div>
              <div className={styles.left_btn}>
                <Link className={isActive === 'audio' ? styles.btn_active : ''} to={`${url}/audio`}>
                  Аудио
                </Link>
              </div>
              <div className={styles.left_btn}>
                <Link className={isActive === 'video' ? styles.btn_active : ''} to={`${url}/video`}>
                  Видео
                </Link>
              </div>
              <div className={styles.left_btn}>
                <Link
                  className={isActive === 'devices' ? styles.btn_active : ''}
                  to={`${url}/devices`}
                >
                  Устройства
                </Link>
              </div>
              <div className={styles.left_btn}>
                <Link
                  className={isActive === 'updates' ? styles.btn_active : ''}
                  to={`${url}/updates`}
                >
                  Обновления
                </Link>
              </div>
              <div className={styles.left_btn}>
                <Link className={isActive === 'other' ? styles.btn_active : ''} to={`${url}/other`}>
                  Другое
                </Link>
              </div>
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

const myHeaders = new Headers()
myHeaders.append('X-Auth-Token', process.env.REACT_APP_KEY!)

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
}
async function getData(id: string) {
  const data = await fetch(`https://kontur.ktalk.ru/api/kiosk/${id}`, requestOptions)
  const content = await data.json()
  return content
}
