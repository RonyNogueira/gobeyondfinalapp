import React from "react";

const HeroBanner = ({imgUrl=""})=>{
    return(
        <img className='hero-banner'  src={imgUrl} alt=""/>
    )
}

export { HeroBanner }