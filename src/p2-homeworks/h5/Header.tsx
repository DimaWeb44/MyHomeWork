import React from 'react'
import {PATH} from './Routes'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.hamburger_menu}>
            <input id={s.menu__toggle} type="checkbox"/>
            <label className={s.menu__btn} htmlFor={s.menu__toggle}>
                <span></span>
            </label>
            <div className={s.menu__box}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.menu__item}> PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.menu__item}> Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.menu__item}> JuniorPlus</NavLink>
            </div>
        </div>
    )
}

export default Header
