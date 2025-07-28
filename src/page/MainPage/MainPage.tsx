import React from "react"
import style from "./mainPage.module.css"
import pirat from "./img/pirat.jpg"
import { Link } from "react-router-dom"


export const MainPage = () =>{
    return(
    <div>
        <div className={style.PapaName}>
            <div className={style.name}>VoI</div>
        </div>
        <div className={style.PapaCard}>
            <div className={style.card}>
                <Link>
                <img src={pirat} alt="klasnaya kartinka" />
                </Link>
            </div>
        </div>
        
    </div>
    )
}