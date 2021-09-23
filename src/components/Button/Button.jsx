import React from "react";

const Button = ({text="default", icon, btnClass=""})=>{
    return(
        <>
            <button className={`default-btn ${btnClass}`}>{text} {icon}</button>
        </>
    )
}

export { Button }