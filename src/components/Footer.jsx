import React from "react";
import "./footer.css";
import { Apartment, Phone, Facebook, Twitter, Instagram, Google, Pinterest, Android, Apple, Window } from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="footerContainer">

            <div className="section1">
                <div className="sectiona">
                    <div className="logo-icon">
                        <img src="assets/logo.png" alt="icon" className="footerLeftLogo" />
                    </div>
                    <p>The trio took this simple idea and built it into the <br />
                        world's leading carpooling platform.
                    </p>
                    <ul className="footerLeftList">
                        <li className="footerLeftListItem">
                            <Apartment className="footerLeftIcon" />
                            <span className="footerLeftListItemText">33 new montgomery st.750 san francisco, CA USA 94105.</span>
                        </li>
                        <li className="footerLeftListItem">
                            <Phone className="footerLeftIcon" />
                            <span className="footerLeftListItemText">+1-56-346 345</span>
                        </li>
                    </ul>
                </div>

                <div className="sectionb">
                    <div className="section">
                        <h5 >follow</h5>

                        <ul className="footerRightList">
                            <li className="footerRightListItem">
                                <Facebook className="footerRighttIcon" />
                                <span className="footerRightListItemText">FaceBook</span>
                            </li>
                            <li className="footerRightListItem">
                                <Twitter className="footerRighttIcon" />
                                <span className="footerRightListItemText">Twitter</span>
                            </li>
                            <li className="footerRightListItem">
                                <Instagram className="footerRighttIcon" />
                                <span className="footerRightListItemText">Instagram</span>
                            </li>
                            <li className="footerRightListItem">
                                <Google className="footerRighttIcon" />
                                <span className="footerRightListItemText">Google</span>
                            </li>
                            <li className="footerRightListItem">
                                <Pinterest className="footerRighttIcon" />
                                <span className="footerRightListItemText">Pinterest</span>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >navigate</h5>
                        <ul >
                            <li>
                                <a href="#index">about us</a>
                            </li>
                            <li>
                                <a href="#products">contact us</a>
                            </li>
                            <li>
                                <a href="#deals">terms & conditions</a>
                            </li>
                            <li>
                                <a href="#deals">RSS Syndication</a>
                            </li>
                            <li>
                                <a href="#deals">sitemap</a>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >useful links</h5>

                        <ul >
                            <li>
                                <a href="#ebay" >leasing</a>
                            </li>
                            <li>
                                <a href="#user" >submit route</a>
                            </li>
                            <li>
                                <a href="#local" >how does it work?</a>
                            </li>
                            <li>
                                <a href="#local" >agent listings</a>
                            </li>
                            <li>
                                <a href="#local" >view all</a>
                            </li>
                        </ul>
                    </div>

                    <div className="section">
                        <h5 >download apps</h5>

                        <ul >
                            <li>
                                <button className="appBtn">
                                    <Android className="footerBtnIcon" />
                                    <span className="footerBtnItemText">Android</span>
                                </button>
                            </li>
                            <li>
                                <button className="appBtn">
                                    <Apple className="footerBtnIcon" />
                                    <span className="footerBtnItemText">Apple</span>
                                </button>
                            </li>
                            <li>
                                <button className="appBtn">
                                    <Window className="footerBtnIcon" />
                                    <span className="footerBtnItemText">Windows</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </div >

    );
}

export default Footer;