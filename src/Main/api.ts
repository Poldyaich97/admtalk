import { Kiosk } from "./types"
import testKiosk from "./testKiosk.json"

async function getData(props: string) {
  const data = getLocalData(props)
  return data
}

function getLocalData(props: string) {
  return testKiosk;
}

async  function getServerData(props: string) {
    const data = await fetch(`https://othbajv2fw.api.quickmocker.com/${props}`)
    const content = await data.json()
    return content
}

export function getKiosks():Promise<{ kiosks: Kiosk[] }> {
  return getData(`kiosks`)
}

export async function getKiosk(id: string): Promise<Kiosk | undefined> {
  const data = await getData('kiosks'); 
  return data.kiosks.find((kiosk: { id: string }) => kiosk.id === id)
}



