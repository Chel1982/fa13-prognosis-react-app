import React from 'react';
import NavBarCss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={NavBarCss.navbar}>
            <NavLink className={NavBarCss.item} to="/regulars">
                <i className={NavBarCss.regulars}></i> Чемпионаты стран
            </NavLink>

            <NavLink className={NavBarCss.item} to="/cups">
                <i className={NavBarCss.cup}></i> Кубки стран
            </NavLink>

            {/*<NavLink className={NavBarCss.noAction} to="/champions-league">*/}
            <div className={NavBarCss.noAction} title="В процессе разработки">
                <i className={NavBarCss.championsLeague}></i> Лига Чемпионов
            </div>
            {/*</NavLink>*/}

            {/*<NavLink className={NavBarCss.noAction} to="/associations-cup">*/}
            <div className={NavBarCss.noAction} title="В процессе разработки">
                <i className={NavBarCss.cup}></i> Кубок Ассоциации
            </div>
            {/*</NavLink>*/}

            {/*<NavLink className={NavBarCss.noAction} to="/federations-cup">*/}
            <div className={NavBarCss.noAction} title="В процессе разработки">
                <i className={NavBarCss.cup}></i> Кубок Федераций
            </div>
            {/*</NavLink>*/}
        </nav>
    );
}

export default Navbar;