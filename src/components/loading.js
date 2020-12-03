import React from 'react'
import lodingGif from '../images/gif/loading-arrow.gif'
export default function loading() {
    return (
        <div className="loading"> 
            <h4>rooms data loading</h4>
            <img src={lodingGif} alt="" srcset=""/>
        </div>
    )
}
