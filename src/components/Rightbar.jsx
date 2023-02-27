import React from "react";
import "./rightbar.css";
import { Users } from "../dummyData";
import Online from "./online/Online";

const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Maya Singh </b> and <b>3 other friends</b>  have a birthday today
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Nairobi</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Kiambu</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>

                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Asha Patel</span>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                
               {profile ? <ProfileRightbar /> : <HomeRightbar/>}
            </div>
        </div>
    );
}

export default Rightbar;