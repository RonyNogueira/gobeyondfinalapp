import React from "react";

const HeroBanner = ({imgUrl="https://go-beyond-2021-final-challenge.vercel.app/_next/image?url=https%3A%2F%2Fvia.placeholder.com%2F1130x670%2F92c952&w=1920&q=75"})=>{
    return(
        <img className='hero-banner'  src={imgUrl} alt=""/>
    )
}

export { HeroBanner }