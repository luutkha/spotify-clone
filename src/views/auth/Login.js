import React from 'react'
import { Link } from 'react-router-dom'
import spotifyBWLogo from '../../assets/image/spotifyLogoBlack.png'

const Login = () => {
    return (
        <div className='form-container '> 
            <div>
                <img src={spotifyBWLogo} alt='' style={{ width: "250px" }}></img>
                <h6><strong>Login for free to start listening.</strong></h6>
                <button className='btn__long__spacing' style={{ backgroundColor: "#3A61B3" }}><i class="fab fa-facebook"></i> Login with Facebook</button> <br></br>
                <button className='btn__long__spacing' style={{ backgroundColor: "black" }}> <i class="fab fa-apple"></i> Login with Apple</button> <br></br>
                <button className='btn__nonBg__spacing' ><i class="fab fa-google"></i> Sign up with Google</button>
                <br></br>

                <button className='btn__nonBg__spacing' >Sign up with Phone Number</button>

                <h6>_________or_________</h6>
                {/* <h5><strong>Sign up with your email adress</strong></h5> */}
                <div className='form-container'>
                    <label htmlFor='' className='form-container__label'  ><strong>Account or Email</strong></label><br></br>
                    <input className='input-large' name='email' id="email" placeholder=' Account or Email.'></input>
                </div>
                <div className='form-container'>
                    <label htmlFor='' className='form-container__label'  ><strong>Password</strong></label><br></br>
                    <input className='input-large' name='email' id="email" placeholder=' Your Password.'></input>
                </div>
                <a type='button ' href='https://www.spotify.com/uk/password-reset/' style={{ color: "#616467" }}>Forgot password?</a>
                <br></br>
              
                <div className=''> 
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1" > Remember me </label>
                <a href='https://accounts.spotify.com/authorize?client_id=aa81c8b08f9847ccb97d12ed03dccd34&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=user-read-playback-state' className='btn__blue' style={{ backgroundColor: '#1DB954', color: 'white' }}>Sign In</a>

                </div>
                
                <h6>__________________________________________________________</h6>
                <br></br>
                <h6><strong>Don't have account?</strong></h6>
                <Link to="/register">
                <button className='btn__nonBg__spacing' >Sign up Spotify Account</button>
                </Link>
                


            </div>
        </div>
    )
}

export default Login
