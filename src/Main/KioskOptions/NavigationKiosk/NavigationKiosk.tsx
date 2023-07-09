import React from 'react'
import styles from './NavigationKiosk.module.css'
import LeftBtn from '../LeftBtn/LeftBtn'

interface NavigationKioskProps {
  activeTab: string
  url: string
}

const NavigationKiosk: React.FC<NavigationKioskProps> = (props) => {
  return (
    <div className={`${styles.info_left}`}>
      <LeftBtn
        activeTab={props.activeTab}
        section='common'
        url={`${props.url}/common`}
        name='Общие'
      />
      <LeftBtn
        activeTab={props.activeTab}
        section='audio'
        url={`${props.url}/audio`}
        name='Аудио'
      />
      <LeftBtn
        activeTab={props.activeTab}
        section='video'
        url={`${props.url}/video`}
        name='Видео'
      />
      <LeftBtn
        activeTab={props.activeTab}
        section='devices'
        url={`${props.url}/devices`}
        name='Устройства'
      />
      <LeftBtn
        activeTab={props.activeTab}
        section='updates'
        url={`${props.url}/updates`}
        name='Обновление'
      />
      <LeftBtn
        activeTab={props.activeTab}
        section='other'
        url={`${props.url}/other`}
        name='Прочее'
      />
    </div>
  )
}
export default NavigationKiosk
