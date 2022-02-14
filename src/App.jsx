import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player';

const spotify = new SpotifyWebApi()

function App() {

  const [token, setToken] = useState(null)

  useEffect(()=>{
    const hash = getTokenFromUrl()

    //Limpando o hash da url por questões de segurança
    window.location.hash = ''
    //underscore para diferenciar do state token
    const _token = hash.access_token
    if(_token) {
      setToken(_token)
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        console.log(user)
      })
    }

  }, [])

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    
    </div>
  );
}

export default App;
