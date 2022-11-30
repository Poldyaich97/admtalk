import styles from "./Main.module.css";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Card from "./Card/Card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import containerStyle from "../Container/Container.module.css"
import { Select } from "@skbkontur/react-ui/cjs/components/Select/Select";
import { useEffect } from "react";


export default function Header() {

  return (
    <main className={styles.main}>
      <div className={containerStyle.container}>
        <div className={styles.mainBg}>
          <Router>
            <div>
              <Navigation />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </main>
  );
}

function Home() {
  const [value, setValue] = React.useState("");
  const items = ['Екатеринбург', 'Челябинск', 'Москва', 'Санкт Петербург'];
  const [data, setData] = React.useState<{ name: string; description: string; machineName: string; version: string }[]>();
  useEffect(() => {
    async function main() {
      const kiosk = await getData();
      setData(kiosk.kiosks);
    }
    main();
  }, [])
  console.log("data", data);

  if (!data) {
    return <div>Загружается</div>
  } else {


    return (
      <div className={styles.wrapper}>
        <Select<string> items={items} value={value} onValueChange={setValue} search />
        <div className={styles.info}>
          <p className={styles.name}>Имя киоска</p>
          <p>Статус киоска</p>
          <p>Версия</p>
          <p>Имя ПК</p>
        </div>
        <div className={styles.line}></div>
        {data.map((element, pos) => (
          <div key={pos}>
            <Card
              name={element.name}
              description={element.description}
              machineName={element.machineName}
              version={element.version} />
          </div>
        ))}
      </div>)
  }
}

function About() {
  return (
    <div>
      <h2>Переговорки</h2>
      <p>Пока тут ничего нет</p>
    </div>)
}

function Users() {
  return (
    <div >
      <h2>Че-то там еще</h2>
      <p>Пока тут ничего нет</p></div>)
}


const myHeaders = new Headers();
myHeaders.append("X-Auth-Token", "");



const requestOptions = {
  method: 'GET',
  headers: myHeaders
};
async function getData() {
  const data = await fetch("https://kontur.ktalk.ru/api/kiosk?pageSize=1000", requestOptions)
  const content = await data.json()
  return content;
}