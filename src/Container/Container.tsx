import React from 'react'
import styles from './Container.module.css'
export const Container: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
