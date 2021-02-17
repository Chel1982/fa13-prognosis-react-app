import React from "react";
import HeaderCss from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    if (props.auth.isAuth) {
        return (
            <header className={HeaderCss.headerMain}>
                <NavLink className={HeaderCss.divImage} to="/"> </NavLink>
                <div className={HeaderCss.season}> </div>
                <div className={HeaderCss.community}>
                    Проект является добровольным творением fa13-сообщества. Если у кого-нибудь
                    возникнет желание помочь проекту, реквизиты снизу.
                </div>
                <div className={HeaderCss.loginDiv}>
                    <span className={HeaderCss.nameUser}>
                        {props.auth.name}
                    </span>
                </div>
                <div className={HeaderCss.registerDiv}>
                    <button
                        className={HeaderCss.register}
                        onClick={props.logoutThunk}>
                        Выход
                    </button>
                </div>
            </header>
            )

    }
    return (
        <header className={HeaderCss.headerMain}>
            <NavLink className={HeaderCss.divImage} to="/"> </NavLink>
            <div className={HeaderCss.season}> </div>
            <div className={HeaderCss.community}>
                Проект является добровольным творением fa13-сообщества. Если у кого-нибудь
                возникнет желание помочь проекту, реквизиты снизу.
            </div>
            <div className={HeaderCss.loginDiv} >
                <NavLink to="/login" className={HeaderCss.login}>
                    Вход
                </NavLink>
            </div>
            <div className={HeaderCss.registerDiv}>
                <NavLink to="/register" className={HeaderCss.register}>
                    Регистрация
                </NavLink>
            </div>
        </header>
    )
}

export default Header;