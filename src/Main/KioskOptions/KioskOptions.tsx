import React, { useEffect } from 'react'
import styles from './KioskOptions.module.css'
import {
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import Common from './Common/Common'
import getData from '../api'
import NavigationKiosk from './NavigationKiosk/NavigationKiosk'
import arrow from './arrow.svg'
import { Kiosk } from '../types'

const KioskOptions: React.FC = () => {
  const [data, setData] = React.useState<Kiosk>()
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
            <Link to={`${url}/NavigationKiosk`}>
              <img src={arrow} alt='arrow_back' className={styles.arrowLeft} />
            </Link>
            <p className={styles.name_header}>Настройки: {data.title || data.machineName}</p>
            <Link to={`/kiosks`} className={styles.close}></Link>
          </div>
          <div className={styles.navMobile}>
            <Switch>
              <Route path={`${path}/NavigationKiosk`}>
                <NavigationKiosk isActive={isActive} url={url} />
              </Route>
            </Switch>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.navDesktop}>
              <NavigationKiosk isActive={isActive} url={url} />
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
                <Redirect from={`${path}/`} to={`${path}/common`} />
                {/* <Route path={`${path}/`}>
                  <Common data={data} />
                </Route> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default KioskOptions
