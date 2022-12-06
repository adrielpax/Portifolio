import React from 'react';
import { useEffect, useState } from "react";

export default function changeHiddenCard(numb:number){
    
    const [scrolled,setScrolled] = useState(Boolean);

    useEffect(()=>{
        window.addEventListener('scroll',hiddenCard)
    },[]);
    

    const hiddenCard = ()=>{
        if(window.scrollY >= numb){
            setScrolled(true)

        }else{
            setScrolled(false)

        }
    }

   
    return hiddenCard();
}