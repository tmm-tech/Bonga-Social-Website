import React, { useState } from "react";
import "./topbar.css";
import { Search, Chat, Notifications } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { notifications, chats } from "../dummyData";
import NotificationBox from "./notification/NotificationBox";
import MessageBox from "./message/MessageBox";
import Profile from "./profile/Profile";


const Topbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const [showMessages, setshowMessages] = useState(false);

    const [showProfile, setShowProfile] = useState(false);

    function handleClickOpenNotifications() {
        setShowNotifications(!showNotifications);
    }
    function handleClickOpenMessages() {
        setshowMessages(!showMessages);
    }
    function handleClickOpenProfile() {
        setShowProfile(!showProfile);
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
                        <div className="chats-container">
                            <IconButton onClick={handleClickOpenMessages}>
                                <Chat />
                                <span className="topbarIconBadge">{chats.length}</span>
                            </IconButton>
                            {showMessages && (
                                <MessageBox chats={chats} />
                            )}

                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="notification-container">
                            <IconButton onClick={handleClickOpenNotifications}>
                                <Notifications />
                                <span className="topbarIconBadge">{notifications.length}</span>
                            </IconButton>
                            {showNotifications && (
                                <NotificationBox notifications={notifications} />
                            )}
                        </div>
                    </div>
                </div>
                <div className="profileContainer">
                <IconButton onClick={handleClickOpenProfile}>
                    <img src="assets/person/1.jpeg" alt="" className="profilePicture" />
                </IconButton>
                {showProfile && (
                    <Profile/>
                )}
                </div>
                
            </div>
        </div >

    );
}

export default Topbar;