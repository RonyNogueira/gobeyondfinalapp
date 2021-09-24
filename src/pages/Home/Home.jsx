import React, {useEffect, useState} from "react";
import {Button, HeroBanner} from "../../components";
import {useListImagesQuery} from "../../services/photos/requests";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const Home = ()=>{
    const [imgData, setImgData] = useState({
        id:0,
        url:"",
        title:""
    })
    const { data, isLoading } = useListImagesQuery()

    const  handleData = (url, title, id)=>{
        setImgData({
            id,
            url,
            title
        })
    }

    const skeletons = [0, 1, 2, 3]

    useEffect(()=>{
        if (!isLoading)
            setImgData({
                id:data[0].id,
                url:data[0].url,
                title:data[0].title
            })
    },[data, isLoading])

    return(
        <main className='container home'>
            <div className="home__content">
               <div className="home__content__grid-title">
                   {
                       !isLoading ? <h1 className='home__title'>{imgData.title}</h1> :
                           <SkeletonTheme color="#353b48" highlightColor="#F4F4F4">

                               <Skeleton className="home__title__skeleton first"/>

                               <Skeleton className="home__title__skeleton"/>

                               <Skeleton className="home__title__skeleton"/>

                           </SkeletonTheme>

                   }
               </div>

                <div className='home__content__grid-button'>
                    <a className='home__content__left__link' href="https://www.corebiz.ag/pt/" target='_blank'>
                        <Button
                            text='veja mais'
                            btnClass='home__content__btn-more'
                            useIcon={true}
                            icon={faChevronCircleRight}
                        />
                    </a>
                </div>

                    <div className="home__content__grid-thumbs home__content__thumbs">
                        {
                            !isLoading ?
                            data?.map((pic, index)=>(
                                <div key={pic.id} className={ pic.id === imgData.id ? `home__content__thumbs__thumb active` :  `home__content__thumbs__thumb` }>
                                    <img onClick={()=>{handleData(pic.url, pic.title, pic.id)}} src={pic.thumbnailUrl} alt={pic.title}/>
                                </div>
                            )):
                                skeletons.map((index)=>(
                                        <div key={index} className='home__content__thumbs__thumb'>
                                            <SkeletonTheme color="#353b48" highlightColor="#718093">
                                                <Skeleton height={65}/>
                                            </SkeletonTheme>
                                        </div>
                                    ))

                        }

                    </div>

                <div className="home__content__grid-banner">
                    {
                        !isLoading  ? <HeroBanner imgUrl={imgData.url}/> :
                            <SkeletonTheme color="#353b48" highlightColor="#718093">
                                <Skeleton height={667}/>
                            </SkeletonTheme>
                    }
                </div>
            </div>


        </main>
    )
}

export { Home }