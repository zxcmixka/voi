import React, { useState } from "react";
import s from './header.module.css'
import setting from './img/setting.png'


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
                <div className={s.name}>VoI</div>
            </div>

            <div className={s.setting} onClick={toggleMenu}>
                <img src={setting} className={s.settingicon} alt="Settings" />
            </div>

            {isOpen && (
                <div className={s.menu}>
                    <ul>
                        <li>Profile Settings</li>
                        <li>Quit</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
