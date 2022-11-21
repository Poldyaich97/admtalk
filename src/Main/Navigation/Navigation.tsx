import React from "react";
import stylesNav from "./Navigation.module.css"
import {
    BrowserRouter as  
    Route,
    Link
  } from "react-router-dom";

export default function Navigation() {
    
    return (
        <div className={stylesNav.wrapper}>
                  <div>
                      <nav>
                          <ul>
                              <li>
                                  <Link to="/kiosk">Киоски</Link>
                              </li>
                              <li>
                                  <Link to="/about">Переговорки</Link>
                              </li>
                               <li>
                                  <Link to="/users">Че-то там еще</Link>
                              </li>
                          </ul>
                   </nav>

              </div>
         </div>
    )}