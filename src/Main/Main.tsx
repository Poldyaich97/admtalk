import styles from "./Main.module.css";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Card from "./Card/Card";
import Kiosk from "./Kiosk/Kiosk";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import containerStyle from "../Container/Container.module.css"

import { ThemeContext, DARK_THEME, Select } from '@skbkontur/react-ui';
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
                <Route path="/kiosks/:id">
                  <Kiosk />
                </Route>
                <Route path="/kiosks">
                  <Kiosks />
                </Route>
                <Route path="/">
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </main>
  );
}

function Kiosks() {
  const [filter, setFilter] = React.useState("");
  const items = [['', 'Все'], 'Екатеринбург', 'Новосибирск', 'Москва', 'Санкт-Петербург', 'Воронеж', 'Волгоград'];
  const [data, setData] = React.useState<{ title: string; description: string | undefined; machineName: string; version: string; id: string; isLaunched: string; }[]>();
  useEffect(() => {
    async function main() {
      const kiosk = await getData();
      setData(kiosk.kiosks);
    }
    main();
  }, [])

  if (!data) {
    return <div>Загружается</div>
  } else {
    return (
      < div className={styles.wrapper} >
        <ThemeContext.Provider value={DARK_THEME}>
          <Select<string> className={styles.select} items={items} value={filter} onValueChange={setFilter} search />
        </ThemeContext.Provider>
        <div className={styles.info}>
          <p className={styles.name}>Имя киоска</p>
          <p>Версия</p>
          <p>Имя ПК</p>
        </div>
        <div className={styles.line}></div>
        {
          data.filter(e => {
            if (e.description == undefined) {
              e.description = ""
              return e.description.indexOf(filter) != -1
            } else {
              return e.description.indexOf(filter) != -1
            }
          }).map((element, pos) => (
            <div key={pos}>
              <Card
                name={element.title || element.machineName}
                description={element.description || ""}
                machineName={element.machineName}
                version={element.version}
                id={element.id}
                isLaunched={element.isLaunched} />
            </div>
          ))
        }
      </div >)
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
      <p>Пока тут ничего нет</p>
    </div>
  )
}



const myHeaders = new Headers();

myHeaders.append("X-Auth-Token", process.env.REACT_APP_KEY!);




const requestOptions = {
  method: 'GET',
  headers: myHeaders
};
async function getData() {
  const data = await fetch("https://kontur.ktalk.ru/api/kiosk?pageSize=1000", requestOptions)
  const content = await data.json()
  return content;
}
