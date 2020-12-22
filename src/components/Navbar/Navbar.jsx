import React from 'react';
import NavBarCss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={NavBarCss.navbar}>
            <NavLink className={NavBarCss.item} to="/regulars">
                <i className={NavBarCss.regulars}></i> Чемпионаты стран
            </NavLink>

            <NavLink className={NavBarCss.item} to="/cup">
                <i className={NavBarCss.cup}></i> Кубки стран
            </NavLink>

            <NavLink className={NavBarCss.item} to="/champions-league">
                <i className={NavBarCss.championsLeague}></i> Лига Чемпионов
            </NavLink>

            <NavLink className={NavBarCss.item} to="/associations-cup">
                <i className={NavBarCss.cup}></i> Кубок Ассоциации
            </NavLink>

            <NavLink className={NavBarCss.item} to="/federations-cup">
                <i className={NavBarCss.cup}></i> Кубок Федераций
            </NavLink>
        </nav>
    );
}

export default Navbar;