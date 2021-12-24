import React from 'react'
import spotifyBWLogo from '../../assets/image/spotifyLogoBlack.png'
const Register = () => {
    return (
        <div>
            <img src={spotifyBWLogo} alt='' style={{ width: "150px" }}></img>
            <h1><strong>Sign up for free to start listening.</strong></h1>
            <button className='btn__blue'>Sign up with Facebook</button> <br></br>
            <button className='btn__blue' ><i class="fab fa-google"></i> Sign up with Google</button>

            <h6>_________or_________</h6>
            <h5><strong>Sign up with your email adress</strong></h5>
            <div className='form-container'>
                <label htmlFor='' className='form-container__label'  ><strong>What's your email?</strong></label><br></br>
                <input className='input-large' name='email' id="email" placeholder=' Enter your email.'></input>
            </div>
            <div className='form-container'>
                <label htmlFor='' className='form-container__label'  ><strong>Confirm your email?</strong></label><br></br>
                <input className='input-large' name='email' id="email" placeholder=' Confirm your email.'></input>
            </div>
            <div className='form-container'>
                <label htmlFor='' className='form-container__label'  ><strong>Create a password</strong></label><br></br>
                <input className='input-large' name='email' id="email" placeholder=' Create a password.'></input>
            </div>
            
            <div className='form-container'>
                <label htmlFor='' className='form-container__label'  ><strong>What should we call you??</strong></label><br></br>
                <input className='input-large' name='email' id="email" placeholder=' Enter your profile?'></input>
            </div>
            <h6 style={{color:'#1DB954'}}>*Form này chỉ để làm cảnh. </h6>
            <button className='btn__blue' style={{backgroundColor:'#1DB954', color:'black'}}>Sign up</button>
         

        </div>
    )
}

export default Register
