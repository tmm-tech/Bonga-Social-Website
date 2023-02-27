import React from "react";
import "./home.css";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>

        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        <Footer/>
        

        </>
            

    );
}

export default Home;