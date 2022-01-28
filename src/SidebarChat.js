import { Avatar } from "@mui/material";
import React, { useEffect , useState} from 'react'

import "./css/sidebar.css";

function SidebarChat({addnewchat}) {

    const [seed ,  setSeed ]= useState("");

    useEffect(() =>{
        setSeed(Math.floor(Math.random() * 5000))
    } ,[])
    
    return (
        !addnewchat ? (<div className="sidebar-chat">
        <Avatar src= {'https://avatars.dicebear.com/api/adventurer/1234.svg'}/>
        <div className="sidebar-chatInfo">
        <h2 > React Tutorials</h2>
        <p>Last Message...</p>

        </div>
        
        
    </div>) :(
       <div className="sidebar-chat">
          <h2 >Add New Chat</h2>   

       </div> 
    ))
}

export default SidebarChat
