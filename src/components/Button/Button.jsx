import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({
    text="default",
    useIcon = false,
    icon, btnClass="",
    }
)=>{

    return(
        <>
            <button className={`default-btn ${btnClass}`}>
                {text} {useIcon && <FontAwesomeIcon className='default-btn__icon' icon={icon}/> }
            </button>
        </>
    )
}

export { Button }