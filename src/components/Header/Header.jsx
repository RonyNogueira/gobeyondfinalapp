import React from "react";
import logo from "../../assets/img/logo-corebiz-global.svg"
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <header className="header">
            <nav className="header__container">
                <a href="https://www.corebiz.ag/pt/" target='_blank'>
                    <img src={logo} className="header__container__logo" alt="logo da corebiz"/>
                </a>
                <ul className="header__container__list">
                    <li>
                        <a href="https://www.corebiz.ag/pt/about/" target='_blank'>a corebiz</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/#framework-title" target='_blank'>serviços</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/cases/" target='_blank'>cases</a>
                    </li>
                    <li>
                        <a href="https://www.corebiz.ag/pt/contato/" target='_blank'>contato</a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}

export { Header }