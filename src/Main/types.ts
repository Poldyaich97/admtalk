export interface Kiosk {
  isLaunched?: boolean
  title?: string
  description?: string | undefined
  machineName?: string
  version?: string
  id?: string
  kioskKey?: string
  activeTab?: string
  url?: string
}


export interface BtnProps {
  section: string
  activeTab: string
  name: string
  url: string
}
export interface CardProps {
  data: Kiosk
}