import React from 'react'
import { useHistory } from 'react-router-dom'

const AdsBanner = () => {
    const history = useHistory()
    const fowartToPremium = () =>{
        history.push("/premium")
    } 
    return (
        <div className='ads'>
            <div className='ads__title'>PREVIEW SPOTIFY <br></br>
            Try premium free for 3 months. Listen to your music offline and ad-free. Monthly subscription fee applies after.
            Open only to users who haven't already tried Premium. Offer excludes Family and Duo plans. Terms and conditions apply.
            </div>
            <button className='btn__ads' onClick={() => fowartToPremium()}> GET 3 MONTHS FREE</button>
        </div>
    )
}

export default AdsBanner
