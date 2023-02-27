import React from "react";
import "./share.css";

import { PermMedia,PlayCircleFilledOutlined, Label, Room, EmojiEmotions } from "@mui/icons-material";

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input
                        placeholder="What's on your mind Lynette?"
                        className="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" id="photo" />
                            <label className="fileContainer">
                                <input type="file" />
                                <span className="shareOptionText">
                                    Photo</span>
                            </label>

                        </div>
                        <div className="shareOption">
                            <PlayCircleFilledOutlined className="shareIcon" id="video" />
                            <label className="fileContainer">
                                <input type="file" />
                                <span className="shareOptionText">
                                    Video</span>
                            </label>

                        </div>
                        <div className="shareOption">
                            <Label className="shareIcon" id="tag" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareIcon" id="location" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareIcon" id="feelings" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}

export default Share;