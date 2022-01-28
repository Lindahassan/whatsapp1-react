import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Search } from '@mui/icons-material';
import "./css/chat.css";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MicIcon from '@mui/icons-material/Mic';
function Chat() {
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar/>
                <div className="chat-headerInfo">
                        <h3> Room Name</h3>
                        <p> Last Seen..</p>
                 </div>

                <div className="header-right">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>

                    

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div  className= " chat-body">
                <p className=" chat-message
                 chat-reciever">
                    <span className="chat-name">
                        Linda
                    </span>
                    Tis is test message
                    <span className="chat-time">
                       10:15 pm
                    </span>
                </p>

                <p className=" chat-message
                 chat-reciever">
                    <span className="chat-name">
                        Linda
                    </span>
                    Tis is test message
                    <span className="chat-time">
                       10:15 pm
                    </span>
                </p>

                <p className=" chat-message
                 chat-reciever">
                    <span className="chat-name">
                        Linda
                    </span>
                    Tis is test message
                    <span className="chat-time">
                       10:15 pm
                    </span>
                </p>
            </div>

            <div className=" chat-footer">
<EmojiEmotionsIcon/>
<AttachFileIcon />
<form>
    <input type="text" placeholder= "type youre message"/>
    <input type="submit"/>

</form>
<MicIcon/>
            </div>
        </div>
    )
}

export default Chat
