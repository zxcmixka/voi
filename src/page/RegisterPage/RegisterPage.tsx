import s from "./register.module.css"
import { Link } from "react-router-dom"
import user from "./img/user.png"
import pass from "./img/pass.png"


export const RegisterPage = () => {

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
                 <div className={s.stroka}> 
                    <input type="password" placeholder="Repeat Password"/>
                    <img src={pass}/>
                </div>
                <button>Continue</button>
                <h3>If you have an account: <Link to="/login" className={s.link}>Sign In </Link></h3>
            </div>
        </div>
    )
}