export  interface Kiosk {
    isLaunched: boolean
    title: string
    description: string | undefined
    machineName: string
    version: string
    id: string
    kioskKey:string
    isActive:string
  }

export interface InformProps {
  parmOne: string
  parmTwo: string
}

export interface BtnProps {
  section: string
  isActive: string
  name: string
  url: string
}