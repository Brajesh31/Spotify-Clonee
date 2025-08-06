// import React, { useEffect } from 'react';
// import './App.css';
// import Login from './Login';

//   return (
//     <div className="app">
//          <Login/>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';

// function App() {
//   useEffect(() => {
//     const token = getTokenFromUrl();
//     console.log("I have a token....>", token);
//   }, [] );

//   return (
//     <div className="app">
//          <Login/>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';

// function App() {
//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     const token = hash.access_token;

//     console.log("I have a token....>", token);
//     window.location.hash = "";
//   }, [] );

//   return (
//     <div className="app">
//          <Login/>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';

// function App() {
//   const [token, setToken] = useState(null)

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     const token = hash.access_token;

//     console.log("I have a token....>", token);
//     window.location.hash = "";
//   }, [] );

//   return (
//     <div className="app">
//          <Login/>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';

// function App() {
//   const [token, setToken] = useState(null)

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token)
//     }

//     console.log("I have a token....>", token);
//     window.location.hash = "";
//   }, [] );

//   return (
//     <div className="app">
//          <Login/>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';

// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token)
//     }

//     console.log("I have a token....>", token);
//   }, [] );

//   return (
//     <div className="app">
//       {token ? <h1>I am Loggen In</h1> : <Login/> }
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';


// const spotify = new SpotifyWebApi();

// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token);

//       spotify.setAccessToken(_token);

//       spotify.getMe().then((user) => {
//         console.log("hi",user);
//       })
//     }

//     console.log("I have a token....>", token);
//   }, [] );

//   return (
//     <div className="app">
//       {token ? <h1>I am Loggen In</h1> : <Login/> }
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';
// import Player from './Player';

// const spotify = new SpotifyWebApi();

// function App() {
//   const [token, setToken] = useState(null);
//   const [ {} , dispatch] = useDataLayerValue();

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token);

//       spotify.setAccessToken(_token);

//       spotify.getMe().then((user) => {
//         console.log("hi",user);
//       })
//     }

//     console.log("I have a token....>", token);
//   }, [] );

//   return (
//     <div className="app">
//       {token ? <Player/> : <Login/> }
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';
// import Player from './Player';
// import { useDataLayerValue } from './DataLayer';


// const spotify = new SpotifyWebApi();

// function App() {
//   const [token, setToken] = useState(null);
//   const [ {user} , dispatch] = useDataLayerValue();

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       setToken(_token);

//       spotify.setAccessToken(_token);

//       spotify.getMe().then((user) => {
//         dispatch({
//           type: 'SET_USER',
//           user: user,
//         });
//       });
//     }

//     console.log("I have a token....>", token);
//   }, []);

//     console.log("HI", user);

//   return (
//     <div className="app">
//       {token ? <Player/> : <Login/> }
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';
// import Player from './Player';
// import { useDataLayerValue } from './DataLayer';


// const spotify = new SpotifyWebApi();

// function App() {
//   const [token, setToken] = useState(null);
//   const [ {user, token } , dispatch] = useDataLayerValue();

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       dispatch ({
//         type: 'SET_TOKEN',
//         token: _token,
//       })

//       // setToken(_token);

//       spotify.setAccessToken(_token);

//       spotify.getMe().then((user) => {
//         dispatch({
//           type: 'SET_USER',
//           user: user,
//         });
//       });
//     }

//     console.log("I have a token....>", token);
//   }, []);

//     console.log("HI", user);
//     console.log("OI", token);
    
//   return (
//     <div className="app">
//       {token ? <Player/> : <Login/> }
//     </div>
//   );
// }

// export default App;




// import React, { useEffect } from 'react';
// import './App.css';
// import Login from './Login';
// import { getTokenFromUrl } from './spotify';
// import SpotifyWebApi from 'spotify-web-api-js';
// import Player from './Player';
// import { useDataLayerValue } from './DataLayer';


// const spotify = new SpotifyWebApi();

// function App() {
//   const [ {user, token } , dispatch] = useDataLayerValue();

//   useEffect(() => {
//     const hash = getTokenFromUrl();
//     window.location.hash = "";
//     const _token = hash.access_token;

//     if (_token) {
//       dispatch ({
//         type: 'SET_TOKEN',
//         token: _token,
//       })

//       spotify.setAccessToken(_token);

//       spotify.getMe().then((user) => {
//         dispatch({
//           type: 'SET_USER',
//           user: user,
//         });
//       });
//     }

//     console.log("I have a token....>", token);
//   }, []);    
    
//   return (
//     <div className="app">
//       {token ? <Player spotify={spotify} /> : <Login/> }
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [ {user, token } , dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch ({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('1MRDWDDrudz4auiWxVXzjT').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });
    }
  }, []); 
    
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login/> }
    </div>
  );
}

export default App;