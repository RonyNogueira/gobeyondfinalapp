import React from "react"
import logoFooter from "../../assets/img/logo-corebiz-black.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Footer = ()=>{
    return(
        <section>
            <footer className="footer">
                <div className='footer__social'>
                    <div className='footer__social__logo'>
                        <a href="https://www.corebiz.ag/pt/" target='_blank' rel="noreferrer">
                            <img className='footer__social__logo__img' src={logoFooter} alt=""/>
                        </a>
                        <span className='footer__social__rights'>direitos reservados, corebiz 2021</span>

                        <div className='footer__social__logo__social-icons'>
                            <a href="https://www.facebook.com/corebiz.ag/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </a>
                            <a href="https://www.instagram.com/corebizag/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="https://www.linkedin.com/company/corebiz-brasil/" target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>

                        </div>
                    </div>

                    <div className='footer__social__menu'>
                        <ul>
                            <li>
                                <a href="https://www.corebiz.ag/pt/about/" target='_blank' rel="noreferrer">a corebiz</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/#framework-title" target='_blank' rel="noreferrer">serviços</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/cases/" target='_blank' rel="noreferrer">cases</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/contato/" target='_blank' rel="noreferrer">contato</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='footer__address'>
                    <ul>
                        <li>.Brasil</li>
                        <li>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP</li>
                        <li>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</li>
                    </ul>

                    <ul>
                        <li>.Argentina</li>
                        <li>.Argentina Soler 5518, 3 Piso C1425BYF <br/>Palermo Hollywood CABA</li>
                    </ul>

                    <ul>
                        <li>.México</li>
                        <li>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</li>

                    </ul>

                    <ul>
                        <li>.Chile </li>
                        <li>Roberto del Río 1137, Providencia.</li>
                    </ul>
                </div>
            </footer>
        </section>
    )
}

export { Footer }