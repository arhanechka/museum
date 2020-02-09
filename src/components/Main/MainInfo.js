import React from 'react';
import Carusel from './Carousel/Carusel'
import classes from '../../Styles/MainStyles.css'


const mainInfo = () =>{

    return ( 
        <div>
        {/* <div className={classes.d2}><h1><span></span></h1> */}
        <h1 style={{margin: 20}}>Welcome to the Fastiv school #9 museum!</h1>
        <Carusel/>
        </div>)
}

export default mainInfo;