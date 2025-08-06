import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
        <img src="/Spotify_Logo_RGB_White.png" alt="" />
        <a href={loginUrl} >Login with Spotify</a>
    </div>
  )
}

export default Login;
