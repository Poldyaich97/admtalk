import { Kiosk } from "./types"



export default async function getData(props: string) {
  const data = await fetch(`https://zb7zafqxjh.api.quickmocker.com/${props}`)
  const content = await data.json()
  return content
}



export function getKiosks():Promise<{ kiosks: Kiosk[] }> {
  return getData(`kiosks`)
}

export async function getKiosk(id: string): Promise<Kiosk> {
  const data = await getData('kiosks'); 
  return data.kiosks.find((kiosk: { id: string }) => kiosk.id === id)
}



