import React from "react"
import logoFooter from "../../assets/img/logo-corebiz-black.svg"
const Footer = ()=>{
    return(
        <section>
            <footer className="footer">
                <div className='footer__social'>
                    <div className='footer__social__logo'>
                        <img className='footer__social__logo__img' src={logoFooter} alt=""/>
                        <span className='footer__social__rights'>direitos reservados, corebiz 2021</span>
                        social
                    </div>

                    <div className='footer__social__menu'>
                        <ul>
                            <li>
                                <a href="">a corebiz</a>
                            </li>
                            <li>
                                <a href="">serviços</a>
                            </li>
                            <li>
                                <a href="">cases</a>
                            </li>
                            <li>
                                <a href="">contato</a>
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