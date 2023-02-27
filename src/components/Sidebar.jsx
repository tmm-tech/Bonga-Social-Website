import React from "react";
import "./sidebar.css";
import { RssFeed , Chat, PlayCircleFilledOutlined, Group , AccountCircle, Photo, Notifications, Logout} from "@mui/icons-material";
import CloseFriend from "./closeFriend/CloseFriend";
import { Users } from "../dummyData";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <h4 className="sidebarTitle">shortcuts</h4>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li> 
                    <li className="sidebarListItem">
                        <AccountCircle className="sidebarIcon"/>
                        <span className="sidebarListItemText">My profile</span>
                    </li> 
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Messages</span>
                    </li> 
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li> 
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Friends</span>
                    </li> 
                    <li className="sidebarListItem">
                        <Photo className="sidebarIcon"/>
                        <span className="sidebarListItemText">Photos</span>
                    </li> 
                    <li className="sidebarListItem">
                        <Notifications className="sidebarIcon"/>
                        <span className="sidebarListItemText">Notifications</span>
                    </li> 
                    <li className="sidebarListItem">
                        <Logout className="sidebarIcon"/>
                        <span className="sidebarListItemText">Log out</span>
                    </li> 
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u) =>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </div>
            
        </div>
    );
}

export default Sidebar;