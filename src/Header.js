import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, useScrollTrigger } from '@mui/material';
import { useDataLayerValue } from './DataLayer';


const Header = () => {
    const [ {user } , dispatch] = useDataLayerValue();

  return (
    <div className='header'>
        <div className="header_left" >
            <SearchIcon/>
            <input placeholder='Search for Artists, Songs,' type="text"/>
        </div>
        <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>      
    </div>
  );
}

export default Header;
