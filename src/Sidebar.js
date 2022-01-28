import { Avatar, IconButton } from "@mui/material";
import react from "react";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./css/sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar(){

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar/>
                <div className ="sidebar-headerright">
             <IconButton> 
             <  DonutLargeIcon/>
             </IconButton>

             <IconButton> 
             <  ChatIcon/>
             </IconButton>

             <IconButton> 
             <  MoreVertIcon/>
             </IconButton>

                </div>
            </div>
               <div className=" sidebar-search">
                   <div className="sidebar-searcontainer">
                     <SearchIcon/>
                     <input type="text" placeholder="Search or Start a new chat" />
                   </div>
               </div>
            <div className="sidebar-chats">
            <SidebarChat addnewchat/>
    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
    <SidebarChat/>
    

            </div>

        </div>
    )
}

export default Sidebar;
