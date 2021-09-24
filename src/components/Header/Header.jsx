import React, {useState} from "react";
import logo from "../../assets/img/logo-corebiz-global.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, } from '@fortawesome/free-solid-svg-icons'

const Header = ()=>{
    const [menuOpen, setMenuOpen] = useState(false)

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

            <div className="header__mob-nav">
                <div className="header__mob-nav__content">
                    <a href="https://www.corebiz.ag/pt/" target='_blank'>
                        <img src={logo} className="header__container__logo" alt="logo da corebiz"/>
                    </a>

                        <div onClick={()=> setMenuOpen(!menuOpen)} className="header__mob-nav__content__menu-bars">
                            <FontAwesomeIcon className="btn-open" icon={faBars} size={"lg"}/>
                        </div>

                </div>

                <div className={menuOpen ? 'header__mob-nav__menu active' : 'header__mob-nav__menu'}>
                    <ul>
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
                </div>
            </div>
        </header>

    )
}

export { Header }