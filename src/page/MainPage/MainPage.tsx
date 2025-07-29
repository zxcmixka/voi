import React from "react"
import s from "./mainPage.module.css"
import pirat from './img/pirat.jpg'
import { Link } from "react-router-dom"


export const MainPage = () =>{
    return(
    <div>
        <div className={s.PapaCard}>
            <div className={s.card}>
                <img className={s.pirat} src={pirat} alt="klasnaya kartinka" />   
            </div>
        </div>
        
    </div>
    )
}