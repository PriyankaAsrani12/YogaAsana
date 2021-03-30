import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import {Avatar,IconButton} from '@material-ui/core'

function Sidebar() {
    return ( 
        <div className = 'sidebar' >
            <div className='sidebar_header'>
                <Avatar />

            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input type='text' placeholder='Search or start new chat'></input>
                </div>
            </div>

            <div className='sidebar_chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar