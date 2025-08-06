// import React from 'react';
// import './body.css';
// import Header from './Header';
// import { useDataLayerValue } from './DataLayer';

// function Body({spotify}) {
//   const [{discover_weekly}, dispatch] = useDataLayerValue()
//   return (
//     <div className='body'>
//       <Header spotify={spotify}/>
//       <div className="body_info">
//         <img src="./footer_logo.jpg" alt="" />
//         <div className="body_infoText">
//           <strong>PLAYLIST</strong>
//           <h2>Discover Weekly</h2>
//           <p>description...</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Body;



import React from 'react';
import './body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();
  
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className='body_circle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body;