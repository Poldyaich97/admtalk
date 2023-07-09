import React, { useEffect, useRef } from 'react'
import styles from './KioskOptions.module.css'
import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import Common from './Common/Common'
import { getKiosk } from '../api'
import NavigationKiosk from './NavigationKiosk/NavigationKiosk'
import arrow from './arrow.svg'
import { Kiosk } from '../types'

const KioskOptions: React.FC = () => {
  const [data, setData] = React.useState<Kiosk>()
  const { id } = useParams<{ id: string }>()
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const currentLocation = location.pathname.split('/')
  const activeTab = currentLocation[currentLocation.length - 1]
  const [isError, setIsError] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(window.outerWidth < 480)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 480)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const modalRef = useRef(null)
  const history = useHistory()
  const back = (e: any) => {
    if (e.target === modalRef.current) {
      history.push('/kiosks')
    }
  }

  useEffect(() => {
    async function kiosk() {
      try {
        const data = await getKiosk(id)
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
      <div onClick={back} ref={modalRef} className={styles.modal}>
        <div className={styles.menu}>
          <div className={styles.headerMenu}>
            <Link to={`${url}/navigation`}>
              <img src={arrow} alt='arrow_back' className={styles.arrowLeft} />
            </Link>
            <p className={styles.name_header}>Настройки: {data.title || data.machineName}</p>
            <Link to={`/kiosks`} className={styles.close}></Link>
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.navDesktop}>
              <NavigationKiosk activeTab={activeTab} url={url} />
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
                {isMobile ? (
                  <React.Fragment>
                    <Route path={`${path}/navigation`}>
                      <NavigationKiosk activeTab={activeTab} url={url} />
                    </Route>
                    <Redirect from={`${path}/`} to={`${path}/navigation`} />
                  </React.Fragment>
                ) : (
                  <Redirect from={`${path}/`} to={`${path}/common`} />
                )}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default KioskOptions
