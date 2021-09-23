import React, {useEffect, useState} from "react";
import {Button, HeroBanner} from "../../components";
import {useListImagesQuery} from "../../services/photos/requests";
import Skeleton from "react-loading-skeleton";

const Home = ()=>{
    const [imgData, setImgData] = useState({
        url:"",
        title:""
    })
    const { data, isLoading } = useListImagesQuery()

    const  handleData = (url, title)=>{
        setImgData({
            url,
            title
        })
    }

    useEffect(()=>{
        if (!isLoading)
            setImgData({
                url:data[0].url,
                title:data[0].title
            })
    },[data, isLoading])

    return(
        <main className='container home'>
            <div className="home__content">
                <article className='home__content__left'>

                    <h1  className='home__title'>{imgData.title}</h1>

                    <Button
                        text='veja mais'
                    />

                    <div className="home__content__thumbs">
                        {
                            data?.map((pic)=>(
                                <div key={pic.id} className='home__content__thumbs__thumb'>
                                    <img onClick={()=>{handleData(pic.url, pic.title)}} src={pic.url} alt=""/>
                                </div>
                            ))
                        }

                    </div>

                </article>
                <section className="home__content__right">
                    {
                        !isLoading  ? <HeroBanner imgUrl={imgData.url}/> : <Skeleton height={667}/>
                    }

                </section>
            </div>


        </main>
    )
}

export { Home }