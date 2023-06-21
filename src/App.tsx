import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header/Header'
import Main from './Main/Main'

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}
