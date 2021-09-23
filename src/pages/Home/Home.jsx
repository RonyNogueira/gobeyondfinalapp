import React from "react";
import {Button, HeroBanner} from "../../components";
import img from "../../assets/img/thumb.png"
const Home = ()=>{
    return(
        <main className='container home'>
            <div className="home__content">
                <article className='home__content__left'>

                    <h1 className='home__title'>a Corebiz atua em toda jornada digital do usuário.</h1>


                    <Button
                        text='veja mais'
                    />

                    <div className="home__content__thumbs">
                        <div className='home__content__thumbs__thumb'>
                            <img src={img} alt=""/>
                        </div>

                        <div className='home__content__thumbs__thumb'>
                            <img src={img} alt=""/>
                        </div>

                        <div className='home__content__thumbs__thumb'>
                            <img src={img} alt=""/>
                        </div>

                        <div className='home__content__thumbs__thumb'>
                            <img src={img} alt=""/>
                        </div>
                    </div>

                </article>
                <section className="home__content__right">
                    <HeroBanner/>
                </section>
            </div>


        </main>
    )
}

export { Home }