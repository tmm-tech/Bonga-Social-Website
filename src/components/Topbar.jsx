import React, { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import NotificationBox from "./NotificationBox";
import { notifications, chats } from "../dummyData";
import MessageBox from "./MessageBox";


const Topbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const [showMessages, setshowMessages] = useState(false);

    function handleClick() {
        setShowNotifications(!showNotifications);
    }
    function handleClickOpen() {
        setshowMessages(!showMessages);
    }

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="assets/logo.png" alt="" className="logo" />
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input type="search" placeholder="Search for Friends" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <div className="chats-container">
                            <IconButton onClick={handleClickOpen}>
                                <Chat />
                                <span className="topbarIconBadge">{chats.length}</span>
                            </IconButton>
                            {showMessages && (
                                <MessageBox chats={chats}/>
                            )}

                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="notification-container">
                            <IconButton onClick={handleClick}>
                                <Notifications />
                                <span className="topbarIconBadge">{notifications.length}</span>
                            </IconButton>
                            {showNotifications && (
                                <NotificationBox notifications={notifications} />
                            )}
                        </div>
                    </div>
                </div>
                <img src="assets/person/1.jpeg" alt="" className="profilePicture" />
            </div>
        </div >

    );
}

export default Topbar;