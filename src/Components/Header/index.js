import React from 'react'
import './header.css'
import heroimage from './heroimage.jpeg'
const Header = () =>
    <div>
        <h1>The Banking API For You by SF</h1>
        <img src={heroimage} style={{"width" : "65%"}} alt="Bank ing API Header"/>
    </div>


export default Header