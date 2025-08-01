import s from "./login.module.css"
import { Link } from "react-router-dom"
import user from "./img/user.png"
import pass from "./img/pass.png"


export const LoginPage = () => {

    return(
        <div className={s.okno}>
            <div className={s.input}>
                <h1 className={s.link}>VoI</h1>
                <h1 className={s.link}>Welcome</h1>
                <div className={s.stroka}> 
                    <input type="text" placeholder="Username" src={user}/>
                    <img src={user} />
                </div>
                <div className={s.stroka}> 
                    <input type="password" placeholder="Password"/>
                    <img src={pass}/>
                </div>
                <button>Continue</button>
                <h3>If you don't have an account: <Link to="/register" className={s.link}>Sign Up </Link></h3>
            </div>
        </div>
    )
}