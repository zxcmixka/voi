import React, { useState } from "react";
import s from './header.module.css'
import setting from './img/setting.png'
import { Link } from 'react-router-dom';
import logo from "./img/logo.png"


const user = "paha"; // под бек
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.Papaheader}>
            <div className={s.hello}>hello, {user}!</div>

            <div className={s.PapaName}>
                <div className={s.name}><Link to="/" className={s.linkmain}>VoI</Link></div>
                <img src={logo} className={s.logo} />
            </div>

            <div className={s.setting} onClick={toggleMenu}>
                <img src={setting} className={s.settingicon} alt="Settings" />
            </div>

            {isOpen && (
                <div className={s.menu}>
                    <ul> 
                        <Link to="/login" className={s.link}>Sing In</Link>
                        <Link to="/about" className={s.link}>About</Link>
                    </ul>
                </div>
            )}
        </div>
    );
}
