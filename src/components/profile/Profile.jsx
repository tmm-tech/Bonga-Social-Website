import React from 'react';
import './Profile.css';
import { AccountCircle, Edit, Settings, PowerSettingsNew} from '@mui/icons-material';

function Profile() {

    return (
        <div className="profile-box">
            <ul className="profileList">
                <li className="profileListItem">
                    <AccountCircle className="profileIcon" />
                    <span className="profileListItemText">View Profile</span>
                </li>
                <li className="profileListItem">
                    <Edit className="profileIcon" />
                    <span className="profileListItemText">Edit Profile</span>
                </li>
                <li className="profileListItem">
                    <Settings className="profileIcon" />
                    <span className="profileListItemText">Account Setting</span>
                </li>
                <li className="profileListItem">
                    <PowerSettingsNew className="profileIcon" />
                    <span className="profileListItemText">Log Out</span>
                </li>
            </ul>


        </div>
    );
}

export default Profile;
