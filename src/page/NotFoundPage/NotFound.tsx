import logo from "./img/logo.png"
import s from "./notfound.module.css"

export const NotFoundPage = () => {
    return(
        <div>
            <div className={s.error}>
                <h1>4</h1> 
                <img src={logo} className={s.logo} alt="0" /> 
                <h1>4</h1>
            </div>
        </div>
    )
}