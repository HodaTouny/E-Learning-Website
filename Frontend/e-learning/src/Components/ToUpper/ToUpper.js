import React from 'react';
import { BsArrowUp } from "react-icons/bs";

import '../assets/css/upper.css';

const Upper = () =>{

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return(
        <div className='Upper' onClick={scrollToTop} >
            <BsArrowUp className='UpperIcon'/>
        </div>
    );

}

export default Upper;