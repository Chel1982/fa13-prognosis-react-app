import React from "react";
import HeaderCss from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={HeaderCss.headerMain}>
            <NavLink className={HeaderCss.divImage} to="/"> </NavLink>
            <div className={HeaderCss.season}> </div>
            <div className={HeaderCss.community}>
                Проект является добровольным творением fa13-сообщества, а конкретно менеджера
                Эндрю из чемпионата Австрии, команды Вёргл.
            </div>
            <div className={HeaderCss.loginDiv} >
                <button className={HeaderCss.login}>
                    Вход
                </button>
            </div>
            <div className={HeaderCss.registerDiv}>
                <button className={HeaderCss.register}>
                    Регистрация
                </button>
            </div>
        </header>
    );
}

export default Header;