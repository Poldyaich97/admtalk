import React, { useEffect } from 'react'
import styles from './Kiosk.module.css'
import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router-dom'
import Common from './Common/Common'
import getData from '../api'
import LeftBtn from './LeftBtn/LeftBtn'

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
            <p className={styles.name_header}>Настройки: {data.title || data.machineName}</p>
            <Link to='/kiosks' className={styles.close}></Link>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_left}>
              <LeftBtn isActive={isActive} section='common' url={`${url}/common`} name='Общие' />
              <LeftBtn isActive={isActive} section='audio' url={`${url}/audio`} name='Аудио' />
              <LeftBtn isActive={isActive} section='video' url={`${url}/video`} name='Видео' />
              <LeftBtn
                isActive={isActive}
                section='devices'
                url={`${url}/devices`}
                name='Устройства'
              />
              <LeftBtn
                isActive={isActive}
                section='updates'
                url={`${url}/updates`}
                name='Обновление'
              />
              <LeftBtn isActive={isActive} section='other' url={`${url}/other`} name='Прочее' />
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
