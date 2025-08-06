// import React from 'react'

// function Player() {
//   return (
//     <div>
//       <h1>Welcome to Player</h1>
//     </div>
//   )
// }

// export default Player;


// import React from 'react';
// import './Player.css';

// function Player({spotify}) {
//   return (
//     <div>
//       <h1>Welcome to Player</h1>
//     </div>
//   )
// }

// export default Player;


import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';


function Player({spotify}) {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Player;