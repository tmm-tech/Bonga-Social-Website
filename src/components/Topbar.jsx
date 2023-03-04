import React, { useState } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import NotificationBox from "./NotificationBox";

const Topbar = () => {
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, message: 'New message from John' },
        { id: 2, message: 'New event starting in 1 hour' },
        { id: 3, message: 'You have a new friend request' },
    ];

    function handleClick() {
        setShowNotifications(!showNotifications);
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
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <div className="notification-container">
                            <IconButton onClick={handleClick}>
                                <Notifications />
                                <span className="topbarIconBadge">{notifications.length}</span>
                            </IconButton>
                            {showNotifications && (
                                <NotificationBox notifications={notifications}/>
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