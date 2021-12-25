import React from 'react'
import spotifyBWLogo from '../../assets/image/Spotify_Logo_RGB_White.png'

const Premium = () => {
    return (
        <div className='premium'>
            <div className='premium__header'>
                <img className='premium__header__img' src={spotifyBWLogo} alt="spotify logo" />

                <div className='premium__header__item'>Premium</div>
                <div className='premium__header__item'>Support</div>
                <div className='premium__header__item'>Download</div>
                <div className='premium__header__item'>|</div>
                <div className='premium__header__item'>Sign up</div>
                <div className='premium__header__item'>Login</div>
            </div>

            <div className='premium__contentFirst'>
            {/* <div className='premium__contentFirst__space'  /> */}

                <div className='premium__contentFirst__item'>
                    <strong ><h1 className='premium__contentFirst__title'>Ends soon: 3 months of Premium for free</h1></strong>
                    <h5> Don't miss ad-free music listening, offline playback, and more. Cancel anytime.</h5> <br />
                    <button className='btn__blue' style={{ backgroundColor: "#0B0909" }}>GET 3 MONTHS FREE</button>
                    <button className='btn__blue' style={{ backgroundColor: "transparent", borderColor: "white", borderWidth: "5px" }}>VIEW PLAN</button> <br></br>
                    <h6 style={{ fontSize: "12px" }} className='premium__contentFirst__title3'>Individual plan only. £9.99/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 31 December 2021.
                    </h6></div>
                <img className='premium__contentFirst__img' src="https://i.scdn.co/image/ab678e040000ed3a8078929c2fe651c205adbc54" alt="img premium" />
                {/* <div className='premium__contentFirst__space'  /> */}

            </div>

            <div className='premium__contentSecond'>
                <div className='premium__contentSecond__title'>Why go Premium?</div>


                
            </div>
            <div className='premium__contentThird'>
                <div className='premium__contentSecond__title'>Why go Premium?</div>


                
            </div>

            <div className='premium__footer'>abc</div>

        </div>
    )
}

export default Premium
