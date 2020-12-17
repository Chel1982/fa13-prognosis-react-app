import React from "react";
import Button from '@material-ui/core/Button';
import HeaderCss from "./Header.module.css";

const Header = () => {
    return (
        <header className={HeaderCss.headerMain}>
            <div className={HeaderCss.divImage}> </div>
            <div className={HeaderCss.season}> </div>
            <div className={HeaderCss.community}>
                Проект является добровольным творением fa13-сообщества, а конкретно менеджера
                Эндрю из чемпионата Австрии, команды Вёргл.
            </div>
            <div className={HeaderCss.login}>
                <Button variant="contained" color="primary">
                    Вход
                </Button>
            </div>
            <div className={HeaderCss.register}>
                <Button variant="contained" color="secondary">
                    Регистрация
                </Button>
            </div>

        </header>
    );
}

export default Header;