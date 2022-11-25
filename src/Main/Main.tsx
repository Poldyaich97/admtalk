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
      <Card />
      <Card />
      <Card />
      <Card />
    </div>)
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

const data = fetch("https://kontur.ktalk.ru/api/kiosk", requestOptions)
.then(res => (res.json()))
.then(data =>  console.log(data))

// async function getData() {
//   const data = await fetch("https://kontur.ktalk.ru/api/kiosk", requestOptions)
//   const content = await data.json().then(result => console.log(result))
//   // console.log(content)
//   // console.log(content.kiosks[1].configuration)



// }
// getData();