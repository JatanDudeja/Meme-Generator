import React from 'react'
import face from '../images/laughing-face.png'


export default function Header(){
    return(
        <div className='header-container'>
            <img src={face} className = "header-face"/>
            <span className='header-heading'>Meme Generator</span>
            <span className='header-project'>React Course - Project 3</span>
        </div>
    )
}