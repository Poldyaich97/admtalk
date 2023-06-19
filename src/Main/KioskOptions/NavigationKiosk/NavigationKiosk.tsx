import React from 'react'
import styles from './NavigationKiosk.module.css'
import LeftBtn from '../LeftBtn/LeftBtn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavigationKiosk: React.FC<any> = (props) => {
  return (
    <div className={`${styles.info_left}`}>
      <LeftBtn
        isActive={props.isActive}
        section='common'
        url={`${props.url}/common`}
        name='Общие'
      />
      <LeftBtn isActive={props.isActive} section='audio' url={`${props.url}/audio`} name='Аудио' />
      <LeftBtn isActive={props.isActive} section='video' url={`${props.url}/video`} name='Видео' />
      <LeftBtn
        isActive={props.isActive}
        section='devices'
        url={`${props.url}/devices`}
        name='Устройства'
      />
      <LeftBtn
        isActive={props.isActive}
        section='updates'
        url={`${props.url}/updates`}
        name='Обновление'
      />
      <LeftBtn isActive={props.isActive} section='other' url={`${props.url}/other`} name='Прочее' />
    </div>
  )
}
export default NavigationKiosk
