import { DARK_THEME, FLAT_THEME_8PX_OLD, Select, ThemeContext, ThemeFactory } from "@skbkontur/react-ui";
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main"

export default function App() {

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}