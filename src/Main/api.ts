const myHeaders = new Headers()

myHeaders.append('X-Auth-Token', process.env.REACT_APP_KEY!)

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
}
export default async function getData(props: any) {
  const data = await fetch(`https://kontur.ktalk.ru/api/kiosk${props}`, requestOptions)
  const content = await data.json()
  return content
}
