import React from "react";
import logo from "../../assets/img/logo-corebiz-global.svg"
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <header className="header">
            <nav className="header__container">
                <Link to={"/"}>
                    <img src={logo} className="header__container__logo" alt="logo da corebiz"/>
                </Link>
                <ul className="header__container__list">
                    <li>
                        <a href="#">a corebiz</a>
                    </li>
                    <li>
                        <a href="#">serviços</a>
                    </li>
                    <li>
                        <a href="#">cases</a>
                    </li>
                    <li>
                        <a href="#">contato</a>
                    </li>

                </ul>
            </nav>
        </header>

    )
}

export { Header }